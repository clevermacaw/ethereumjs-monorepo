import { Config } from '../../lib/config'
import { FullEthereumService, LightEthereumService } from '../../lib/service'
import MockServer from './mocks/mockserver'
import MockChain from './mocks/mockchain'
import Blockchain from '@ethereumjs/blockchain'
import Common from '@ethereumjs/common'

interface SetupOptions {
  location?: string
  height?: number
  interval?: number
  syncmode?: string
  minPeers?: number
  common?: Common
}

export async function setup(
  options: SetupOptions = {}
): Promise<[MockServer, FullEthereumService | LightEthereumService]> {
  const { location, height, interval, syncmode } = options
  const minPeers = options.minPeers ?? 1

  const loglevel = 'error'
  const lightserv = syncmode === 'full'
  const common = options.common
  const config = new Config({ loglevel, syncmode, lightserv, minPeers, common })

  const server = new MockServer({ config, location })
  const blockchain = await Blockchain.create({
    validateBlocks: false,
    validateConsensus: false,
    common,
  })

  const chain = new MockChain({ config, blockchain, height })

  const servers = [server] as any
  const serviceConfig = new Config({ loglevel, syncmode, servers, lightserv, minPeers, common })
  // attach server to centralized event bus
  ;(server.config as any).events = serviceConfig.events
  const serviceOpts = {
    config: serviceConfig,
    chain,
    interval: interval ?? 500, // do not make this too low, this will otherwise cause side effects
  }

  let service
  if (syncmode === 'light') {
    service = new LightEthereumService(serviceOpts)
  } else {
    service = new FullEthereumService({
      ...serviceOpts,
      lightserv: true,
    })
  }
  await service.open()
  if ('execution' in service.synchronizer) {
    service.synchronizer.execution.syncing = false
  }
  await service.start()
  await server.start()

  return [server, service]
}

export async function destroy(
  server: MockServer,
  service: FullEthereumService | LightEthereumService
): Promise<void> {
  await server.stop()
  await service.stop()
}

export async function wait(delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay))
}

# @ethereumjs/client

[![NPM Package][client-npm-badge]][client-npm-link]
[![GitHub Issues][client-issues-badge]][client-issues-link]
[![Actions Status][client-actions-badge]][client-actions-link]
[![Code Coverage][client-coverage-badge]][client-coverage-link]
[![Discord][discord-badge]][discord-link]

| Ethereum Execution (Eth 1.0) Client built in TypeScript/JavaScript. |
| --- |

Note: there is no current release on npm and the releases from the [standalone repository](https://github.com/ethereumjs/ethereumjs-client) are outdated. Use the latest `master` to run the client. There will be an up-to-date client release soon (Fall 2021) under a scoped `@ethereumjs/client` naming scheme. 

# INTRODUCTION

The EthereumJS Client is an Ethereum Execution Client (similar to [go-ethereum](https://github.com/ethereum/go-ethereum) or [Nethermind](https://github.com/NethermindEth/nethermind)) written in `TypeScript`/`JavaScript`, the non-Smart-Contract language Ethereum dApp developers are most familiar with. It is targeted to be a client for research and development and not meant to be used in production on `mainnet` for the foreseeable future (out of resource and security considerations). 

Here are some use cases:

- Sync the main Ethereum networks (`mainnet`, `goerli`, `rinkeby`,...)
- Set up your own local development networks (PoA Clique)
- Run a network with your own custom [EthereumJS VM](../vm)
- Analyze what's in the Ethereum `mainnet` [transaction pool](./lib/sync/txpool.ts)
- Run experiments on Ethereum browser sync (see [example](./examples/light-browser-sync.md))

The client has an extremely modular design by building upon central other libraries in the EthereumJS monorepo ([VM](../vm), [Merkle Patricia Tree](../trie), [Blockchain](../blockchain), [Block](../block), [tx](../tx), [devp2p](../devp2p) and [Common](../common)) and is therefore extremely well suited for a deep dive into Ethereum protocol development.

We invite you to explore and would be delighted if you give us feedback on your journey! 🙂 ❤️

# SETUP

## INSTALL

```shell
npm install @ethereumjs/client // Release during Fall 2021
```

For the `ethereumjs` CLI command to work run:

```shell
npm link
```

As long as there is no up-to-date client release on npm and for development purposes the client can be used like this:

1. Clone the monorepo with `git clone https://github.com/ethereumjs/ethereumjs-monorepo.git`
2. Set things up and install dependencies (see [monorepo docs](../../config/MONOREPO.md))
3. Run the client with `npm run client:start` from the `client` root directory (e.g. `packages/client` if working on a local copy of the monorepo)

Furthermore see the [Technical Guidelines](#technical-guidelines) to dive directly into some more in-depth development info.

## USAGE

### Introduction

You can get the client up and running by going to the shell and run:

```shell
# npm installation
ethereumjs

# GitHub installation
npm run client:start
```

And pass in CLI paramters like:

```shell
# npm installation
ethereumjs --network=goerli

# GitHub installation
npm run client:start -- --network=goerli
```

To see a help page with the full list of client options available run:

```shell
ethereumjs --help
```

### Supported Networks

The EthereumJS client is tightly integrated with the EthereumJS [Common](../common) library and gets its network state and information from this library and supports all networks support by `Common`.

The main supported networks are:

- `mainnet`
- `rinkeby`
- `ropsten`
- `goerli`

Use the CLI `--network` option to switch the network:

```shell
ethereumjs --network=rinkeby
```

The client currently supports `full` sync being set as a default and has experimental support for `light` sync.

### Custom Chains

The EthereumJS client supports running custom chains based on a custom chain configuration. There are two ways of reading in custom chain configuration parameters:

#### Common-based Configuration

We have got our own flexible chain configuration and genesis state configuration format applied in the `Common` library, see the `Common` [chain JSON files](../common/src/chains/) as well as corresponding [Genesis JSON files](../common/src/genesisStates/) for inspiration.

Custom chain files following this format can be passed in to the client with the following options:

```shell
ethereumjs --customChain=[COMMON_FORMAT_CHAIN_FILE] --customGenesisState=[COMMON_FORMAT_GENESIS_STATE]
```

#### Geth Genesis Files

It is also possible to use a chain configuration as defined by the Go-Ethereum [genesis.json file format](https://geth.ethereum.org/docs/interface/private-network).

Use the following option to pass in to the client:

```shell
ethereumjs --gethGenesis=[GETH_GENESIS_JSON_FILE]
```

### Custom Network Mining (Beta)

The client supports private custom network mining on PoA clique chains by using the `--mine` option together with passing in a comma separated list of accounts with the `--unlock` option:

```shell
ethereumjs --mine --unlock=[ADDRESS1],[ADDRESS2],...
```

Note that this feature is in `beta` and shouldn't be used with accounts holding a substantial amount of `Ether` on mainnet (or other valuable assets) for security reasons.

## API

[API Reference](./docs/README.md)

See also this [diagram](./diagram/client.svg) for an overview of the client structure with the initialization and message flow.

## JSON-RPC

### Overview

You can expose a [JSON-RPC](https://github.com/ethereum/wiki/wiki/JSON-RPC) interface along a client run with:

```shell
ethereumjs --rpc
```

To run just the server without syncing:

```shell
ethereumjs --rpc --maxPeers=0
```

Currently only a small subset of `RPC` methods are implemented.(\*) You can have a look at the
[./lib/rpc/modules/](./lib/rpc/modules) source folder or the tracking issue
[#1114](https://github.com/ethereumjs/ethereumjs-monorepo/issues/1114) for an overview.

(*) Side note: implementing RPC methods is actually an extremely thankful task for a first-time
contribution on the project *hint\* _hint_. 😄

### API Examples

You can use `cURL` to request data from an API endpoint. Here is a simple example for
[web3_clientVersion](https://github.com/ethereum/wiki/wiki/JSON-RPC#web3_clientversion):

```shell
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","id":1,"method":"web3_clientVersion", "params": []}' http://localhost:8545
```

Note that `"params": []` can also be omitted in this case.

Or - somewhat more convenient and with formatted output - with a tool like [httpie](http://httpie.org/):

```shell
http POST http://localhost:8545 jsonrpc=2.0 id=1 method=web3_clientVersion params:=[]
```

Note the `:=` separator for the `params` parameter to
[indicate](https://httpie.org/docs#non-string-json-fields) raw `JSON` as an input.

This will give you an output like the following:

```json
{
  "id": "1",
  "jsonrpc": "2.0",
  "result": "EthereumJS/0.0.5/darwin/node12.15.0"
}
```

Here's an example for a call on an endpoint with the need for parameters. The following call uses
the [eth_getBlockByNumer](https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getblockbynumber) endpoint
to request data for block number 436 (you can use an tool like
[RapidTables](https://www.rapidtables.com/convert/number/decimal-to-hex.html) for conversion to `hex`):

```shell
curl -X POST -H "Content-Type: application/json" --data '{"jsonrpc":"2.0","method":"eth_getBlockByNumber","params":["0x1b4", true],"id":1}' http://127.0.0.1:8545
```

Same with `httpie`:

```shell
http POST http://localhost:8545 jsonrpc=2.0 id=1 method=eth_getBlockByNumber params:='["0x1b4",true]'
```

Output:

```json
{
  "id": "1",
  "jsonrpc": "2.0",
  "result": {
    "header": {
      "bloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000",
      "coinbase": "0xbb7b8287f3f0a933474a79eae42cbca977791171",
      "difficulty": "0x04ea3f27bc",
      "extraData": "0x476574682f4c5649562f76312e302e302f6c696e75782f676f312e342e32",
      "gasLimit": "0x1388",
      "gasUsed": "0x",
      "mixHash": "0x4fffe9ae21f1c9e15207b1f472d5bbdd68c9595d461666602f2be20daf5e7843",
      "nonce": "0x689056015818adbe",
      "number": "0x01b4",
      "parentHash": "0xe99e022112df268087ea7eafaf4790497fd21dbeeb6bd7a1721df161a6657a54",
      "receiptTrie": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      "stateRoot": "0xddc8b0234c2e0cad087c8b389aa7ef01f7d79b2570bccb77ce48648aa61c904d",
      "timestamp": "0x55ba467c",
      "transactionsTrie": "0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421",
      "uncleHash": "0x1dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347"
    },
    "transactions": [],
    "uncleHeaders": []
  }
}
```

## DEVELOPMENT

### Design

For an overview on the design goals which served as a guideline on design decisions as well as some structural client overview see the dedicated [DESIGN.md](./DESIGN.md) document.

### Client Customization

To get a start on customizing the client and using it programmatically see the code from [./bin/cli.ts](./bin/cli.ts) to get an idea of how an [EthereumClient](./lib/client.ts) instance is invoked programmatically.

We would love to hear feedback from you on what you are planning and exchange on ideas how a programmatic exposure of the client API can be achieved more systematically and useful for third-party development use.

### Debugging

### Local Test Network

For some guidance on how to setup local testnetworks see the examples on [local debugging](./examples/local-debugging.md) and setting up a [private network with Geth](./examples/private-geth-network.md).

#### Using Debug Loggers

The client's logging verbosity level can be set with `--loglevel`.  Available levels are
`error`, `warn`, `info`, `debug`.

```shell
ethereumjs --loglevel=debug
```

For more in-depth debugging on networking the underlying [devp2p](../devp2p) library integrates with the [debug](https://github.com/visionmedia/debug) package and can also be used from within a client execution context:

```shell
DEBUG=*,-babel [CLIENT_START_COMMAND]
```

The above command outputs the log messages from all `devp2p` debug loggers available. For a more targeted logging the different loggers can also be activated separately, e.g.:

```shell
DEBUG=devp2p:rlpx,devp2p:eth,-babel [CLIENT_START_COMMAND]
```

### Diagram Updates

To update the structure diagram files in the root folder open the `client.drawio` file in [draw.io](https://draw.io/), make your changes, and open a PR with the updated files. Export `svg` and `png` with `border` `width=20` and `transparency=false`. For `png` go to "Advanced" and select `300 DPI`.

## EthereumJS

See our organizational [documentation](https://ethereumjs.readthedocs.io) for an introduction to `EthereumJS` as well as information on current standards and best practices.

If you want to join for work or do improvements on the libraries have a look at our [contribution guidelines](https://ethereumjs.readthedocs.io/en/latest/contributing.html).

[client-npm-badge]: https://img.shields.io/npm/v/@ethereumjs/client.svg
[client-npm-link]: https://www.npmjs.com/package/@ethereumjs/client
[client-issues-badge]: https://img.shields.io/github/issues/ethereumjs/ethereumjs-monorepo/package:%20client?label=issues
[client-issues-link]: https://github.com/ethereumjs/ethereumjs-monorepo/issues?q=is%3Aopen+is%3Aissue+label%3A"package%3A+client"
[client-actions-badge]: https://github.com/ethereumjs/ethereumjs-monorepo/workflows/Client/badge.svg
[client-actions-link]: https://github.com/ethereumjs/ethereumjs-monorepo/actions?query=workflow%3A%22Client%22
[client-coverage-badge]: https://codecov.io/gh/ethereumjs/ethereumjs-monorepo/branch/master/graph/badge.svg?flag=client
[client-coverage-link]: https://codecov.io/gh/ethereumjs/ethereumjs-monorepo/tree/master/packages/client
[discord-badge]: https://img.shields.io/static/v1?logo=discord&label=discord&message=Join&color=blue
[discord-link]: https://discord.gg/TNwARpR

window.BENCHMARK_DATA = {
  "lastUpdate": 1632211217482,
  "repoUrl": "https://github.com/ethereumjs/ethereumjs-monorepo",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e8c5c15dfcfe545d3ca9938f9f3ec127c7877618",
          "message": "Client: sendRawTransaction RPC method TxPool inclusion / generalization of HF choice for tx creation / tx pool improvements and cleanup functionality (#1428)\n\n* client -> RPC: generalize HF selection for tx creation in sendRawTransaction RPC call\r\n\r\n* client -> RPC: expand RPC test baseSetup() return values to be more flexible along test setup modification\r\n\r\n* client -> RPC: added additional sendRawTransaction RPC method sync target height test\r\n\r\n* client -> txPool, RPC: added new addTransaction() and sendTransactions() tx pool methods\r\n\r\n* client -> tx pool: only send txs to peers if the list of txs is not empty\r\n\r\n* client -> tx pool: switched to map for handled data structure to prepare for more efficient hash pool access and allow for cleanup\r\n\r\n* client -> tx pool: added two new internal types UnprefixedAddress and UnprefixedHash for more explicit hash and address string typing\r\n\r\n* client -> tx pool: improved API terminology\r\n\r\n* client -> tx pool: extract removeByHash() functionality, rewrite retrieval code\r\n\r\n* client -> tx pool: added tx pool cleanup functionality and tests",
          "timestamp": "2021-08-27T19:35:13+02:00",
          "tree_id": "a936d14fc00fe5ae017316d5a728ee882818b1c8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e8c5c15dfcfe545d3ca9938f9f3ec127c7877618"
        },
        "date": 1630086004981,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 20092,
            "range": "±13.31%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22657,
            "range": "±1.79%",
            "unit": "ops/sec",
            "extra": "87 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20791,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "88 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9169,
            "range": "±21.58%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 19844,
            "range": "±5.60%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1297,
            "range": "±5.85%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 276,
            "range": "±11.62%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 118,
            "range": "±37.08%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.18,
            "range": "±135.28%",
            "unit": "ops/sec",
            "extra": "17 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d2578d22d7acb60cf48866ddfdbe74e3384dd06",
          "message": "tests: update to 9.0.5 (#1422)",
          "timestamp": "2021-08-27T14:14:47-07:00",
          "tree_id": "76abd28c5d0f89c1da6ce3d632dd8ffc9bc434e7",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5d2578d22d7acb60cf48866ddfdbe74e3384dd06"
        },
        "date": 1630099235909,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15173,
            "range": "±13.96%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17841,
            "range": "±2.07%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16601,
            "range": "±1.35%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15462,
            "range": "±2.41%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6590,
            "range": "±24.18%",
            "unit": "ops/sec",
            "extra": "19 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1099,
            "range": "±7.62%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 129,
            "range": "±88.52%",
            "unit": "ops/sec",
            "extra": "49 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 103,
            "range": "±22.18%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.81,
            "range": "±107.45%",
            "unit": "ops/sec",
            "extra": "32 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc0388c732dcb14e7003724a49c5dc4b914593a8",
          "message": "client: Consolidate/move client usage examples (#1434)",
          "timestamp": "2021-08-27T14:15:52-07:00",
          "tree_id": "03a61b44af6fa78a6e841c538ba1e4302340a7b2",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/fc0388c732dcb14e7003724a49c5dc4b914593a8"
        },
        "date": 1630100159410,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 19239,
            "range": "±14.10%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22411,
            "range": "±2.53%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20288,
            "range": "±1.96%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8200,
            "range": "±22.50%",
            "unit": "ops/sec",
            "extra": "36 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 19806,
            "range": "±4.87%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1279,
            "range": "±6.29%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 111,
            "range": "±124.03%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 128,
            "range": "±14.43%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.85,
            "range": "±136.30%",
            "unit": "ops/sec",
            "extra": "18 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "866f865e792a613e9d417f67eecec36f06dc47a0",
          "message": "client: parse gasLimit as number for type safety (#1437)",
          "timestamp": "2021-08-28T06:34:54-04:00",
          "tree_id": "8a4857069ff6c247a050ac7d3c5b001b161f54f1",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/866f865e792a613e9d417f67eecec36f06dc47a0"
        },
        "date": 1630147249631,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14149,
            "range": "±20.06%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16868,
            "range": "±2.42%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15296,
            "range": "±2.23%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14184,
            "range": "±3.36%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6711,
            "range": "±18.59%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 878,
            "range": "±23.04%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 137,
            "range": "±78.10%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 111,
            "range": "±9.96%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.06,
            "range": "±114.63%",
            "unit": "ops/sec",
            "extra": "30 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "327d2d44878deb39ef5bd1879c27fb5b94a4e232",
          "message": "devp2p: add snappy compression to ping/pong (#1442)\n\n* devp2p:  add snappy compression to ping/pong\r\n\r\n* lint",
          "timestamp": "2021-08-31T08:43:30+02:00",
          "tree_id": "14fd0efd3c0ca751b0d895921ad7143ad1820690",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/327d2d44878deb39ef5bd1879c27fb5b94a4e232"
        },
        "date": 1630392908667,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14107,
            "range": "±12.23%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13993,
            "range": "±11.42%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14595,
            "range": "±3.21%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13364,
            "range": "±3.84%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 8828,
            "range": "±18.65%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 879,
            "range": "±21.25%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 138,
            "range": "±81.29%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 87.06,
            "range": "±53.47%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.26,
            "range": "±122.50%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "zachinquarantine@yahoo.com",
            "name": "Zachinquarantine",
            "username": "Zachinquarantine"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6d80656edc28b94750ae72a117e5dd308e42b3d6",
          "message": "Common: Remove calaveras ephemerial testnet (#1430)\n\n* Remove calaveras json config\r\n\r\n* Remove calaveras testnet\r\n\r\n* Remove Calaveras testnet\r\n\r\n* Remove Calaveras testnet\r\n\r\n* Remove mention of Calaveras testnet\r\n\r\n* Remove mention of Calaveras testnet\r\n\r\n* Remove Calaveras testnet\r\n\r\n* Remove Calaveras\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-09-01T09:30:12+02:00",
          "tree_id": "b8aaced5f950bd0d37e559a9ff607e6e318f355c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6d80656edc28b94750ae72a117e5dd308e42b3d6"
        },
        "date": 1630481754979,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15079,
            "range": "±13.57%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16965,
            "range": "±6.40%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 15857,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 15293,
            "range": "±2.61%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 5356,
            "range": "±20.97%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1068,
            "range": "±7.54%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 132,
            "range": "±85.77%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 101,
            "range": "±33.58%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.91,
            "range": "±123.27%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "508de0d93df24bb85719f59f55c00b88351def3b",
          "message": "bug: fix comparison operator bug (#1451)",
          "timestamp": "2021-09-03T08:37:14-07:00",
          "tree_id": "00276051858bb21e796a482f0a0775c8980a1117",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/508de0d93df24bb85719f59f55c00b88351def3b"
        },
        "date": 1630683684222,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 21942,
            "range": "±10.70%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 23039,
            "range": "±2.55%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 20009,
            "range": "±2.56%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8039,
            "range": "±19.26%",
            "unit": "ops/sec",
            "extra": "38 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 20676,
            "range": "±3.25%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1377,
            "range": "±5.19%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 98.67,
            "range": "±114.93%",
            "unit": "ops/sec",
            "extra": "22 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 159,
            "range": "±6.65%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.54,
            "range": "±145.66%",
            "unit": "ops/sec",
            "extra": "14 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "4c9d34b4c79e09b6c9b7a42f9c3d9c9e2fb42952",
          "message": "client: fix reqId overflow issue in ETH handler (#1456)",
          "timestamp": "2021-09-03T22:33:35-04:00",
          "tree_id": "fa58f1694d38402727f5d21e5ace8ee3a4506d14",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/4c9d34b4c79e09b6c9b7a42f9c3d9c9e2fb42952"
        },
        "date": 1630723108352,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 15726,
            "range": "±15.50%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17846,
            "range": "±2.72%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 16425,
            "range": "±2.33%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14821,
            "range": "±7.04%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 4815,
            "range": "±21.31%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1082,
            "range": "±7.91%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 108,
            "range": "±104.54%",
            "unit": "ops/sec",
            "extra": "48 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 93.71,
            "range": "±40.66%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.12,
            "range": "±118.97%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6e6dfb8f4c813c8be4be23b3f5a627e3aa545835",
          "message": "Devp2p: Per-Message debugging for ETH and other protocols / Improved docs (#1449)\n\n* devp2p -> debugger: added ETH protocol per-message debugging, improved debug logging documentation\r\n\r\n* devp2p -> debugger: added LES protocol per-message debugging\r\n\r\n* devp2p -> debugger: added RLPx protocol per-message debugging\r\n\r\n* devp2p -> debugger: added DPT server per-message debugging\r\n\r\n* devp2p -> debugger: added special RLPx peer DISCONNECT reason logger\r\n\r\n* devp2p -> debugger: added IP-based per-peer debugger and special FIRST_PEER first-connected-peer debugger",
          "timestamp": "2021-09-06T10:41:59+02:00",
          "tree_id": "784e7beebcc27abb71ddd85517a0c5449ee21eee",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6e6dfb8f4c813c8be4be23b3f5a627e3aa545835"
        },
        "date": 1630918042262,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13627,
            "range": "±7.81%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 11323,
            "range": "±16.48%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13651,
            "range": "±3.30%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12697,
            "range": "±3.64%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 11857,
            "range": "±12.17%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 627,
            "range": "±22.19%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 232,
            "range": "±7.94%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 48.2,
            "range": "±120.93%",
            "unit": "ops/sec",
            "extra": "27 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 19.17,
            "range": "±41.93%",
            "unit": "ops/sec",
            "extra": "45 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "67348d6e3f51eba1054b5ce8266c5aa26f954fd0",
          "message": "add develop branch to GH actions (#1453)\n\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-06T11:06:33+02:00",
          "tree_id": "98de8379945ae4650d6de7221796e5ce1683e477",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/67348d6e3f51eba1054b5ce8266c5aa26f954fd0"
        },
        "date": 1630919516791,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13220,
            "range": "±12.78%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14060,
            "range": "±11.37%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 14050,
            "range": "±3.59%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13592,
            "range": "±3.82%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 6927,
            "range": "±23.14%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 893,
            "range": "±36.14%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 138,
            "range": "±80.31%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 100,
            "range": "±31.30%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 23.4,
            "range": "±11.39%",
            "unit": "ops/sec",
            "extra": "29 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b91ccde820dae0b4eb969eb53d88227c9582931",
          "message": "client: add `NEW_BLOCK` devp2p message handler (#1443)\n\n* client: add NEW_BLOCK handler to ETH protocol\r\n\r\n* lint\r\n\r\n* move block construction to handleEth\r\n\r\n* Add encode method to NewBlock handler\r\n\r\n* Add test to invoke handleNewBlock\r\n\r\n* add integration test for new block\r\n\r\n* lint fixes\r\n\r\n* Fix import\r\n\r\n* Revise common instantiation in block constructor\r\n\r\n* Fix protocol encode/decode and add test\r\n\r\n* lint fixes\r\n\r\n* Fix broken test\r\n\r\n* lint fix\r\n\r\n* Many fixes\r\n\r\n* fix broken test\r\n\r\n* fix broken test\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-06T11:31:44+02:00",
          "tree_id": "ef48072ba50468a1618dd1ac3060b4c14a5bc57c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5b91ccde820dae0b4eb969eb53d88227c9582931"
        },
        "date": 1630920965055,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18889,
            "range": "±14.39%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 22130,
            "range": "±2.01%",
            "unit": "ops/sec",
            "extra": "83 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 19885,
            "range": "±2.40%",
            "unit": "ops/sec",
            "extra": "79 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8614,
            "range": "±22.98%",
            "unit": "ops/sec",
            "extra": "37 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17752,
            "range": "±6.66%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1262,
            "range": "±6.57%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 113,
            "range": "±119.70%",
            "unit": "ops/sec",
            "extra": "29 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 124,
            "range": "±11.94%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.39,
            "range": "±140.01%",
            "unit": "ops/sec",
            "extra": "17 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a3984a3b80bccbfb376918c51556a845afbecad9",
          "message": "monorepo: upgrade TypeScript to v4, explicit `error: any` type for catch clauses (#1452)\n\n* run test on PR to debug\r\n\r\n* upgrade typescript version\r\n\r\n* add `any` type to error catch clauses to satisfy noImplicitAny\r\n\r\n* remove debugging line\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-07T10:02:39+02:00",
          "tree_id": "46e7349936bfc096d73d386f8a206e1c475df364",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/a3984a3b80bccbfb376918c51556a845afbecad9"
        },
        "date": 1631002062478,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16824,
            "range": "±11.88%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17475,
            "range": "±2.84%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 9482,
            "range": "±21.65%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14950,
            "range": "±1.76%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15684,
            "range": "±1.27%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1241,
            "range": "±7.03%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 121,
            "range": "±115.66%",
            "unit": "ops/sec",
            "extra": "29 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 147,
            "range": "±6.61%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.25,
            "range": "±82.44%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "2e8dff0e3d7dcd45de6b79676d5b5a58458fed3f",
          "message": "Client: New Pooled Tx Hashes Service Functionality (Re-broadcasting/Tracking) for TxPool (#1441)\n\n* client -> tx pool: added initial setup and functionality to send/broadcast new (pooled) tx hashes\r\n\r\n* client -> tx pool: add new pooled tx hashes received as well as rebroadcasted to list of tx hashes known by peer\r\n\r\n* client -> tx pool: some bugfixes, refactoring and API refinements along the new tx hashes broadcasting logic, added tests\r\n\r\n* client -> tx pool: added new getByHash() function, added PooledTransactions response service functionality\r\n\r\n* client: improved message encoding/decoding and typing for transaction related service functionality (PooledTransactions, Transactions, GetPooledTransactions)\r\n\r\n* client -> tx pool: added mock for getPooledTransactions ETH message integration test (TODO)\r\n\r\n* client -> FullEthereumService: fixed GetPooledTransactions message handling bug, added integration test\r\n\r\n* client -> FullEthereumService: added simple Transactions message integration test\r\n\r\n* client -> tx pool: added Transactions ETH method retrieval and rebroadcast functionality\r\n\r\n* Fix test\r\n\r\nCo-authored-by: acolytec3 <17355484+acolytec3@users.noreply.github.com>",
          "timestamp": "2021-09-07T20:46:41+02:00",
          "tree_id": "26a84f99c2149f51e07a1e1a1d450b66f2425e2b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/2e8dff0e3d7dcd45de6b79676d5b5a58458fed3f"
        },
        "date": 1631040666149,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 18014,
            "range": "±15.16%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 20073,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11027,
            "range": "±21.96%",
            "unit": "ops/sec",
            "extra": "52 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 17269,
            "range": "±1.14%",
            "unit": "ops/sec",
            "extra": "81 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 18493,
            "range": "±2.89%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1240,
            "range": "±6.05%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 78.94,
            "range": "±125.07%",
            "unit": "ops/sec",
            "extra": "20 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 144,
            "range": "±7.21%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.23,
            "range": "±127.19%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "77563348+emersonmacro@users.noreply.github.com",
            "name": "emersonmacro",
            "username": "emersonmacro"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "46797fec716a9749d3e96b619a1bcb33a00400e9",
          "message": "Block, Tx: Caching for hash method (#1445)\n\n* block: caching for hash method\r\n\r\n* tx: caching for hash method\r\n\r\n* block, tx: updates to caching for hash method\r\n\r\n* block, tx: updates to caching for hash method\r\n\r\n* block: refactor caching mechanism in block header\r\n\r\n* block: lint fixes\r\n\r\n* block: hash caching refactor\r\n\r\n* tx: hash caching refactor\r\n\r\n* tx: test for hash throwing on unsigned tx\r\n\r\n* tx: updated tests for hash caching\r\n\r\n* tx: revert throwing when hash() is called on unsigned legacy txs due to eventual compatibility issues, added longer explanatory comment\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-08T11:37:52+02:00",
          "tree_id": "254503a09f65b675e5879e624e62fff2845548b6",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/46797fec716a9749d3e96b619a1bcb33a00400e9"
        },
        "date": 1631094149796,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16897,
            "range": "±10.71%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17763,
            "range": "±2.14%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 9959,
            "range": "±19.14%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 13881,
            "range": "±2.51%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15085,
            "range": "±3.62%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1289,
            "range": "±6.39%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 101,
            "range": "±111.14%",
            "unit": "ops/sec",
            "extra": "23 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 143,
            "range": "±7.41%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.54,
            "range": "±134.01%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d4159a427c69088bc9e0494b32b997c9e4abc7e7",
          "message": "client: change event params to named tuples (#1457)\n\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-08T12:17:01+02:00",
          "tree_id": "df2dfb7da7c462e2e7574da790e4f1b4075a143c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/d4159a427c69088bc9e0494b32b997c9e4abc7e7"
        },
        "date": 1631096531092,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14836,
            "range": "±11.03%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16737,
            "range": "±1.58%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10140,
            "range": "±13.59%",
            "unit": "ops/sec",
            "extra": "50 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 10560,
            "range": "±23.00%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14381,
            "range": "±2.90%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1131,
            "range": "±7.15%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 110,
            "range": "±107.50%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 109,
            "range": "±26.30%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 24.53,
            "range": "±11.73%",
            "unit": "ops/sec",
            "extra": "25 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b373df57a5965c52ce1c786b81b83accf349e04a",
          "message": "VM: Add test to ensure that IDENTITY precompile copies the memory (chain split from 2021-08) (#1436)\n\n* vm: tests: add evm exploit test\r\n\r\n* vm: update geth chain split test comment\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-09T11:04:19+02:00",
          "tree_id": "4ef7ec7347970fd5b751e751abfd25fe9eee0773",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/b373df57a5965c52ce1c786b81b83accf349e04a"
        },
        "date": 1631178575066,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14128,
            "range": "±13.14%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15136,
            "range": "±2.10%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11276,
            "range": "±15.56%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7953,
            "range": "±27.36%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14005,
            "range": "±3.38%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1060,
            "range": "±8.26%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 120,
            "range": "±96.84%",
            "unit": "ops/sec",
            "extra": "41 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 99.88,
            "range": "±36.22%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.06,
            "range": "±118.76%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "6af296ba24498c6ee2ad3b36698249785ce5685f",
          "message": "add .vscode/settings.json with eslint config (#1465)",
          "timestamp": "2021-09-09T14:59:20-07:00",
          "tree_id": "5f39aba026602d864c8c4af6b3c7e588939f2dc2",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/6af296ba24498c6ee2ad3b36698249785ce5685f"
        },
        "date": 1631225028674,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 17156,
            "range": "±9.61%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 17532,
            "range": "±2.82%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 10079,
            "range": "±24.66%",
            "unit": "ops/sec",
            "extra": "47 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14910,
            "range": "±1.64%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15664,
            "range": "±2.71%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1276,
            "range": "±6.82%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 104,
            "range": "±108.86%",
            "unit": "ops/sec",
            "extra": "26 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 143,
            "range": "±6.62%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 9.18,
            "range": "±125.12%",
            "unit": "ops/sec",
            "extra": "15 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee1a44eb135e881e6bfa035d53357a496a59c30c",
          "message": "ci: fix hardhat e2e (#1467)\n\n* test adding @types/bn.js to resolutions\r\n\r\n* add method to break statemanager interface which should cause hardhat e2e build failure\r\n\r\n* Revert \"add method to break statemanager interface which should cause hardhat e2e build failure\"\r\n\r\nThis reverts commit b5b2960aaf623935316d15ff52c557540c79153d.\r\n\r\n* improve workaround notes",
          "timestamp": "2021-09-10T10:05:43+02:00",
          "tree_id": "11520a5cb17e0d1b6440eede54f088754c5e8b90",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ee1a44eb135e881e6bfa035d53357a496a59c30c"
        },
        "date": 1631261460405,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13566,
            "range": "±11.21%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14774,
            "range": "±2.25%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11325,
            "range": "±12.39%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8820,
            "range": "±20.96%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14605,
            "range": "±3.24%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1151,
            "range": "±6.42%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 118,
            "range": "±106.83%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 131,
            "range": "±6.88%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.05,
            "range": "±125.46%",
            "unit": "ops/sec",
            "extra": "24 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "69f5ec6c650a16e361168f196de5871a72c08c52",
          "message": "Util: More explicit EIP-1191 checksum usage discouraged note / Client: remove Rinkeby from CLI test matrix (#1463)\n\n* util: added more explicit note about providing a chainId to produce EIP-1191 compatible checksums with toChecksumAddress() being discouraged\r\n\r\n* client: removed Rinkeby from client CLI runs being to unreliable often leading to CI failures",
          "timestamp": "2021-09-10T11:26:53+02:00",
          "tree_id": "fc6d688e3f4d5e1c402a8bca7961d0174d0b2ccd",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/69f5ec6c650a16e361168f196de5871a72c08c52"
        },
        "date": 1631266355096,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10470,
            "range": "±14.10%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13218,
            "range": "±2.72%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11818,
            "range": "±3.69%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6595,
            "range": "±21.63%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12750,
            "range": "±4.14%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 995,
            "range": "±7.66%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 157,
            "range": "±52.88%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 88.02,
            "range": "±47.57%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 22.86,
            "range": "±10.05%",
            "unit": "ops/sec",
            "extra": "29 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "35fdced8e72a1c6b9b45c7397b4aea03ecfa686c",
          "message": "docs: add Windows installation note (#1470)",
          "timestamp": "2021-09-13T12:15:03-07:00",
          "tree_id": "8e9b924ee35904da0b0414e4024f9248d0f52fa8",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/35fdced8e72a1c6b9b45c7397b4aea03ecfa686c"
        },
        "date": 1631561106815,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 10630,
            "range": "±15.36%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12913,
            "range": "±2.87%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12160,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 5976,
            "range": "±22.10%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13229,
            "range": "±4.16%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 950,
            "range": "±7.91%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 133,
            "range": "±73.55%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 93.49,
            "range": "±24.96%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 21.32,
            "range": "±9.08%",
            "unit": "ops/sec",
            "extra": "32 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5d2f2b240ab8110ae0689beda5ddd1a86b1ae0a1",
          "message": "client -> FullSynchronizer: handle NEW_BLOCK message and rebroadcast to peers (#1458)\n\n* client: rebroadcast NEW_BLOCK message\r\n\r\n* add NewBlockHashes to knownblocks for each peer\r\n\r\n* lint\r\n\r\n* Requested changes\r\n\r\n* requested fixes\r\n\r\n* pass peer ID to new block handler\r\n\r\n* client: small review adjustments\r\n\r\n* client: fixed tests\r\n\r\n* Fix tests, move handleNewBlockHashes to fullsync\r\n\r\n* various fixes\r\n\r\n* fix error logging\r\n\r\n* lint\r\n\r\n* Fix no enqueueTask of undefined error on node startup\r\n\r\n* fix `NewBlockHashes` message bug\r\n\r\n* client: further align tx pool and new block handling code for easier portability/readability, new sendNewBlock method\r\n\r\n* client: simplify block hash tracking code for sending peer by using addToKnownByPeer() method\r\n\r\n* client: simplify NewBlock -> NewBlockHashes rebroadcasting logic by using addToKnowByPeer() function\r\n\r\n* client: update sync target height if block from NEW_BLOCK message is added to the chain to avoid sync inconsistencies\r\n\r\n* client -> FullSynchronizer: removed redundand (TypeScript) code doc type annotations\r\n\r\n* client -> FullSynchronizer: improved handleNewBlockHashes() bulk request logic readability\r\n\r\n* client -> FullSynchronizer: rather ignore NEW_BLOCK_HASHES method than side-starting a new fetcher in handleNewBlockHashes() when fetcher is not yet up and running\r\n\r\n* client -> FullSynchronizer: extract bulk task creation functionality as new enqueueByNumberList() function in BlockFetcherBase\r\n\r\n* client: improved FullSynchronizer NewBlock/NewBlockHashes test robustness and readability\r\n\r\n* client: added Fetcher.enqueueByNumberList() test cases to FullSynchronizer tests\r\n\r\n* client: added syncTargetHeight test case\r\n\r\n* client: added enqueueByNumberList() Fetcher tests\r\n\r\n* client -> FullSynchronizer: fixed addToKnownByPeer() not filtering existing hashes correctly, added missing putBlock() test case\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-14T15:22:13+02:00",
          "tree_id": "7cb14bdf3d922b538bd239db979ee21447b27efc",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/5d2f2b240ab8110ae0689beda5ddd1a86b1ae0a1"
        },
        "date": 1631626060670,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 14202,
            "range": "±10.46%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15345,
            "range": "±1.84%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 9795,
            "range": "±23.91%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 12770,
            "range": "±15.50%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15528,
            "range": "±3.05%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1308,
            "range": "±5.98%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 85.55,
            "range": "±143.21%",
            "unit": "ops/sec",
            "extra": "22 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 133,
            "range": "±15.20%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 8.49,
            "range": "±117.21%",
            "unit": "ops/sec",
            "extra": "16 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ee4481f7bd3ef2037cd6e56f3d3f1174bbb5e3b5",
          "message": "Monorepo: Update tape from v4 to v5 (#1447)\n\n* monorepo: update tape from v4 to v5\r\n\r\n* client: fixes for tape v5 upgrade\r\n\r\n* remove tape-catch (last publish 5 yrs ago) and use tape v5\r\n\r\n* small fixes\r\n\r\n* small fixes after merge from master\r\n\r\n* fix cli test\r\n\r\n* upgrade tape from v4 to v5 in rest of packages, update package-lock\r\n\r\n* fix block tests for tape v5\r\n\r\n* vm: fixed tests for tape v5\r\n\r\n* devp2p: fixed tests for tape v5\r\n\r\n* devp2p: lint fix\r\n\r\nCo-authored-by: Emerson Macro <emersonmacro@gmail.com>\r\nCo-authored-by: emersonmacro <77563348+emersonmacro@users.noreply.github.com>\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-09-15T09:58:05+02:00",
          "tree_id": "8003b59d3e7a26e4bc918e8fd83ba11d8b395a6a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/ee4481f7bd3ef2037cd6e56f3d3f1174bbb5e3b5"
        },
        "date": 1631693093905,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11170,
            "range": "±12.55%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12558,
            "range": "±3.29%",
            "unit": "ops/sec",
            "extra": "73 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11124,
            "range": "±4.07%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 5146,
            "range": "±24.64%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 12647,
            "range": "±4.64%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1019,
            "range": "±8.10%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 133,
            "range": "±75.62%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 98.4,
            "range": "±37.53%",
            "unit": "ops/sec",
            "extra": "54 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 12.33,
            "range": "±104.89%",
            "unit": "ops/sec",
            "extra": "24 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "17355484+acolytec3@users.noreply.github.com",
            "name": "acolytec3",
            "username": "acolytec3"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "395aed6d074e140edb743082a5d70338a453fd04",
          "message": "client: Bug fix in logic for adding known blocks to peers (#1479)\n\n* client: Fix for adding known blocks to peers",
          "timestamp": "2021-09-16T19:38:49-07:00",
          "tree_id": "38d070edd05e3f792038bc192d8e12620b754e4b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/395aed6d074e140edb743082a5d70338a453fd04"
        },
        "date": 1631846875780,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13149,
            "range": "±10.27%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14818,
            "range": "±1.89%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12264,
            "range": "±11.52%",
            "unit": "ops/sec",
            "extra": "64 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 8239,
            "range": "±20.40%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14420,
            "range": "±3.14%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1177,
            "range": "±6.41%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 122,
            "range": "±107.12%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 126,
            "range": "±8.44%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 10.88,
            "range": "±121.79%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "Holger.Drewes@gmail.com",
            "name": "Holger Drewes",
            "username": "holgerd77"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90fea3df7a07dd1b1af248a19e76ad56a5432b94",
          "message": "Common: allow setting and retrieving HF by total difficulty (#1473)\n\n* common: extended getHardforkByBlockNumber(), setHardforkByBlockNumber() to also take an optional TD as an input, added merge/POS specific custom chain test files, added tests\r\n\r\n* common: added hardforkTD() function, added additional tests for Merge-following HF block number set, pur POS chain tests\r\n\r\n* block: added hardforkByTD option, added tests\r\n\r\n* blockchain: integrate TD HF switching into blockchain (WIP), added tests\r\n\r\n* blockchain -> DBManager: use parent TD for getHeader() and getBlock() Header/Block instantiation hardforkByTD option\r\n\r\n* vm: added hardforkByTD option, added tests\r\n\r\nCo-authored-by: Ryan Ghods <ryan@ryanio.com>",
          "timestamp": "2021-09-17T08:00:37+02:00",
          "tree_id": "b9800d396706f1df4a848447dfc1a41b0459884c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/90fea3df7a07dd1b1af248a19e76ad56a5432b94"
        },
        "date": 1631858737768,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16520,
            "range": "±10.15%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 16889,
            "range": "±2.37%",
            "unit": "ops/sec",
            "extra": "78 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 9689,
            "range": "±18.72%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 14503,
            "range": "±2.57%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 15612,
            "range": "±2.51%",
            "unit": "ops/sec",
            "extra": "39 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1256,
            "range": "±7.66%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 106,
            "range": "±105.70%",
            "unit": "ops/sec",
            "extra": "28 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 144,
            "range": "±7.48%",
            "unit": "ops/sec",
            "extra": "57 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 15.4,
            "range": "±120.54%",
            "unit": "ops/sec",
            "extra": "14 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jochembrouwer96@gmail.com",
            "name": "Jochem Brouwer",
            "username": "jochem-brouwer"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "948c9b4949472893681dadfd1a4bd735206ee65a",
          "message": "VM: Update ethereum/tests to 10.0 (#1476)\n\n* ethereum-tests: update to 10.0\r\n\r\n* ethereum/tests: update berlin state test count",
          "timestamp": "2021-09-20T10:38:07+02:00",
          "tree_id": "33f9c19425ae207344e297d40bf0c4de0f6e484b",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/948c9b4949472893681dadfd1a4bd735206ee65a"
        },
        "date": 1632127404549,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13111,
            "range": "±10.06%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 15142,
            "range": "±1.88%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 13244,
            "range": "±2.64%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6680,
            "range": "±20.17%",
            "unit": "ops/sec",
            "extra": "44 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14547,
            "range": "±3.46%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1161,
            "range": "±6.46%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 126,
            "range": "±99.21%",
            "unit": "ops/sec",
            "extra": "33 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 120,
            "range": "±10.86%",
            "unit": "ops/sec",
            "extra": "56 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 17.29,
            "range": "±77.14%",
            "unit": "ops/sec",
            "extra": "19 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "14197de09ce83801237cd5b78fd36a51b1911ac7",
          "message": "util: return undefined or null from toType (#1477)\n\n* toType: return null or undefined\r\n\r\n* turn off no-redeclare for better @typescript-eslint/no-redeclare that allows for function overloads\r\n\r\n* run prettier on config/eslint.js\r\n\r\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-20T10:58:50+02:00",
          "tree_id": "0202b42700a3984c39f51cb03442b133db43e818",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/14197de09ce83801237cd5b78fd36a51b1911ac7"
        },
        "date": 1632128638654,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 13750,
            "range": "±12.08%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14889,
            "range": "±1.97%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 11588,
            "range": "±15.87%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 9160,
            "range": "±24.10%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 14191,
            "range": "±3.19%",
            "unit": "ops/sec",
            "extra": "67 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1201,
            "range": "±6.18%",
            "unit": "ops/sec",
            "extra": "63 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 121,
            "range": "±106.35%",
            "unit": "ops/sec",
            "extra": "31 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 140,
            "range": "±6.69%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 26.77,
            "range": "±12.81%",
            "unit": "ops/sec",
            "extra": "22 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "contact@rockwaterweb.com",
            "name": "Gabriel Rocheleau",
            "username": "gabrocheleau"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8ddc6c09cd0bbd71b1cf03d4dc65d2d660ab5c76",
          "message": "common: improve TS types for hardfork, chain and genesis parameters (#1480)\n\n* common: improve types\r\n\r\n* common: fix tests\r\n\r\n* blockchain: fix test\r\n\r\n* client: fix genesisParams\r\n\r\n* client: fix typo\r\n\r\n* common: fix linting\r\n\r\n* block: unclOpts type\r\n\r\n* block: fix test\r\n\r\n* vm: fix test\r\n\r\n* common: fix test\r\n\r\n* vm: fix types in test\r\n\r\n* client: fix stateManager toBuffer conversion\r\n\r\n* vm: fix type\r\n\r\n* monorepo: add tsc script where missing and exclude node_modules from tsc\r\n\r\n* common: re-add string in addition to ConsesnsusType and ConsensusAlgorithm\r\n\r\n* fix: types\r\n\r\n* common: fix linting\r\n\r\n* common: fix linting again\r\n\r\n* common: address review\r\n\r\n* common: fix linting typo\r\n\r\n* client: readded removed default bootstrap nodes\r\n\r\nCo-authored-by: holgerd77 <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-20T13:01:37+02:00",
          "tree_id": "8509b01fd8f22256f2b66d0068fc0de48c26336f",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/8ddc6c09cd0bbd71b1cf03d4dc65d2d660ab5c76"
        },
        "date": 1632136011839,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 12254,
            "range": "±11.46%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 14784,
            "range": "±2.58%",
            "unit": "ops/sec",
            "extra": "71 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12475,
            "range": "±11.73%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 7654,
            "range": "±28.56%",
            "unit": "ops/sec",
            "extra": "55 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13339,
            "range": "±3.46%",
            "unit": "ops/sec",
            "extra": "66 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1171,
            "range": "±6.42%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 121,
            "range": "±107.09%",
            "unit": "ops/sec",
            "extra": "30 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 120,
            "range": "±11.33%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.38,
            "range": "±130.10%",
            "unit": "ops/sec",
            "extra": "18 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7dd2f374d0dc9b52c3590676d1b985ec1e1585c9",
          "message": "client: add simple miner (#1444)",
          "timestamp": "2021-09-20T13:13:01-07:00",
          "tree_id": "d0116b7aaf38aaae2e21945e3778e226a42502fb",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/7dd2f374d0dc9b52c3590676d1b985ec1e1585c9"
        },
        "date": 1632169077865,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 16518,
            "range": "±11.55%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 18477,
            "range": "±2.59%",
            "unit": "ops/sec",
            "extra": "74 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 9638,
            "range": "±24.29%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 16307,
            "range": "±3.00%",
            "unit": "ops/sec",
            "extra": "69 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 17132,
            "range": "±2.82%",
            "unit": "ops/sec",
            "extra": "70 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1245,
            "range": "±7.05%",
            "unit": "ops/sec",
            "extra": "61 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 97.52,
            "range": "±124.95%",
            "unit": "ops/sec",
            "extra": "26 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 137,
            "range": "±7.03%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 7.78,
            "range": "±112.10%",
            "unit": "ops/sec",
            "extra": "17 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e289a7825dd8d701204ecccfc90ad40111d58faf",
          "message": "monorepo: dedupe prepublish script (#1481)\n\n* add config prepublish script\r\n\r\n* remove greenkeeper.json (greenkeeper no longer being run since 2020-06-03)",
          "timestamp": "2021-09-21T09:31:30+02:00",
          "tree_id": "005a82716a498017d54fcd7e22cf803e3db3971c",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/e289a7825dd8d701204ecccfc90ad40111d58faf"
        },
        "date": 1632209833270,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11475,
            "range": "±13.27%",
            "unit": "ops/sec",
            "extra": "65 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 12695,
            "range": "±3.31%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12018,
            "range": "±3.77%",
            "unit": "ops/sec",
            "extra": "76 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6559,
            "range": "±27.32%",
            "unit": "ops/sec",
            "extra": "43 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13411,
            "range": "±4.11%",
            "unit": "ops/sec",
            "extra": "72 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1068,
            "range": "±7.37%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 136,
            "range": "±81.47%",
            "unit": "ops/sec",
            "extra": "45 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 103,
            "range": "±31.83%",
            "unit": "ops/sec",
            "extra": "58 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 11.07,
            "range": "±111.02%",
            "unit": "ops/sec",
            "extra": "27 samples"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ryan@ryanio.com",
            "name": "Ryan Ghods",
            "username": "ryanio"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f455b4be76dc4b75fc1261f1773ee9548a5c16c2",
          "message": "client: add miner integration test (#1483)\n\nCo-authored-by: Holger Drewes <Holger.Drewes@gmail.com>",
          "timestamp": "2021-09-21T09:54:57+02:00",
          "tree_id": "b3ac302d1d10d393514f717eb1d0954e7e7a6e8a",
          "url": "https://github.com/ethereumjs/ethereumjs-monorepo/commit/f455b4be76dc4b75fc1261f1773ee9548a5c16c2"
        },
        "date": 1632211216843,
        "tool": "benchmarkjs",
        "benches": [
          {
            "name": "1k-3-32-ran",
            "value": 11792,
            "range": "±11.52%",
            "unit": "ops/sec",
            "extra": "62 samples"
          },
          {
            "name": "1k-5-32-ran",
            "value": 13669,
            "range": "±2.69%",
            "unit": "ops/sec",
            "extra": "77 samples"
          },
          {
            "name": "1k-9-32-ran",
            "value": 12904,
            "range": "±2.95%",
            "unit": "ops/sec",
            "extra": "75 samples"
          },
          {
            "name": "1k-1k-32-ran",
            "value": 6700,
            "range": "±22.82%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "1k-1k-32-mir",
            "value": 13280,
            "range": "±3.74%",
            "unit": "ops/sec",
            "extra": "68 samples"
          },
          {
            "name": "Checkpointing: 100 iterations",
            "value": 1104,
            "range": "±7.33%",
            "unit": "ops/sec",
            "extra": "60 samples"
          },
          {
            "name": "Checkpointing: 500 iterations",
            "value": 129,
            "range": "±87.84%",
            "unit": "ops/sec",
            "extra": "42 samples"
          },
          {
            "name": "Checkpointing: 1000 iterations",
            "value": 105,
            "range": "±31.50%",
            "unit": "ops/sec",
            "extra": "59 samples"
          },
          {
            "name": "Checkpointing: 5000 iterations",
            "value": 25.74,
            "range": "±11.92%",
            "unit": "ops/sec",
            "extra": "26 samples"
          }
        ]
      }
    ]
  }
}
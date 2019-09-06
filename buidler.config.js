usePlugin('@nomiclabs/buidler-truffle5')

require('./scripts/moloch-tasks')
require('./scripts/pool-tasks')

const INFURA_API_KEY = ''
const MAINNET_PRIVATE_KEY = ''
const ROPSTEN_PRIVATE_KEY = ''

module.exports = {
  networks: {
    develop: {
      deployedContracts: {
        moloch: '',
        pool: ''
      }
    },
    ropsten: {
      url: `https://ropsten.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ ROPSTEN_PRIVATE_KEY ],
      deployedContracts: {
        moloch: '0xa9566CA3Fb25a45dafc978D9FFc3bc6a148EA7E6',
        pool: '0x35ac1b6df3cEC340476bd59BeEA30d80e8388bDb'
      }
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${INFURA_API_KEY}`,
      accounts: [ MAINNET_PRIVATE_KEY ],
      deployedContracts: {
        moloch: '0xcc7dcdb700eed457c8180406d7d699877f4eee24',
        pool: ''
      }
    },
    coverage: {
      url: 'http://localhost:8555'
    }
  },
  solc: {
    version: '0.5.3',
    evmVersion: 'byzantium'
  }
}

// Import
const { ApiPromise, WsProvider } = require('@polkadot/api')
const { HttpProvider } = require('@polkadot/rpc-provider')

const getApi = async (url) => {
  const wsProvider = new WsProvider(url)
  const api = await ApiPromise.create({ provider: wsProvider })
  return api
}

const getChainBlockHeight = async (api) => {
  const lastHeader = await api.rpc.chain.getHeader()
  return lastHeader.number
}

module.exports = { getApi, getChainBlockHeight }

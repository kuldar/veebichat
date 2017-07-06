import { ApolloClient, createNetworkInterface } from 'react-apollo'
import fetch from 'isomorphic-fetch'

let apolloClient = null

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) { global.fetch = fetch }

const create = (initialState) => {
  return new ApolloClient({
    initialState,
    ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    networkInterface: createNetworkInterface({
      uri: 'https://api.graph.cool/simple/v1/veebichat',
      opts: { credentials: 'same-origin' }
    })
  })
}

const initApollo = (initialState) => {

  // Make sure to create a new client for every server-side request
  if (!process.browser) { return create(initialState) }

  // Reuse client on the client-side
  if (!apolloClient) { apolloClient = create(initialState) }

  return apolloClient
}


export default initApollo
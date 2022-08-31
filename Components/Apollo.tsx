import {ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';

const LOCAL_SYSTEM_IP_ADDRESS = '192.168.137.165';

const PORT = '4000';

const URI = `http://${LOCAL_SYSTEM_IP_ADDRESS}:${PORT}/graphql`;

export const client = new ApolloClient({
  uri: URI,
  cache: new InMemoryCache(),
});

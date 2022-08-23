import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.hygraph.com/v2/cl4x4wpy204v001up3wm145lk/master',
  cache: new InMemoryCache()
})
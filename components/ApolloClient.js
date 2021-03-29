import fetch from 'node-fetch';
import clientConfig from './../client-config';
import { ApolloClient, InMemoryCache } from '@apollo/client';
//https://www.freecodecamp.org/news/how-to-fetch-graphql-data-in-next-js-with-apollo-graphql/


const client = new ApolloClient( {
    
    uri:clientConfig.graphqlUrl,  
    cache: new InMemoryCache()
} );

export default client;
import fetch from 'node-fetch';
import clientConfig from './../client-config';
import { ApolloClient, InMemoryCache } from '@apollo/client';



const client = new ApolloClient( {
    
    uri:clientConfig.graphqlUrl,  
    cache: new InMemoryCache()
} );

export default client;
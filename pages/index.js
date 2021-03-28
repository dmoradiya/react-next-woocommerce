import Layout from "../components/Layout";
import Product from "../components/Products";
import client from "./../components/ApolloClient";
//import gql from "graphql-tag";
import { gql } from '@apollo/client';

const PRODUCT_QUERY = gql`query {
    products(first: 100) {
        nodes {
          id
          slug
          description
          name
          databaseId
          image {
            uri
            title
            srcSet
            sourceUrl
          } 
          ... on SimpleProduct {
            price
            metaData {
                key
                value
              }
            }
            ... on ExternalProduct {
                price
                    metaData {
                    key
                    value
                    }
                }
        }
      }
}`;

const Index = ( props) => {
    // check object in console
    console.warn(props);

    const { products } = props;

    return (
        <Layout>
            { products.length ? (
                products.map( product => <Product  product={ product } key={ product.id } /> )
            ) : '' }
        </Layout>

    );
}
// getIntialProps runs server side and client side
Index.getInitialProps = async () => {
    const result = await client.query( { query: PRODUCT_QUERY } );

    return {
        products: result.data.products.nodes
    }
};
export default Index;
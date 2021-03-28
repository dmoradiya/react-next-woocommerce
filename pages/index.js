import Layout from "../components/Layout";
import Product from "../components/Products";
import client from "./../components/ApolloClient";
import gql from "graphql-tag";

const PRODUCT_QUERY = gql`query {
    products(first: 20) {
        nodes {
          id
          slug
          description
          image {
            uri
            title
            srcSet
            sourceUrl
          }
          name
         
        }
      }
}`;

const Index = ( props) => {
    // check object in console
    console.warn(props);

    const { products } = props;

    return (
        <Layout>
            {/* { products.length ? (
                products.map( product => <Product  product={ product } key={ product.id } /> )
            ) : '' } */}
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
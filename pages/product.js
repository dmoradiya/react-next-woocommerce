import Layout from "../components/Layout";
import { withRouter } from 'next/router';
import client from "./../components/ApolloClient";
import { gql } from '@apollo/client';

const PRODUCT_QUERY = gql`query Product($databaseId: ID!) {
    product( id: $databaseId, idType: DATABASE_ID ) {        
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
}`;

const Product = withRouter( props => {
    // check object in console
    console.warn(props);

    const { product } = props;

    return (
        <Layout>
            { product ? (
               <div className="card mb-3" >
               <h3 className="card-header">{ product.name }</h3>
               <a>
                    <img width="400" height="400"
                    src={ product.image.sourceUrl }
                    alt="Product image"/>
                </a>
               <div className="card-body">
                   <h5 className="card-subtitle text-muted">{ product.price }</h5>
               </div>    
           </div>
                
            ) : '' }
        </Layout>

    );
});
// getIntialProps runs server side and client side
Product.getInitialProps = async ( context ) => {
    //console.warn(context);
    let { query: { slug } } = context;
    const id = slug ? parseInt( slug.split( '-' ).pop() ) : context.query.id;
    
    const result = await client.query({ query: PRODUCT_QUERY, variables: { databaseId: id } } );

    return {
        product: result.data.product
    }
};
export default Product;
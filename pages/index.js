import Layout from "../components/Layout";
import clientConfig from '../client-config';
import fetch from 'isomorphic-unfetch';
import Product from "../components/Products";
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
const res = await fetch(`${clientConfig.siteUrl}/products`);
const productData = await res.json();

return {
    products: productData
}
};
export default Index;
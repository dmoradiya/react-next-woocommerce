import Layout from "../components/Layout";
import clientConfig from '../client-config';
import fetch from 'isomorphic-unfetch';
const Index = ( props) => {
    console.warn(props);
    return (
        <Layout>
            <div>Hi dharmesh</div>
        </Layout>

    );
}
Index.getInitialProps = async () => {
const res = await fetch(`${clientConfig.siteUrl}/products`);
const productData = await res.json();

return {
    products: productData
}
};
export default Index;
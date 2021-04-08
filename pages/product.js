import Layout from "../components/Layout";
import { withRouter } from 'next/router';
import clientConfig from '../client-config';
import fetch from 'isomorphic-unfetch';
import AddToCartButton from "../components/cart/AddToCartButton";


const Product = withRouter( props => {
    // check object in console
    console.warn(props);

    const { product } = props;
    
    return (
        <Layout>
            { product ? (
				<div className="woo-next-single">
					<div className="woo-next-single__product card bg-light mb-3 p-5">
						<div className="card-header">{ product.name }</div>
						<div className="card-body">							
							<img width="400" height="400" src={ product.images[0].src } alt={ product.images[0].alt }  />
							<div className="card-text">{ product.description }</div>
						</div>
                        <div className="card-body">
                            <h5 className="card-subtitle text-muted">Price : { product.price }</h5>
                            <AddToCartButton product={product} />
                        </div>
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
    //console.log(id);    

    const res = await fetch(`${clientConfig.siteUrl}/products`);
    const productData = await res.json();
    //console.warn(productData);
    const filteredProductData = productData.filter(product => product.id === id)[0];
    console.warn(filteredProductData);
    return {
        product : filteredProductData
    }
};
export default Product;
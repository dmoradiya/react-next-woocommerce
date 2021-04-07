import Link from 'next/link';

const Product = ( props ) => {

    const { product } = props;
    
    console.log(props);
    return (
        <div className="card mb-3" >
            <h3 className="card-header">{ product.name }</h3>
            <Link as={ `/product/${ product.slug }` } href={`/product?slug=${ product.slug }-${ product.id }`}>
                <a>
                    <img width="400" height="400"
                    src={ product.images[0].src }
                    alt="Product image"/>
                </a>
            </Link>                 
            <div className="card-body">
                <h5 className="card-subtitle text-muted">{ product.price }</h5>
            </div> 

        </div>
    );
}
export default Product;
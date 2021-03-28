
const Product = ( props ) => {

    const { product } = props;
    return (
        <div className="card mb-3" >
            <h3 className="card-header">{ product.name }</h3>
            <img width="400" height="400"
                src={ product.image.sourceUrl }
                alt="Product image"/>
            <div className="card-body">
                <h5 className="card-subtitle text-muted">{ product.price }</h5>
            </div> 

        </div>
    );
}
export default Product;
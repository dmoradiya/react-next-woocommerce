export const getFloatVal = ( string ) => {

    let floatValue = string.match( /[+-]?\d+(\.\d+)?/g )[0];
    
    return ( null !== floatValue ) ? parseFloat( parseFloat( floatValue ).toFixed( 2 ) ) : '';
    

};

export const addFirstProduct = ( product ) => {
    let productPrice = getFloatVal( product.price );

    // if no item in the cart, create an empty array and push the item.
    let newCart = {
        products : [],
        totalProductsCount : 1,
        totalProductsPrice : productPrice
    }

    const newProduct =createNewProduct( product, productPrice, 1 );
    newCart.products.push( newProduct );
    // Store into local storage
    localStorage.setItem( 'woo-next-cart', JSON.stringify( newCart ) );
    return newCart;
};

export const createNewProduct = ( product, productPrice, qty ) => {
    return {

        productId: product.id,
        image: product.image[0].src,
        name: product.name,
        price: product.price,
        qty: qty,
        totalPrice: parseFloat( ( productPrice * qty ).toFixed( 2 ) )

    }
}
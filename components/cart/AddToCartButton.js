import Link from 'next/link';
import { useState, useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { addFirstProduct } from '../../function';

const AddToCartButton = ( props ) => {

    const { product } = props;
    const [ cart, setCart ] = useContext( AppContext )

    const handleAddToCartClick = () => {

        if (process.browser) {
            
            let existingCart = localStorage.getItem( 'woo-next-cart' );

            // if cart has item(s) already, then update the existing item(s)
            if ( existingCart ) {
                
            } else  {
                
                // Add first new item
                const newCart = addFirstProduct( product );
                setCart( newCart );
            }

        }

    };

    return( 
        <div>
            <button onClick={ handleAddToCartClick } className="btn btn-secondary">Add to cart</button>
        </div>
     );

};
export default AddToCartButton;
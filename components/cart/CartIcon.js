import { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import Link from 'next/link';

const CartIcon = () => {
    const [ cart, setCart ] = useContext( AppContext );
    const productsCount = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsCount : '';
    const totalPrice = ( null !== cart && Object.keys( cart ).length ) ? cart.totalProductsPrice : '';

    return (
        <div>
            <Link href="/cart">
                <a>
                    <div className="woo-next-cart-wrap">
                        { totalPrice ? <span>${ totalPrice.toFixed( 2 ) }</span> : '' }
                        <span className="woo-next-cart-icon-container">
                            <i className="fa fa-shopping-cart woo-next-cart-icon"/>
                            { productsCount ? <span className="woo-next-cart-count">{ productsCount }</span> : '' }
                        </span>
                    </div>
                </a>
            </Link>
        </div>
    )
};
export default CartIcon;
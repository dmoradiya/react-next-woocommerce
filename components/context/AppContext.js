import React, {useState, useEffect } from 'react';

export const AppContext = React.createContext( [
    {}, 
    () => {}
]);

export const AppProvider = ( props ) => {

    const [ cart, setCart ] = useState( null );
    useEffect( ()=>{

        // Check if we are only on browser side
        if( process.browser ) {
            // get data from the local storage key : woo-next-cart
            let cartData = localStorage.getItem( 'woo-next-cart' );
            // if cartData is not equal to null then parse the cartData
            cartData = null !== cartData ? JSON.parse( cartData ) : '';
            setCart( cartData );
        }

    }, [] );

    return ( 
        <AppContext.Provider value={ [cart, setCart] } >
            { props.children }
        </AppContext.Provider> 
    );
};
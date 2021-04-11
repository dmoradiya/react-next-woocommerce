import Link from 'next/link';
import { useContext, useState } from 'react';
import { AppContext } from "../../context/AppContext";
//import CartItem from "./CartItem";


const CartItemsContainer = () => {


	// @TODO wil use it in future variations of the project.
	const [ cart, setCart ] = useContext( AppContext );
	

	
	console.log(cart);

	return (
		<div className="cart product-cart-container container mx-auto my-32 px-4 xl:px-0">
			{ cart ? (
				<div className="woo-next-cart-wrapper container">
					<div className="cart-header grid grid-cols-2 gap-4">
						<h1 className="text-2xl mb-5 uppercase">Cart</h1>
						{/*Clear entire cart*/}
						<div className="clear-cart text-right">
							<button className="px-4 py-1 bg-gray-500 text-white rounded-sm w-auto" >
								<span className="woo-next-cart">Clear Cart</span>
								<i className="fa fa-arrow-alt-right"/>
							</button>						
						</div>
					</div>
					<div className="grid grid-cols-1 xl:grid-cols-4 gap-0 xl:gap-4 mb-5">
						<table className="cart-products table-auto col-span-3 mb-5">
								<thead className="text-left">
								<tr className="woo-next-cart-head-container">
									<th className="woo-next-cart-heading-el" scope="col"/>
									<th className="woo-next-cart-heading-el" scope="col"/>
									<th className="woo-next-cart-heading-el" scope="col">Product</th>
									<th className="woo-next-cart-heading-el" scope="col">Price</th>
									<th className="woo-next-cart-heading-el" scope="col">Quantity</th>
									<th className="woo-next-cart-heading-el" scope="col">Total</th>
								</tr>
								</thead>
								<tbody>
								{ cart.products.length && (
									cart.products.map( item => (
										
										<tr>{item.name}</tr>
																					
									) )
								) }
								</tbody>
							</table>

						{/*Cart Total*/ }
						<div className="row woo-next-cart-total-container border p-5 bg-gray-200">
							<div className="">
								{/* <h2 className="text-2xl">Cart Total</h2> */}
								<table className="table table-hover mb-5">
									<tbody>
									<tr className="table-light flex flex-col">
										<td className="woo-next-cart-element-total text-2xl font-normal">Subtotal</td>
										<td className="woo-next-cart-element-amt text-2xl font-bold">{ ( 'string' !== typeof cart.totalProductsPrice ) ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice }</td>
									</tr>
									{/* <tr className="table-light">
										<td className="woo-next-cart-element-total">Total</td>
										<td className="woo-next-cart-element-amt">{ ( 'string' !== typeof cart.totalProductsPrice ) ? cart.totalProductsPrice.toFixed(2) : cart.totalProductsPrice }</td>
									</tr> */}
									</tbody>
								</table>
								<Link href="/checkout">
									<button className="bg-purple-600 text-white px-5 py-3 rounded-sm w-auto xl:w-full">
										<span className="woo-next-cart-checkout-txt">Proceed to Checkout</span>
										<i className="fas fa-long-arrow-alt-right"/>
									</button>
								</Link>
							</div>
						</div>
					</div>

					
				</div>
			) : (
				<div className="container mx-auto my-32 px-4 xl:px-0">
					<h2 className="text-2xl mb-5">No items in the cart</h2>
					<Link href="/">
						<button className="bg-purple-600 text-white px-5 py-3 rounded-sm">
							<span className="woo-next-cart-checkout-txt">Add New Products</span>
							<i className="fas fa-long-arrow-alt-right"/>
						</button>
					</Link>
				</div>
			) }
		</div>

	);
};

export default CartItemsContainer;
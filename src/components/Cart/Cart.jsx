import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faRemove } from '@fortawesome/free-solid-svg-icons'

const Cart = (props) => {

    

    const {cart} = props

    console.log(cart);

    let totalPrice = 0;
    let totalShipping = 0

    for(const product of cart){
        totalPrice = totalPrice + product.price
        totalShipping = totalShipping + product.shipping
    }


    let totalTax = totalPrice * 10 / 100

    const grandTotal = totalPrice + totalShipping + totalTax



    return (
        <>
           <h1 className='text-2xl font-semibold text-center mt-20'>Order Summary</h1>
            <hr className='mb-5'/>
            <div className='flex flex-col space-y-3'>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price: ${totalPrice}</p>  
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${totalTax.toFixed(2)}</p>
            <h2 className='text-2xl font-semibold'>Grand Total: ${grandTotal.toFixed(2)}</h2>
            </div>
<div className='flex flex-col justify-center space-y-4 mt-10 text-white'>
<button className='px-5 py-3 bg-[#FF3030] rounded font-semibold'>Clear Cart<FontAwesomeIcon icon={faRemove} /></button>
            <button className='px-5 py-3 bg-[#FF9900] rounded font-semibold'>Review Order</button>
</div>
        </>
    );
};

export default Cart;
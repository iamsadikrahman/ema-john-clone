import { useEffect, useState } from 'react';

import Product from '../Product/Product';




const Shop = () => {
    const [products, setProducts] = useState([])


useEffect(()=> {
    const fetchProducts = async ()=> {

        try {
            const res = await fetch(`https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json`)
            const data = await res.json()
            setProducts(data);
            
        } catch (error) {
            console.log(error);
        }
    }

    fetchProducts()


}, [])


const [cart, setCart] = useState([])

const handleAddToCart = (product) => {

    const newCart = [...cart, product]

    setCart(newCart)

    console.log(product);
    
}



    return (
        <>
        <div className='grid grid-cols-4'>
        <div className='col-span-3 grid grid-cols-3 gap-10 mx-auto my-20'>
            {products.map((product)=> <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)}
        </div>
        <div className='bg-orange-100 px-5'>
            <h1 className='text-2xl font-semibold text-center mt-20'>Order Summary</h1>
            <hr className='mb-5'/>
            <h1>Selected Items: {cart.length}</h1>
        </div>
        </div>
        </>
    );
};

export default Shop;
import { useEffect, useState } from 'react';

import Product from '../Product/Product';
import Cart from "../Cart/Cart"




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
        <div className='grid grid-cols-5'>
        <div className='col-span-4 grid grid-cols-3 gap-10 mx-auto my-20'>
            {products.map((product)=> <Product key={product.id} product={product} handleAddToCart={handleAddToCart}></Product>)}
        </div>
        {/* Want to sticky cart  */}
        <div className='bg-orange-200 px-5'>
           <Cart cart={cart}/>
        </div>
        </div>
        </>
    );
};

export default Shop;
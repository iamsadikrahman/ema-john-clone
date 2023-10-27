import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'




const Product = (props) => {
    const {img, name, price, ratings, seller} = props.product

   const handleAddToCart = props.handleAddToCart



    return (
        <div>
            <img className='w-[286px]' src={img} alt="" />
            <h1>{name}</h1>
            <h2>${price}</h2>
            <h3>Manufacturer: {seller}</h3>
            <h3>Ratings: {ratings} Star</h3>
            <button onClick={()=> handleAddToCart(props.product)}  className='px-5 py-3 bg-green-500 rounded font-semibold'>Add To Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;
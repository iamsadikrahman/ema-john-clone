import logo from '../../assets/images/Logo.svg'

const Header = () => {
    return (
        <div className='bg-[#1C2B35] flex justify-around py-4 items-center'>
            <img src={logo} alt="" />
            <ul className='flex text-white space-x-10'>
                <li><a href="/shop">Shop</a></li>
                <li><a href="/order">Order</a></li>
                <li><a href="/inventory">Manage Inventory</a></li>
                <li><a href="/login">Login</a></li>
            </ul>
        </div>
    );
};

export default Header;
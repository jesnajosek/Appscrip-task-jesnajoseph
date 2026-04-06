import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-brand' >Ecom</Link>
                <div className='navbar-links'>
                    <Link to='/home' className='navbar-link'>Home</Link>
                    <Link to='/products' className='navbar-link'>Products</Link>
                    <Link to='/cart' className='navbar-link'>Cart</Link>
                    <Link to='/checkout' className='navbar-link'>Checkout</Link>
                </div>
                <div className='navbar-auth'>
                    <div className='navbar-auth-links'>
                        <Link to='/auth' className='btn btn-secondary'>Login</Link>
                        <Link to='/auth' className='btn btn-primary'>Register</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar

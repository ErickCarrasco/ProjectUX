import React from 'react';
import { NavLink } from 'react-router-dom';

const SignedInLinks = () =>{
    return (
        <div>
            <ul className="right">
                <li><NavLink to='/dummy'>New Product</NavLink></li>
                <li><NavLink to='/'>Log out</NavLink></li>
            </ul>
        </div>
    )
}

export default SignedInLinks
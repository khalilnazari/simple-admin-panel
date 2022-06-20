import React from 'react';
import './navbar.scss'
import {AiOutlineMenu} from 'react-icons/ai'
import {CgProfile} from 'react-icons/cg'
const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <div className="left-side">
                    <AiOutlineMenu className='icon'/>
                    <p>React Admin</p>
                </div>
                <div className="right-side">
                    <a href="/"><CgProfile className='icon'/></a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
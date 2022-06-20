import React, { useEffect, useState } from 'react';
import './sidebar.scss'; 
import {BsGraphUp} from 'react-icons/bs'
import {AiOutlineDashboard, AiOutlineLink} from 'react-icons/ai' 
import {BiUser} from 'react-icons/bi'


const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false); 
    useEffect( () => {
        setShowSidebar(false)
    }, [])


    return (
        <div className={showSidebar === true ? "sidebar show__sidebar" : "sidebar"}>
            <div className='sidebar__section'>
                <p className="sidebar__title">Home</p>
                <ul className='slidebar__container'>
                    <li className='sidebar__item'><AiOutlineDashboard /><a href="/home" className='sidebar__link'>Dashboard</a></li>
                    <li className='sidebar__item'><BsGraphUp /><a href="/home" className='sidebar__link'>Analytics</a></li>
                    <li className='sidebar__item'><BsGraphUp /><a href="/home" className='sidebar__link'>Sales</a></li>
                </ul>
            </div>

            <div className='sidebar__section'>
                <p className="sidebar__title">Menu</p>
                <ul className='slidebar__container'>
                    <li className='sidebar__item'><BiUser /><a href="/home" className='sidebar__link'>Users</a></li>
                    <li className='sidebar__item'><AiOutlineLink /><a href="/home" className='sidebar__link'>Products</a></li>
                    <li className='sidebar__item'><AiOutlineLink /><a href="/home" className='sidebar__link'>Transactions</a></li>
                    <li className='sidebar__item'><AiOutlineLink /><a href="/home" className='sidebar__link'>Reports</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;
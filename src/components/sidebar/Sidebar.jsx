import './sidebar.scss'; 
import {BsGraphUp} from 'react-icons/bs'
import {AiOutlineDashboard, AiOutlineLink} from 'react-icons/ai' 
import {BiUser} from 'react-icons/bi'
import { Link } from 'react-router-dom';


const Sidebar = ({hideSidebar}) => {
    return (
        <aside className={hideSidebar? "sidebar hideSidebar" : "sidebar"}>
            <div className='sidebarHeader'>
                <button>Toggle Hidebar</button>
            </div>

            <div className='sidebarItemsWrapper'>
                <div className='sidebarSection'>
                    <p className="sidebarTitle">Section 1</p>
                    <div className="sidebarItem">
                        <Link to="/dashboard" className='sidebarLink'>Dashboard</Link>
                        <Link to="/users" className='sidebarLink'>Users</Link>
                        <Link to="/" className='sidebarLink'>Link Item</Link>
                        <Link to="/" className='sidebarLink'>Link Item</Link>
                        <Link to="/" className='sidebarLink'>Link Item</Link>
                    </div>
                </div>

                <div className='sidebarSection'>
                    <p className="sidebarTitle">Section 2</p>
                    <div className="sidebarItem">
                        <Link to="/" className='sidebarLink'>Link Item</Link>
                        <Link to="/" className='sidebarLink'>Link Item</Link>
                        <Link to="/" className='sidebarLink'>Link Item</Link>
                        <Link to="/" className='sidebarLink'>Link Item</Link>
                        <Link to="/" className='sidebarLink'>Link Item</Link>
                    </div>
                </div>
            </div>

            

            
        </aside>
    );
};

export default Sidebar;
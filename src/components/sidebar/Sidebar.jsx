import "./sidebar.scss";
import { Link } from "react-router-dom";
import { MdMenu } from "react-icons/md";

const Sidebar = ({ hideSidebar, setHideSidebar }) => {
    return (
        <aside className={hideSidebar ? "sidebar hideSidebar" : "sidebar"}>
            <div className="sidebarHeader">
                <MdMenu
                    className="icon"
                    onClick={() => setHideSidebar((prev) => !prev)}
                />
                <p>Smart Admin</p>
            </div>

            <div className="sidebarItemsWrapper">
                <div className="sidebarSection">
                    <p className="sidebarTitle">Section 1</p>
                    <div className="sidebarItem">
                        <Link to="/dashboard" className="sidebarLink">
                            Dashboard
                        </Link>
                        <Link to="/users" className="sidebarLink">
                            Users
                        </Link>
                        <Link to="/" className="sidebarLink">
                            Link Item
                        </Link>
                        <Link to="/" className="sidebarLink">
                            Link Item
                        </Link>
                        <Link to="/" className="sidebarLink">
                            Link Item
                        </Link>
                    </div>
                </div>

                <div className="sidebarSection">
                    <p className="sidebarTitle">Section 2</p>
                    <div className="sidebarItem">
                        <Link to="/" className="sidebarLink">
                            Link Item
                        </Link>
                        <Link to="/" className="sidebarLink">
                            Link Item
                        </Link>
                        <Link to="/" className="sidebarLink">
                            Link Item
                        </Link>
                        <Link to="/" className="sidebarLink">
                            Link Item
                        </Link>
                        <Link to="/" className="sidebarLink">
                            Link Item
                        </Link>
                    </div>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;

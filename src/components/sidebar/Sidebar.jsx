import "./sidebar.scss"
import { Link, NavLink } from "react-router-dom"
import { MdMenu } from "react-icons/md"

const Sidebar = ({ hideSidebar, setHideSidebar }) => {
    return (
        <aside className={hideSidebar ? "sidebar hideSidebar" : "sidebar"}>
            <div className="sidebarHeader">
                <MdMenu className="icon" onClick={() => setHideSidebar((prev) => !prev)} />
                <p>Smart Admin</p>
            </div>

            <div className="sidebarItemsWrapper custom-scrollbar">
                <div className="sidebarSection">
                    <p className="sidebarTitle">Section 1</p>
                    <div className="sidebarItem">
                        {["dashboard", "users", "form", "tables", "profile"].map((item, index) => (
                            <NavLink
                                key={index}
                                to={`/${item}`}
                                className={({ isActive }) =>
                                    isActive ? "sidebarLink active" : "sidebarLink"
                                }
                            >
                                {item}
                            </NavLink>
                        ))}
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
    )
}

export default Sidebar

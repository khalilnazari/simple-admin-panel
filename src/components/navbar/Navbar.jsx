import React from "react"
import "./navbar.scss"
import { MdMenu } from "react-icons/md"
import { CgProfile } from "react-icons/cg"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const Navbar = ({ setHideSidebar }) => {
    const navigate = useNavigate()

    const [showMenu, setShowMenu] = useState(false)

    const handleLogout = () => {
        navigate("/login")
    }
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <div className="left-side">
                    <MdMenu className="icon" onClick={() => setHideSidebar((prev) => !prev)} />
                    <p>Smart Admin</p>
                </div>
                <div className="right-side">
                    <div className="profileWrapper">
                        <CgProfile
                            className="icon"
                            size="30px"
                            onClick={() => setShowMenu((prev) => !prev)}
                        />

                        <div
                            className={`${
                                showMenu ? "profileWrapperMenu show" : "profileWrapperMenu"
                            }`}
                        >
                            <Link to="profile" className="links">
                                Proilfe
                            </Link>
                            <div to="logout" className="links" onClick={handleLogout}>
                                Logout
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

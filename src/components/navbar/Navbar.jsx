import React from "react";
import "./navbar.scss";
import { MdMenu } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const Navbar = ({ setHideSidebar }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container">
                <div className="left-side">
                    <MdMenu
                        className="icon"
                        onClick={() => setHideSidebar((prev) => !prev)}
                    />
                    <p>Smart Admin</p>
                </div>
                <div className="right-side">
                    <a href="/">
                        <CgProfile className="icon" />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

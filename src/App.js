import { Navbar, Sidebar } from "./components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import { Dashboard, Tables, Users, User, UserAdd, Profile } from "./containers"
import "./App.scss"

const App = () => {
    const [hideSidebar, setHideSidebar] = useState(false)
    return (
        <div className={hideSidebar ? "mainWrapper hideSidebar" : "mainWrapper"}>
            <BrowserRouter>
                <Navbar setHideSidebar={setHideSidebar} />
                <Sidebar hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />

                <div className="mainContainer">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/tables" element={<Tables />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/user/:id" element={<User />} />
                        <Route path="/add-user" element={<UserAdd />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="*" element={<div>Page not found</div>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App

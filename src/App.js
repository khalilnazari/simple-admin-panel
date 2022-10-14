import { Navbar, Sidebar } from "./components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import { Dashboard, Form, Tables } from "./containers"
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
                        <Route path="/form" element={<Form />} />
                        <Route path="/tables" element={<Tables />} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App

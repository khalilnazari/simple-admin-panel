import { Navbar, Sidebar } from "./components"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { useState } from "react"
import {
    Dashboard,
    Users,
    User,
    UserAdd,
    Profile,
    Login,
    ForgetPasswrod,
    Projects,
    Project,
    ProjectAdd,
    Tickets,
    Ticket,
    TicketAdd,
    Departments,
    Department,
    DepartmentAdd,
    DepartmentUpdate,
    ProjectUpdate
} from "./containers"
import "./App.scss"

const App = () => {
    const [hideSidebar, setHideSidebar] = useState(false)
    // const login = false
    return (
        <div className={hideSidebar ? "mainWrapper hideSidebar" : "mainWrapper"}>
            <BrowserRouter>
                <Navbar setHideSidebar={setHideSidebar} />
                <Sidebar hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />

                <div className="mainContainer">
                    <Routes>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/users" element={<Users />} />
                        <Route path="/user/:id" element={<User />} />
                        <Route path="/add-user" element={<UserAdd />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/" element={<Login />} />
                        <Route path="/forgetpassword" element={<ForgetPasswrod />} />
                        <Route path="/projects" element={<Projects />} />
                        <Route path="/project/:id" element={<Project />} />
                        <Route path="/add-project" element={<ProjectAdd />} />
                        <Route path="/project-update/:id" element={<ProjectUpdate />} />
                        <Route path="/tickets" element={<Tickets />} />
                        <Route path="/ticket/:id" element={<Ticket />} />
                        <Route path="/ticket-add" element={<TicketAdd />} />
                        <Route path="/departments" element={<Departments />} />
                        <Route path="/department/:id" element={<Department />} />
                        <Route path="/department-add" element={<DepartmentAdd />} />
                        <Route path="/department-update/:id" element={<DepartmentUpdate />} />
                        <Route path="*" element={<div>Page not found</div>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </div>
    )
}

export default App

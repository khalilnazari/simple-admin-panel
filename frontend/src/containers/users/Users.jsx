import React from "react"
import { PageHeader, UserTable } from "../../components"
import "./users.scss"
// import { users } from "../../data/data"
import { useSelector } from "react-redux"

const Users = () => {
    const { users } = useSelector((state) => state.users)
    console.log(users)
    const columns = ["Name", "Type", "Email", "View"]
    const handleSearch = (val) => {
        console.log("search text....", val)
    }

    // jsx
    return (
        <div className="">
            <PageHeader
                link="/add-user"
                title="Users"
                handleSearch={handleSearch}
                searchPlaceholder="Search user..."
                addButtonText="Add User"
            />

            <UserTable data={users} columns={columns} path="user" />
        </div>
    )
}

export default Users

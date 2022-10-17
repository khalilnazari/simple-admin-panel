import React from "react"
import { PageHeader, UserTable } from "../../components"
import "./users.scss"
import { users } from "../../data/data"

const Users = () => {
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

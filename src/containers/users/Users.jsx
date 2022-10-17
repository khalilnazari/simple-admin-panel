import React from "react"
import { PageHeader } from "../../components"
import "./users.scss"

const Users = () => {
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
            />
        </div>
    )
}

export default Users

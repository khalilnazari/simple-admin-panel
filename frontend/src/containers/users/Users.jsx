import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./users.scss"
import { PageHeader, UserTable } from "../../components"
import { useEffect } from "react"
import { getUsers } from "../../api/api"

const Users = () => {
    const dispatch = useDispatch()
    const { users, isLoading, hasError, errorMessage } = useSelector((state) => state.users)
    console.log(isLoading, hasError, errorMessage)

    useEffect(() => {
        getUsers(dispatch)
    }, [])

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
            {isLoading ? (
                <div>Loading..</div>
            ) : (
                <UserTable data={users} columns={columns} path="user" />
            )}
        </div>
    )
}

export default Users

import React from "react"
import { useDispatch, useSelector } from "react-redux"
import "./users.scss"
import { AlertError, PageHeader, UserTable } from "../../components"
import { useEffect } from "react"
import { getUsers } from "../../api/userApi"

const Users = () => {
    // table columns
    const columns = ["Name", "Type", "Email", "View"]

    const dispatch = useDispatch()

    // state
    const { users, isLoading, hasError, errorMessage } = useSelector((state) => state.users)

    // mount
    useEffect(() => {
        getUsers(dispatch)
    }, [])

    // handle search users
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

            {hasError && <AlertError message={errorMessage} />}

            {isLoading ? (
                <div>Loading..</div>
            ) : (
                <UserTable data={users} columns={columns} path="user" />
            )}
        </div>
    )
}

export default Users

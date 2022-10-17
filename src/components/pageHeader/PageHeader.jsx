import { useState } from "react"
import {
    MdKeyboardBackspace,
    MdAddCircleOutline,
    MdSearch,
    MdOutlineEditNote
} from "react-icons/md"
import { useNavigate, Link } from "react-router-dom"
import "./PageHeader.scss"

const PageHeader = ({
    link,
    title,
    handleSearch,
    searchPlaceholder,
    addButtonText,
    editButtonText,
    handleEditForm
}) => {
    const navigate = useNavigate()
    const [searchInput, setSearchInput] = useState()

    // jsx
    return (
        <div className="page-header">
            <div className="left-col">
                <MdKeyboardBackspace
                    size="25px"
                    title="Previous page"
                    onClick={() => navigate(-1)}
                    className="icon"
                />
                <h2 className="title">{title}</h2>
            </div>
            {handleSearch && (
                <div className="search-col">
                    <input
                        type="search"
                        placeholder={searchPlaceholder}
                        onChange={(e) => setSearchInput(e.target.value)}
                    />
                    <MdSearch
                        size="25px"
                        className="searchIcon"
                        onClick={() => handleSearch(searchInput)}
                    />
                </div>
            )}
            <div className="right-col">
                {addButtonText && (
                    <Link className="btn btn-secondary" to={link}>
                        <MdAddCircleOutline size="22px" /> <span>{addButtonText}</span>
                    </Link>
                )}

                {editButtonText && (
                    <button className="btn btn-secondary" onClick={handleEditForm}>
                        <MdOutlineEditNote size="22px" />
                        <span>{editButtonText}</span>
                    </button>
                )}
            </div>
        </div>
    )
}

export default PageHeader

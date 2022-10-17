import { useState } from "react"
import { MdAddCircleOutline, MdSearch } from "react-icons/md"
import { Link } from "react-router-dom"
import "./PageHeader.scss"

const PageHeader = ({ link, title, handleSearch, searchPlaceholder }) => {
    const [searchInput, setSearchInput] = useState()
    return (
        <div className="page-header">
            <div className="left-col">
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
                        onClick={() => {
                            handleSearch(searchInput)
                            setSearchInput("")
                        }}
                    />
                </div>
            )}
            <div className="right-col">
                <Link to={link} className="btn btn-secondary">
                    <MdAddCircleOutline size="22px" /> <span>Add Project</span>
                </Link>
            </div>
        </div>
    )
}

export default PageHeader

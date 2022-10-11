import { MdAddCircleOutline } from "react-icons/md"
import { Link } from "react-router-dom"
import "./PageHeader.scss"

const PageHeader = () => {
    return (
        <div className="page-header">
            <div className="left-col">
                <h2 className="title">Projects List</h2>
            </div>
            <div className="right-col">
                <Link to="/create-project" className="btn btn-secondary">
                    <MdAddCircleOutline size="22px" /> <span>Add Project</span>
                </Link>
            </div>
        </div>
    )
}

export default PageHeader

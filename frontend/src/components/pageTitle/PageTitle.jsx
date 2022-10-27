import React from "react"
import "./PageTitle.scss"

const PageTitle = ({ title }) => {
    return (
        <div className="pageTitle">
            <h2 className="title">{title}</h2>
        </div>
    )
}

export default PageTitle

import "./Loading.scss"
import loding from "./loading.gif"

const Loading = ({ loadingMessage }) => {
    if (loadingMessage) {
        return (
            <div className="loadingOverlay">
                <div className="loadingBox">
                    <div className="loadingImage">
                        <img src={loding} alt="loading img" className="loadingImage" />
                    </div>
                    <div className="loadingText">{loadingMessage}</div>
                </div>
            </div>
        )
    } else {
        return <></>
    }
}

export default Loading

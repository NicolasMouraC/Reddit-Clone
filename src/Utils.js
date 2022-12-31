export const checkIfIsImage = (imgSrc) => {
    return (imgSrc.match(/\.(jpeg|jpg|gif|png)$/) != null)
}

export const videoElement = (videoUrl) => {
    return (
        <video controls>
            <source src={videoUrl} type="video/mp4" />
        </video>
    )
}

export const imageElement = (imgSrc) => {
    return (
        <img src={imgSrc} alt={imgSrc} />
    )
}

export const commentsElement = (commentsUrl) => {
    return (
        <a href={'https://reddit.com' + commentsUrl}>
            <button type="button" className="commments-icon">
                <span className="comments-span">Click here or click on the comments icon to see this discussion</span>
            </button>
        </a>
    )
}

export const utcToDate = () => {

}
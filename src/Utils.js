import ReactPlayer from 'react-player'

export const checkIfIsImage = (imgSrc) => {
    return (imgSrc.match(/\.(jpeg|jpg|gif|png)$/) != null)
}

export const videoElement = (videoUrl) => {
    return (
        <ReactPlayer url={videoUrl} controls={true} volume={1} width={'100%'}/>
    )
}

export const imageElement = (imgSrc) => {
    return (
        <img src={imgSrc} alt={imgSrc} loading="lazy"/>
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

export const utcToDate = (postDateUtc) => {
    const nowDate = new Date();
    const postDate = new Date(postDateUtc * 1000);
    return Math.round((Math.abs((nowDate.getTime() - postDate.getTime()) / (1000 * 60 * 60))))
}

export async function fetchData(url) {
    const data = await fetch(url);
    const dataJson = await data.json();

    return dataJson.data.children;
}
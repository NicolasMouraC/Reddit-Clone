import React from "react";

const PostSkeleton = () => {
    return (
        <div className="post">
            <div className="skeleton skeleton-arrows post-vote-arrows"></div>

            <div className="skeleton skeleton-text skeleton-size-50"></div>
            <div className="skeleton skeleton-text skeleton-size-75"></div>

            <div className="post-img">
                <div className="skeleton skeleton-img"></div>
                <hr />
                <div className="post-description">
                    <div className="skeleton skeleton-text skeleton-size-50"></div>
                    <div className="skeleton skeleton-text skeleton-size-50"></div>
                    <div className="skeleton skeleton-text skeleton-size-50"></div>
                </div>
            </div>
            
        </div>
    )
}

export default PostSkeleton;
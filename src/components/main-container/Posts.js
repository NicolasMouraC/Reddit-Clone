import React, { useState } from "react";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { selectIsPostsLoaded } from "../../api/PostsSlice.js";
import { selectPosts } from "../../api/PostsSlice.js";
import { getPost } from "../../api/PostsSlice.js";
import { fetchData } from "../../Utils.js";

const Posts = () => {
    const dispatch = useDispatch();
    const isLoaded = useSelector(selectIsPostsLoaded);
    const posts = useSelector(selectPosts);

    useState(async () => {
            const posts = await fetchData('https://www.reddit.com/r/popular.json')
            dispatch(getPost({ posts: posts }));
    }, [])

    return (
        <section className='posts'>
            <span className="posts-header">Posts</span>
            {isLoaded ? posts.map(el => {
                    return <Post
                                title={el.data.title} 
                                imgSrc={el.data.url} 
                                score={el.data.score} 
                                comments={el.data.num_comments} 
                                author={el.data.author}
                                isVideo={el.data.is_video}
                                videoUrl={el.data.is_video ? el.data.media['reddit_video'].fallback_url : {}}
                                redditCommentsLink={el.data.permalink}
                                communityName={el.data.subreddit_name_prefixed}
                                utc={el.data.created}
                                key={el.data.name}
                                />})
                    : null
                }
        </section>
    )
}

export default Posts;
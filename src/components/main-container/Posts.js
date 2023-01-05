import React, { useEffect } from "react";
import Post from "./Post.js";
import { useSelector, useDispatch } from "react-redux";
import { selectIsPostsLoaded } from "../../slices/PostsSlice.js";
import { selectPosts } from "../../slices/PostsSlice.js";
import { selectTopic } from "../../slices/TopicsSlice.js";
import { toggleIsLoaded, getPost } from "../../slices/PostsSlice.js";
import { fetchData } from "../../Utils.js";

const Posts = () => {
    const dispatch = useDispatch();
    const isLoaded = useSelector(selectIsPostsLoaded);
    const posts = useSelector(selectPosts);
    const topic = useSelector(selectTopic);

    useEffect(() => {
        async function data(topic) {
            dispatch(toggleIsLoaded());
            const posts = await fetchData(`https://www.reddit.com/r/${topic}.json`);
            dispatch(getPost({ posts: posts }));
        }

        data(topic);
    // eslint-disable-next-line
    }, [topic])

    return (
        <section className='posts'>
            <span className="posts-header">{topic.toUpperCase()} Posts</span>
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
                    : <div className="loading-div"><span className="loading-text">Loading posts...</span></div>
                }
        </section>
    )
}

export default Posts;
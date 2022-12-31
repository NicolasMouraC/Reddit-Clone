import React, { useState } from "react";
import Post from "./Post";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoaded } from "../../api/PostsSlice";
import { selectPosts } from "../../api/PostsSlice";
import { getPost } from "../../api/PostsSlice";

const Posts = () => {
    const dispatch = useDispatch();
    const isLoaded = useSelector(selectIsLoaded);
    const posts = useSelector(selectPosts);

    useState(() => {
        async function fetchData() {
            const data = await fetch('https://www.reddit.com/r/popular.json');
            const dataJson = await data.json();

            // const title = dataJson.data.children[1].data.title;
            const postss = dataJson.data.children;
            dispatch(getPost({ posts: postss }));
            //console.log(posts[0].data.preview.images[0].source.width)
        }

        fetchData();
    }, [])

    return (
        <section className='posts'>
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
                                />})
                    : null
                }
        </section>
    )
}

export default Posts;
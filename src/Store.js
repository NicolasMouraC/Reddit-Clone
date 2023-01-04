import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./api/PostsSlice.js";
import newPostsReducer from "./api/NewPostsSlice.js";
import topicReducer from "./api/TopicsSlice.js";

export default configureStore({
    reducer: {
        posts: postsReducer,
        newPosts: newPostsReducer,
        topic: topicReducer
    }
});
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./api/PostsSlice.js";
import newPostsReducer from "./api/HotPostsSlice.js";

export default configureStore({
    reducer: {
        posts: postsReducer,
        newPosts: newPostsReducer
    }
});
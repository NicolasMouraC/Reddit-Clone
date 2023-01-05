import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./slices/PostsSlice.js";
import newPostsReducer from "./slices/NewPostsSlice.js";
import topicReducer from "./slices/TopicsSlice.js";

export default configureStore({
    reducer: {
        posts: postsReducer,
        newPosts: newPostsReducer,
        topic: topicReducer
    }
});
import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "./api/PostsSlice";


export default configureStore({
    reducer: {
        posts: postsReducer
    }
});
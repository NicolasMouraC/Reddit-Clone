import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        isPostsLoaded: false
    },
    reducers: {
        getPost: (state, action) => {
            state.isPostsLoaded = false;
            state.posts = action.payload.posts
            state.isPostsLoaded = true;
        }
    }
})

export const selectPosts = (state) => state.posts.posts;
export const selectIsPostsLoaded = (state) => state.posts.isPostsLoaded;
export const { getPost } = postsSlice.actions;
export default postsSlice.reducer
import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [],
        isPostsLoaded: false
    },
    reducers: {
        toggleIsLoaded: (state, action) => {
            state.isPostsLoaded = (!state.isPostsLoaded)
        },
        getPost: (state, action) => {
            state.posts = action.payload.posts
            state.isPostsLoaded = true;
        }
    }
})

export const selectPosts = (state) => state.posts.posts;
export const selectIsPostsLoaded = (state) => state.posts.isPostsLoaded;
export const {  toggleIsLoaded, getPost } = postsSlice.actions;
export default postsSlice.reducer
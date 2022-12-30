import { createSlice } from "@reduxjs/toolkit";

export const postsSlice = createSlice({
    name: "posts",
    initialState: {
        posts: [
            {
                data: {
                    title: 'Title'
                }
            },
        ],
        isLoaded: false
    },
    reducers: {
        getPost: (state, action) => {
            state.isLoaded = false;
            state.posts = action.payload.posts
            state.isLoaded = true;
        }
    }
})

export const selectPosts = (state) => state.posts.posts;
export const selectIsLoaded = (state) => state.posts.isLoaded;
export const { getPost } = postsSlice.actions;
export default postsSlice.reducer
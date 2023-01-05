import { createSlice } from "@reduxjs/toolkit";

export const newPostsSlice = createSlice({
    name: "newPosts",
    initialState: {
        newPosts: [],
        isNewPostsLoaded: false
    },
    reducers: {
        getNewPosts: (state, action) => {
            state.isNewPostsLoaded = false;
            state.newPosts = action.payload.newPosts;
            state.isNewPostsLoaded = true;
        }
    }
})

export const selectNewPosts = (state) => state.newPosts.newPosts;
export const selectIsNewPostsLoaded = (state) => state.newPosts.isNewPostsLoaded;
export const { getNewPosts } = newPostsSlice.actions;
export default newPostsSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

export const topicSlice = createSlice({
    name: "topic",
    initialState: {
        topic: "popular"
    },
    reducers: {
        setNewTopic: (state, action) => {
            state.topic = action.newTopic;
        }
    }
})

export const selectTopic = (state) => state.topic.topic;
export const { setNewTopic } = topicSlice.reducer;
export default topicSlice.reducer;
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";


import {postService} from "../../services";


const initialState = {
    posts: [],
    errors: null,
    loading: null,
    selectedPost: null
}

const getAllPosts = createAsyncThunk(
    "postSlice/getAllPosts",
    async (_, {rejectWithValue}) => {
        try {
            const {data} = await postService.getAll()
            return data

        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    }
);

const getPostById = createAsyncThunk(
    "postSlice/getById",
    async ({id}, {rejectWithValue}) => {
        try {
            const {data} = await postService.getById(id)
            return data

        } catch (e) {
            return rejectWithValue(e.response.data)
        }

    }
);


const postSlice = createSlice({
    name: 'postSlice',
    initialState,
    reducers: {
        setSelectedPost: (state, action) => {
            state.selectedPost = action.payload
        }
    },
    extraReducers: builder => {
        builder
            .addCase(getAllPosts.fulfilled, (state, action) => {
                state.posts = action.payload
                state.loading = false
            })
            .addCase(getAllPosts.pending, (state, action) => {
                state.loading = true
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.errors = action.payload
                state.loading = false
            })
            .addCase(getPostById.fulfilled, (state, action) => {
                state.selectedPost = action.payload
            })
    }
})

const {reducer: postReducer, actions: {setSelectedPost}} = postSlice;

const postActions={
    getAllPosts,
    getPostById,
    setSelectedPost
}

export {
    postReducer,
    postActions
}
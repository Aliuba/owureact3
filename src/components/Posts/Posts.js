import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";


import Post from "../Post/Post";
import {postActions} from "../../redux";


const Posts = () => {

    const dispatch = useDispatch()

    const {posts, errors, loading} = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(postActions.getAllPosts())
    }, [])
    return (
        <div>
            {errors && JSON.stringify(errors)}
            {loading && <h1>Loading.......</h1>}
            {posts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;
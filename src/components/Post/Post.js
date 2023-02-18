import React from 'react';
import {useDispatch, useSelector} from "react-redux";


import {postActions} from "../../redux";

const Post = ({post}) => {
    const {userId, id, title, body} = post
    const dispatch=useDispatch()
    const {selectedPost} = useSelector(state => state.posts);

    return (
        <div>
            {selectedPost&&selectedPost.title}
            <hr/>
            <div>userId:{userId}</div>
            <div>id:{id}</div>
            <div>title:{title}</div>
            <div>body:{body}</div>
            <button onClick={()=>dispatch(postActions.setSelectedPost(post))}>select me</button>
            <button onClick={()=>dispatch(postActions.getPostById({id}))}>select from Api</button>
        </div>
    );
};

export default Post;
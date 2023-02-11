import {useEffect, useState} from "react";


import {commentsService} from "../../services";


const CommentDetails = ({postId}) => {

    const[comment, setComment]=useState(null)

    useEffect(()=>{
        commentsService.getById(postId).then(({data})=>setComment(data))

    },[postId])

    return (
        <div>
            {comment&&
                <>
                    <div>postId: {comment.id}</div>
                    <div>userId: {comment.userId}</div>
                    <div>title: {comment.title}</div>
                    <div>body: {comment.body}</div>
                </>
                 }

        </div>
    );
};

export default CommentDetails;
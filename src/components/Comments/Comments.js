import {useEffect, useState} from "react";


import {commentsService} from "../../services";
import Comment from "../Comment/Comment";


const Comments = () => {
    const[comments, setComments]=useState([])

    useEffect(()=>{
        commentsService.getAll().then(({data})=>setComments(data))
    }, [])

    return (
        <div>
            <h1>COMMENTS</h1>
            {comments.map(comment=><Comment key={comment.id} comment={comment}/>)}

        </div>
    );
};

export default Comments;
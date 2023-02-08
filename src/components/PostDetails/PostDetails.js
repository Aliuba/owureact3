import {useEffect, useState} from "react";
import {postService} from "../../services";


const PostDetails = ({postId, postFromRoute}) => {

    const[post, setPost]=useState(null)

    useEffect(()=>{
        if(postFromRoute){
            setPost({...postFromRoute})
        }else{
            postService.getById(postId).then(({data})=> setPost(data))
        }

    }, [postId])

    return (
        <div>
            {post &&
                <>
                    <div>id: {post.id}</div>
                    <div>userId: {post.userId}</div>
                    <div>title: {post.title}</div>
                    <div>body: {post.body}</div>
                </>
            }
        </div>
    );
};

export default PostDetails;
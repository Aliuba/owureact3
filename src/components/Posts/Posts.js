import {useEffect, useState} from "react";


import {postService} from "../../services";
import Post from "../Post/Post";
import css from "./Posts.module.css"


const Posts = () => {
    const [posts, setPosts]=  useState([])

    useEffect(()=>{
        postService.getAll().then(({data})=> setPosts([...data]))

    }, [])

    return (
        <div className={css.Posts}>
            {posts.map(post=> <Post key={post.id} post={post}/>)}
        </div>
    );
};

export default Posts;
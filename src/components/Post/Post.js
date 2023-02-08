import {Link, useNavigate} from "react-router-dom";


const Post = ({post}) => {

    const navigate = useNavigate();
    const {id, userId, title} = post

    return (
        <div>
            <div>id: {id}</div>
            <div>userId: {userId}</div>
            <div>title: {title}</div>
            <button onClick={() =>navigate(id.toString(), {state:{...post}})}>PostDetails</button>
            {/*<Link to={id.toString()} state={{...post}}>Post Details</Link>*/}
        </div>
    );
};

export default Post;
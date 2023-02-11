import {Link, useNavigate} from "react-router-dom";


const Comment = ({comment}) => {
    const{ postId, id, name, email, body}=comment



    return (
        <div>
            <div> postId: {postId}</div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div> email: {email}</div>
            <div> body: {body}</div>

            <Link to={postId.toString()}>post which includes this comment</Link>
            <br/>

        </div>
    );
};

export default Comment;
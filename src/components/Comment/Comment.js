import {Link} from "react-router-dom";


const Comment = ({comment}) => {
    const{ postId, id, name, email, body}=comment
    return (
        <div>
            <div> postId: {postId}</div>
            <div>id : {id}</div>
            <div>name : {name}</div>
            <div> email: {email}</div>
            <div> body: {body}</div>

            {/*тут я просто відправила на те посилання, що ми робили на лекції, чи треба якось інакше?*/}

            <Link to={`../posts/${postId}`}>при натисканні на комментар тягнеться пост, до якого належить цей коментар</Link>
        </div>
    );
};

export default Comment;
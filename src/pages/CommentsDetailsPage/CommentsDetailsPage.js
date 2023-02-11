import {useParams} from "react-router-dom";
import CommentDetails from "../../components/CommentDetails/CommentDetails";


const CommentsDetailsPage = () => {

    const {postId} = useParams()

    console.log(postId)
    return (
        <div>
            <CommentDetails postId={postId}/>
        </div>
    );
};

export default CommentsDetailsPage;
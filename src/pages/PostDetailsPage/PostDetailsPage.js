import {useLocation, useParams} from "react-router-dom";
import PostDetails from "../../components/PostDetails/PostDetails";


const PostDetailsPage = () => {

    const {postId}= useParams()
    const {state:postFromRoute}= useLocation()


    return (
        <div>

            <PostDetails postId={postId} postFromRoute={postFromRoute}/>

        </div>
    );
};

export default PostDetailsPage;
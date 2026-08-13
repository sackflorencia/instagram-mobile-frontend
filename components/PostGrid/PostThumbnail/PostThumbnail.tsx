// import { Link } from "react-router-dom";
import { Image } from "react-native";
import type { Post } from "../../../interfaces/Post";

//chatgpt: me explico que tenia que pasar el state post a la postpage y lo agregue
const PostThumbnail = ({ post }: { post: Post }) => {
    return (
        // <Link to={`/post/${post.id}`} state={{ post }} className="post-thumbnail-link">
            <Image
                source={{uri:post.image}}
                alt="Post thumbnail"
            />
        // </Link>
    )
}
export default PostThumbnail;
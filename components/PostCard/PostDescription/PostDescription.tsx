// import { Link } from "react-router-dom";
import type { Post } from "../../../interfaces/Post";
import { Text, View } from "react-native";

const PostDescription = ({ post, variant }: { post: Post; variant: "feed" | "detail" }) => {
    return (
        <View>
            {/* <Link to={`/profile/${post.profileId}`} className="post-description-user"> */}
                <Text>{post.username}</Text>
            {/* </Link> */}
            <Text>{post.caption}</Text>
            {variant === "feed" && (
                // <Link to={`/post/${post.id}`} state={{ post }} className="post-description-comments-link">
                   <Text> View all {post.comments.length} comments </Text>
                // </Link>
            )}
        </View>
    )
}
export default PostDescription;
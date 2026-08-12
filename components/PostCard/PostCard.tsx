import type { Post } from "../../interfaces/Post";
import PostHeader from "./PostHeader/PostHeader";
import PostImage from "./PostImage/PostImage";
import PostActions from "./PostActions/PostActions";
import PostDescription from "./PostDescription/PostDescription";
//import CommentsList from "./CommentsList/CommentsList";
import { View } from "react-native";

interface PostCardProps {
    post: Post;
    variant: "feed" | "detail";
}

/* modificado con ia */
const PostCard = ({ post, variant }: PostCardProps) => {

    if (variant === "detail") {
        return (
            <View>
                <View>
                    <PostImage image= { post.image } />
                </View>

    <View>
        <PostHeader
            username={post.username}
            profileId={post.profileId}
            avatar={post.avatar}
        />
    </View>

    <View>
        <PostDescription post={post} variant={variant} />
        {/* <CommentsList comments={post.comments} /> */}
    </View>

    <View>
        <PostActions postId={post.id} likes={post.likes} />
    </View>
</View>
        );
    }
return (
    <View>
        <PostHeader
            username={post.username}
            profileId={post.profileId}
            avatar={post.avatar}
        />

        <PostImage image={post.image} />

        <PostActions
            postId={post.id}
            likes={post.likes}
        />

        <PostDescription
            post={post}
            variant={variant}
        />
    </View>
);
}

export default PostCard;
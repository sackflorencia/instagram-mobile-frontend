import { FlatList } from "react-native";
import type { Post } from "../../interfaces/Post";
import PostThumbnail from "./PostThumbnail/PostThumbnail";

interface PostGridProps {
    posts: Post[];
}

const PostGrid = ({ posts }: PostGridProps) => {
    return (
        <FlatList
            data={posts}
            numColumns={3}
            keyExtractor={(post) => post.id.toString()}
            renderItem={({ item }) => (
                <PostThumbnail post={item} />
            )}
        />
    );
};

export default PostGrid;
import { FlatList } from "react-native";
import type { Post } from "../../interfaces/Post";
import PostCard from "../PostCard/PostCard";

interface PostsListProps {
    posts: Post[];
}

const PostsList = ({ posts }: PostsListProps) => {
    return (
        <FlatList
            data={posts}
            keyExtractor={(post) => post.id.toString()}
            renderItem={({ item }) => (
                <PostCard
                    post={item}
                    variant="feed"
                />
            )}
        />
    );
};

export default PostsList;
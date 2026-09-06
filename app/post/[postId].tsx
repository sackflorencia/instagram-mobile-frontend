import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";
import PostCard from "../../components/PostCard/PostCard";

const PostScreen = () => {
    const { postId } = useLocalSearchParams<{ postId: string }>();

    // Por ahora, para probar:
    console.log("POST ID:", postId);

    if (!postId) {
        return (
            <View>
                <Text>Post not found</Text>
            </View>
        );
    }

    // Acá después obtenemos el post usando postId

    return (
        <View>
            {/* <PostCard post={post} variant="detail" /> */}
        </View>
    );
};

export default PostScreen;
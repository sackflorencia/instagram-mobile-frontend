import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

import type { Post } from "../../interfaces/Post";
import { getCharacters } from "../../services/hpAPI";
import { characterToPost } from "../../mappers/characterMapper";
import PostCard from "../../components/PostCard/PostCard";
import Loading from "../../components/Loading/Loading";

const PostScreen = () => {
    const { postId } = useLocalSearchParams<{ postId: string }>();

    const [post, setPost] = useState<Post | null>(null);

    useEffect(() => {
        async function loadPost() {
            if (!postId) return;

            try {
                const characters = await getCharacters();

                const character = characters.find(
                    character => character.id.toString() === postId
                );

                if (!character) {
                    return;
                }

                const post = characterToPost(character);

                setPost(post);
            } catch (error) {
                console.error("POST ERROR:", error);
            }
        }

        loadPost();
    }, [postId]);

    if (!post) {
        return <Loading />;
    }

    return (
        <View>
            <PostCard
                post={post}
                variant="detail"
            />
        </View>
    );
};

export default PostScreen;
import { useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

import CommentItem from "@/components/PostCard/CommentItem/CommentItem";
import Loading from "../../components/Loading/Loading";
import PostCard from "../../components/PostCard/PostCard";
import type { Post } from "../../interfaces/Post";
import { characterToPost } from "../../mappers/characterMapper";
import { getCharacters } from "../../services/hpAPI";
import { SafeAreaView } from "react-native-safe-area-context";
import PostHeader from "@/components/PostCard/PostHeader/PostHeader";

const PostScreen = () => {
    const { postId } = useLocalSearchParams<{ postId: string }>();
    const [post, setPost] = useState<Post | null>(null);
    const router = useRouter();

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
        <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    paddingHorizontal: 12,
                    paddingVertical: 8,
                    backgroundColor: "#fff",
                }}
            >
                <TouchableOpacity
                    onPress={() => router.back()}
                    style={{
                        marginRight: 8,
                        transform: [{ translateY: -4 }],
                    }}
                >
                    <Text style={{ fontSize: 30 }}>‹</Text>
                </TouchableOpacity>

                <PostHeader
                    username={post.username}
                    profileId={post.profileId}
                    avatar={post.avatar}
                />
            </View>

            <FlatList
                data={post.comments}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CommentItem comment={item} />}
                ListHeaderComponent={
                    <PostCard post={post} variant="detail" />
                }
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};

export default PostScreen;
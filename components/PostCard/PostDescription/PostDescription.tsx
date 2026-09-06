
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import type { Post } from "../../../interfaces/Post";

const PostDescription = ({ post, variant }: { post: Post; variant: "feed" | "detail" }) => {
    const commentsCount = post.comments?.length || 0;
    const router = useRouter();
    return (
        <View style={styles.container}>
            {post.caption ? (
                <Text style={styles.captionText}>
                    <Text
                        style={styles.username}
                        onPress={() => {
                            router.push({
                                pathname: "/profile",
                                params: {
                                    house: post.profileId,
                                },
                            });
                        }}
                    >
                        {post.username}
                    </Text>
                    {"  "}
                    {post.caption}
                </Text>
            ) : (
                <Text
                    style={styles.username}
                    onPress={() => {
                        router.push({
                            pathname: "/profile",
                            params: {
                                house: post.profileId,
                            },
                        });
                    }}
                >
                    {post.username}
                </Text>
            )}

            {/* Enlace para ver comentarios (Solo visible en variante 'feed' y si existen comentarios) */}
            {variant === "feed" && commentsCount > 0 && (
                <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={() => {
                        router.push({
                            pathname: "/post/[postId]",
                            params: {
                                postId: post.id.toString(),
                            },
                        });
                    }}
                    style={styles.commentsLinkContainer}
                >
                    <Text style={styles.commentsLinkText}>
                        View all {commentsCount} {commentsCount === 1 ? "comment" : "comments"}
                    </Text>
                </TouchableOpacity>
            )}
        </View>
        // ===== IA: FIN =====
    );
};

// ===== IA: INICIO =====
// IA: Hoja de estilos con jerarquía tipográfica y espaciados idénticos a los de PostActions y CommentItem.
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        paddingHorizontal: 14,
        paddingTop: 2,
        paddingBottom: 8,
    },
    captionText: {
        fontSize: 13.5,
        lineHeight: 18,
        color: "#262626",
    },
    username: {
        fontWeight: "600",
        color: "#262626",
    },
    commentsLinkContainer: {
        marginTop: 6,
    },
    commentsLinkText: {
        fontSize: 13.5,
        color: "#8E8E8E",
    },
});
// ===== IA: FIN =====

export default PostDescription;
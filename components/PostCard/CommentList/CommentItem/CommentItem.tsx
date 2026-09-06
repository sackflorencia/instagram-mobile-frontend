import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import type { Comment } from "../../../../interfaces/Comment";

const CommentItem = ({ comment }: { comment: Comment }) => {
    const avatarUrl = (comment as any)?.avatarUrl;
    const initial = comment.username ? comment.username.charAt(0).toUpperCase() : "?";
    const router = useRouter();
    return (
        <View style={styles.container}>
            <TouchableOpacity activeOpacity={0.8} style={styles.avatarContainer}>
                {avatarUrl ? (
                    <Image source={{ uri: avatarUrl }} style={styles.avatar} />
                ) : (
                    <View style={styles.avatarPlaceholder}>
                        <Text style={styles.avatarInitial}>{initial}</Text>
                    </View>
                )}
            </TouchableOpacity>

            <View style={styles.contentContainer}>
                <Text style={styles.commentText}>
                    <Text
                        style={styles.username}
                        onPress={() => {
                            router.push({
                                pathname: "/profile",
                                params: {
                                    house: comment.profileId,
                                },
                            });
                        }}
                    >
                        {comment.username}
                    </Text>
                    {"  "}
                    {comment.text}
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        paddingVertical: 10,
        paddingHorizontal: 16,
        backgroundColor: "#FFFFFF",
    },
    avatarContainer: {
        marginRight: 12,
    },
    avatar: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#EFEFEF",
    },
    avatarPlaceholder: {
        width: 32,
        height: 32,
        borderRadius: 16,
        backgroundColor: "#EFEFEF",
        justifyContent: "center",
        alignItems: "center",
    },
    avatarInitial: {
        fontSize: 13,
        fontWeight: "600",
        color: "#262626",
    },
    contentContainer: {
        flex: 1,
        paddingTop: 2,
    },
    commentText: {
        fontSize: 13,
        lineHeight: 18,
        color: "#262626",
    },
    username: {
        fontWeight: "600",
        color: "#262626",
    },
});

export default CommentItem;
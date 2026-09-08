import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

import type { Comment } from "../../../../interfaces/Comment";
import { houseToProfile } from "../../../../mappers/houseMapper";

const CommentItem = ({ comment }: { comment: Comment }) => {
    const profile = houseToProfile(comment.profileId, 0);
    const avatar = profile.avatar;

    const initial = comment.username
        ? comment.username.charAt(0).toUpperCase()
        : "?";

    const router = useRouter();

    return (
        <View style={styles.container}>
            {/* Imagen de perfil a la izquierda */}
            <TouchableOpacity
                activeOpacity={0.8}
                style={styles.avatarContainer}
            >
                {avatar ? (
                    <Image
                        source={avatar}
                        style={styles.avatar}
                        accessibilityLabel={comment.username}
                    />
                ) : (
                    <View style={styles.avatarPlaceholder}>
                        <Text style={styles.avatarInitial}>
                            {initial}
                        </Text>
                    </View>
                )}
            </TouchableOpacity>

            {/* Contenido a la derecha: Username arriba, comentario abajo */}
            <View style={styles.contentContainer}>
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

                <Text style={styles.commentText}>
                    {comment.text}
                </Text>
            </View>
        </View>
    );
};

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
    username: {
        fontWeight: "600",
        fontSize: 13,
        color: "#262626",
        marginBottom: 2, // Espacio pequeño entre el usuario y el comentario
    },
    commentText: {
        fontSize: 13,
        lineHeight: 18,
        color: "#262626",
    },
});

export default CommentItem;
import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import type { ImageSourcePropType } from "react-native";

const PostHeader = ({ username, profileId, avatar }: { username: string, profileId: string, avatar: ImageSourcePropType }) => {
    const router = useRouter();
    const initial = username ? username.charAt(0).toUpperCase() : "?";


    return (
        <View style={styles.container}>
            <TouchableOpacity
                activeOpacity={0.7}
                style={styles.userContainer}
                onPress={() => {
                    router.push({
                        pathname: "/profile",
                        params: {
                            house: profileId,
                        },
                    });
                }}
            >
                <View style={styles.avatarContainer}>
                    {avatar ? (
                        <Image
                            source={avatar }
                            style={styles.avatar}
                            accessibilityLabel={username}
                        />
                    ) : (
                        <View style={styles.avatarPlaceholder}>
                            <Text style={styles.avatarInitial}>{initial}</Text>
                        </View>
                    )}
                </View>

                <Text style={styles.username} numberOfLines={1}>
                    {username}
                </Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 14,
        paddingVertical: 10,
        backgroundColor: "#FFFFFF",
    },
    userContainer: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1,
    },
    avatarContainer: {
        marginRight: 10,
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
    username: {
        fontSize: 13.5,
        fontWeight: "600",
        color: "#262626",
        flexShrink: 1,
    },
    optionsButton: {
        paddingLeft: 10,
    },
});

export default PostHeader;
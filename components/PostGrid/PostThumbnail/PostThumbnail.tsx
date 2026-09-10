import React, { useState } from "react";
import {
    Image,
    TouchableOpacity,
    StyleSheet,
    View,
    ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import type { Post } from "../../../interfaces/Post";

const PostThumbnail = ({ post }: { post: Post }) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    return (
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.container}
            onPress={() => {
                router.push({
                    pathname: "/post/[postId]",
                    params: {
                        postId: post.id.toString(),
                    },
                });
            }}
        >
            {isLoading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="small" color="#8E8E8E" />
                </View>
            )}

            <Image
                source={{ uri: post.image }}
                style={styles.image}
                resizeMode="cover"
                accessibilityLabel="Post thumbnail"
                onLoadStart={() => {
                    console.log("IMAGE LOAD START:", post.image);
                    setIsLoading(true);
                }}
                onLoad={() => {
                    console.log("IMAGE LOAD SUCCESS:", post.image);
                    setIsLoading(false);
                }}
                onError={(error) => {
                    console.log("IMAGE LOAD ERROR:", post.image, error.nativeEvent);
                    setIsLoading(false);
                }}
                onLoadEnd={() => {
                    console.log("IMAGE LOAD END:", post.image);
                    setIsLoading(false);
                }}
            />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        aspectRatio: 1,
        backgroundColor: "#EFEFEF",
        overflow: "hidden",
        position: "relative",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    loadingContainer: {
        ...StyleSheet.absoluteFill,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EFEFEF",
        zIndex: 1,
    },
});

export default PostThumbnail;
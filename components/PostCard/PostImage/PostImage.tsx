import React, { useState } from "react";
import {
    Image,
    View,
    StyleSheet,
    ActivityIndicator,
} from "react-native";

const PostImage = ({ image }: { image: string }) => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    return (
        <View style={styles.container}>
            {isLoading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator
                        size="small"
                        color="#8E8E8E"
                    />
                </View>
            )}

            <Image
                source={{ uri: image }}
                style={styles.image}
                resizeMode="cover"
                onLoad={() => setIsLoading(false)}
                onError={() => {
                    setIsLoading(false);
                    setHasError(true);
                }}
            />

            {hasError && (
                <View style={styles.errorContainer}>
                    <View style={styles.errorPlaceholder} />
                </View>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        aspectRatio: 1,
        backgroundColor: "#EFEFEF",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    loadingContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EFEFEF",
        zIndex: 1,
    },
    errorContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FAFAFA",
    },
    errorPlaceholder: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: "#DBDBDB",
    },
});

export default PostImage;
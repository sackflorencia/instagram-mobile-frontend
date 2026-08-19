// ===== IA: INICIO =====
// IA: Se agregan React, useState, ActivityIndicator y StyleSheet para controlar el renderizado y la carga progresiva de la imagen.
import React, { useState } from "react";
import { Image, View, StyleSheet, ActivityIndicator } from "react-native";
// ===== IA: FIN =====

const PostImage = ({ image }: { image: string }) => {
    // ===== IA: INICIO =====
    // IA: Estados locales para ofrecer feedback visual durante la carga o en caso de error.
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    // ===== IA: FIN =====

    return (
        // ===== IA: INICIO =====
        // IA: Rediseño del contenedor con un skeleton de carga atenuado y ajuste de imagen de borde a borde.
        <View style={styles.container}>
            {isLoading && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size="small" color="#8E8E8E" />
                </View>
            )}

            <Image
                source={{ uri: image }}
                style={styles.image}
                resizeMode="cover"
                onLoadStart={() => setIsLoading(true)}
                onLoadEnd={() => setIsLoading(false)}
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
        // ===== IA: FIN =====
    );
};

// ===== IA: INICIO =====
// IA: Hoja de estilos con formato bordes a borde (1:1 aspect ratio) e integración de paleta gris neutra.
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
// ===== IA: FIN =====

export default PostImage;
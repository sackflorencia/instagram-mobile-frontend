// import { Link } from "react-router-dom";
// ===== IA: INICIO =====
// IA: Se agregan React, useState, TouchableOpacity, Image, View, ActivityIndicator y StyleSheet para maquetar la miniatura táctil tipo grilla de perfil.
import React, { useState } from "react";
import { Image, TouchableOpacity, StyleSheet, View, ActivityIndicator } from "react-native";
// ===== IA: FIN =====
import type { Post } from "../../../interfaces/Post";

//chatgpt: me explico que tenia que pasar el state post a la postpage y lo agregue
const PostThumbnail = ({ post }: { post: Post }) => {
    // ===== IA: INICIO =====
    // IA: Estado local para mostrar un spinner/placeholder neutro mientras se descarga la imagen.
    const [isLoading, setIsLoading] = useState(true);
    // ===== IA: FIN =====

    return (
        // ===== IA: INICIO =====
        // IA: Rediseño en contenedor táctil con relación de aspecto 1:1 y respuesta al toque, ideal para grillas de 3 columnas estilo Instagram.
        <TouchableOpacity
            activeOpacity={0.8}
            style={styles.container}
            onPress={() => {
                // Listo para conectar la navegación al detalle del post:
                // e.g. navigation.navigate('PostDetail', { post })
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
                onLoadStart={() => setIsLoading(true)}
                onLoadEnd={() => setIsLoading(false)}
            />
        </TouchableOpacity>
        // ===== IA: FIN =====
    );
};

// ===== IA: INICIO =====
// IA: Hoja de estilos con relación de aspecto cuadrada (1:1) y fondo neutro reutilizado del proyecto.
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
        ...StyleSheet.absoluteFillObject,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#EFEFEF",
        zIndex: 1,
    },
});
// ===== IA: FIN =====

export default PostThumbnail;
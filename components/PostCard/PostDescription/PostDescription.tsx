// import { Link } from "react-router-dom";
// ===== IA: INICIO =====
// IA: Se agregan React, StyleSheet y TouchableOpacity para reemplazar enlaces web y unificar la UI nativa.
import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
// ===== IA: FIN =====
import type { Post } from "../../../interfaces/Post";

const PostDescription = ({ post, variant }: { post: Post; variant: "feed" | "detail" }) => {
    // ===== IA: INICIO =====
    // IA: Obtención segura de la cantidad de comentarios para evitar errores en runtime si es undefined.
    const commentsCount = post.comments?.length || 0;
    // ===== IA: FIN =====

    return (
        // ===== IA: INICIO =====
        // IA: Rediseño visual integrando nombre de usuario y descripción en una única línea fluida, con botón discreto para ver comentarios.
        <View style={styles.container}>
            {/* Nombre de usuario + Descripción integrados en un solo bloque fluido */}
            {post.caption ? (
                <Text style={styles.captionText}>
                    <Text 
                        style={styles.username}
                        onPress={() => {
                            // Listo para conectar navegación al perfil: e.g. navigation.navigate('Profile', { profileId: post.profileId })
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
                        // Listo para conectar navegación al perfil en posts sin pie de foto
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
                        // Listo para navegar al detalle o modal de comentarios: e.g. navigation.navigate('PostDetail', { postId: post.id })
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
// import { Link } from "react-router-dom";
// ===== IA: INICIO =====
// IA: Se agregan componentes nativos de React Native (StyleSheet, Image, TouchableOpacity) para dar estructura visual estilo Instagram.
import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
// ===== IA: FIN =====
import type { Comment } from "../../../../interfaces/Comment";

const CommentItem = ({ comment }: { comment: Comment }) => {
    // ===== IA: INICIO =====
    // IA: Extracción segura de avatarUrl si estuviera presente en la interfaz Comment,
    // y generación de inicial como fallback visual.
    const avatarUrl = (comment as any)?.avatarUrl;
    const initial = comment.username ? comment.username.charAt(0).toUpperCase() : "?";
    // ===== IA: FIN =====

    return (
        // ===== IA: INICIO =====
        // IA: Rediseño del contenedor principal con fila flexible, avatar a la izquierda y texto fluido a la derecha.
        <View style={styles.container}>
            {/* Avatar o Avatar Placeholder */}
            <TouchableOpacity activeOpacity={0.8} style={styles.avatarContainer}>
                {avatarUrl ? (
                    <Image source={{ uri: avatarUrl }} style={styles.avatar} />
                ) : (
                    <View style={styles.avatarPlaceholder}>
                        <Text style={styles.avatarInitial}>{initial}</Text>
                    </View>
                )}
            </TouchableOpacity>

            {/* Bloque de texto con el nombre de usuario integrado en línea */}
            <View style={styles.contentContainer}>
                <Text style={styles.commentText}>
                    <Text 
                        style={styles.username}
                        onPress={() => {
                            // Listo para conectar navegación al perfil: e.g. navigation.navigate('Profile', { profileId: comment.profileId })
                        }}
                    >
                        {comment.username}
                    </Text>
                    {"  "}
                    {comment.text}
                </Text>
            </View>
        </View>
        // ===== IA: FIN =====
    )
}

// ===== IA: INICIO =====
// IA: Hoja de estilos con tipografía, márgenes y paleta de colores idéntica a Instagram y coherente con el componente Loading.
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
        paddingTop: 2, // Alineación fina con la parte superior del avatar
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
// ===== IA: FIN =====

export default CommentItem;
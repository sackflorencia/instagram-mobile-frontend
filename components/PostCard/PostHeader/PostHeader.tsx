// import { Link } from "react-router-dom";
// ===== IA: INICIO =====
// IA: Se agregan React, StyleSheet, TouchableOpacity y Feather para estructurar la cabecera e incorporar el botón de opciones.
import React from "react";
import { Image, Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
// ===== IA: FIN =====

const PostHeader = ({ username, profileId, avatar }: { username: string, profileId: string, avatar: string }) => {
    // ===== IA: INICIO =====
    // IA: Fallback de inicial por si el avatar no está definido.
    const initial = username ? username.charAt(0).toUpperCase() : "?";
    // ===== IA: FIN =====

    return (
        // ===== IA: INICIO =====
        // IA: Rediseño completo de la cabecera en fila horizontal con interacción táctil para el perfil y menú de opciones de la publicación.
        <View style={styles.container}>
            <TouchableOpacity 
                activeOpacity={0.7} 
                style={styles.userContainer}
                onPress={() => {
                    // Listo para conectar navegación al perfil: e.g. navigation.navigate('Profile', { profileId })
                }}
            >
                {/* Avatar con fallback en caso de no contar con URI de imagen */}
                <View style={styles.avatarContainer}>
                    {avatar ? (
                        <Image
                            source={{ uri: avatar }}
                            style={styles.avatar}
                            accessibilityLabel={username}
                        />
                    ) : (
                        <View style={styles.avatarPlaceholder}>
                            <Text style={styles.avatarInitial}>{initial}</Text>
                        </View>
                    )}
                </View>

                {/* Nombre de usuario */}
                <Text style={styles.username} numberOfLines={1}>
                    {username}
                </Text>
            </TouchableOpacity>

            {/* Icono de opciones (tres puntos horizontal) */}
            <TouchableOpacity hitSlop={8} style={styles.optionsButton}>
                <Feather name="more-horizontal" size={20} color="#262626" />
            </TouchableOpacity>
        </View>
        // ===== IA: FIN =====
    );
};

// ===== IA: INICIO =====
// IA: Hoja de estilos con espaciados y dimensiones alineadas al resto de componentes trabajados.
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
// ===== IA: FIN =====

export default PostHeader;
// ===== IA: INICIO =====
// IA: Se agregan React y StyleSheet para manejar la interfaz estilizada nativa.
import React, { useEffect, useState } from "react";
import { Text, View, Pressable, StyleSheet } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
// ===== IA: FIN =====

//el codigo fue hecho con ia pero le indicamos que utilizaa localStorage para
//guardar el estado de los likes y guardados
//tambien le agregue los iconos de react-icons para los botones buscando en las documentacion de react-icons
//https://react-icons.github.io/react-icons/icons/fa/
//https://react-icons.github.io/react-icons/icons/fi/

const PostActions = ({ postId, likes }: { postId: string, likes: number }) => {
    const [liked, setLiked] = useState(false);
    const [saved, setSaved] = useState(false);

    useEffect(() => {
        const loadState = async () => {
            const likedValue = await AsyncStorage.getItem(`liked-${postId}`);
            const savedValue = await AsyncStorage.getItem(`saved-${postId}`);

            setLiked(likedValue === "true");
            setSaved(savedValue === "true");
        };

        loadState();
    }, [postId]);

    const toggleLike = async () => {
        const newValue = !liked;

        setLiked(newValue);

        await AsyncStorage.setItem(
            `liked-${postId}`,
            String(newValue)
        );
    };

    const toggleSave = async () => {
        const newValue = !saved;
        setSaved(newValue);
        await AsyncStorage.setItem(
            `saved-${postId}`,
            String(newValue)
        );
    };

    // ===== IA: INICIO =====
    // IA: Variable computada para el total de likes.
    const totalLikes = likes + (liked ? 1 : 0);
    // ===== IA: FIN =====

    return (
        // ===== IA: INICIO =====
        // IA: Rediseño completo del maquetado de acciones con distribución flexible y respuesta táctil (hitSlop).
        <View style={styles.container}>
            <View style={styles.actionsRow}>
                {/* Grupo de acciones izquierdas: Like, Comentario, Compartir */}
                <View style={styles.leftActions}>
                    <Pressable 
                        onPress={toggleLike} 
                        hitSlop={8} 
                        style={styles.iconButton}
                    >
                        {liked ? (
                            <FontAwesome name="heart" size={24} color="#ED4956" />
                        ) : (
                            <FontAwesome name="heart-o" size={24} color="#262626" />
                        )}
                    </Pressable>

                    <Pressable 
                        hitSlop={8} 
                        style={styles.iconButton}
                    >
                        <FontAwesome name="comment-o" size={23} color="#262626" />
                    </Pressable>

                    <Pressable 
                        hitSlop={8} 
                        style={styles.iconButton}
                    >
                        <Feather name="send" size={22} color="#262626" />
                    </Pressable>
                </View>

                {/* Acción derecha: Guardar */}
                <Pressable 
                    onPress={toggleSave} 
                    hitSlop={8}
                >
                    {saved ? (
                        <FontAwesome name="bookmark" size={24} color="#262626" />
                    ) : (
                        <FontAwesome name="bookmark-o" size={24} color="#262626" />
                    )}
                </Pressable>
            </View>

            {/* Contador de likes */}
            <View style={styles.likesContainer}>
                <Text style={styles.likesText}>
                    {totalLikes.toLocaleString()} {totalLikes === 1 ? "like" : "likes"}
                </Text>
            </View>
        </View>
        // ===== IA: FIN =====
    );
};

// ===== IA: INICIO =====
// IA: Hoja de estilos del contenedor de acciones y contador de likes.
const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#FFFFFF",
        paddingTop: 10,
        paddingBottom: 4,
    },
    actionsRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 14,
        marginBottom: 8,
    },
    leftActions: {
        flexDirection: "row",
        alignItems: "center",
    },
    iconButton: {
        marginRight: 16,
    },
    likesContainer: {
        paddingHorizontal: 14,
    },
    likesText: {
        fontSize: 13.5,
        fontWeight: "600",
        color: "#262626",
    },
});
// ===== IA: FIN =====

export default PostActions;
// ===== IA: INICIO =====
// IA: Se agregan React, View, Text, StyleSheet y Feather para maquetar la grilla de 3 columnas con espaciado fino y estado vacío estilo Instagram.
import React from "react";
import { FlatList, View, Text, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
// ===== IA: FIN =====
import type { Post } from "../../interfaces/Post";
import PostThumbnail from "./PostThumbnail/PostThumbnail";

interface PostGridProps {
    posts: Post[];
}

const PostGrid = ({ posts }: PostGridProps) => {
    // ===== IA: INICIO =====
    // IA: Componente de estado vacío con icono estilizado para cuando la lista de publicaciones no contiene elementos.
    const renderEmptyComponent = () => (
        <View style={styles.emptyContainer}>
            <View style={styles.emptyIconContainer}>
                <Feather name="camera" size={32} color="#262626" />
            </View>
            <Text style={styles.emptyTitle}>Aún no hay publicaciones</Text>
        </View>
    );
    // ===== IA: FIN =====

    return (
        // ===== IA: INICIO =====
        // IA: Envoltorio del FlatList de 3 columnas con wrappers de ítem para garantizar márgenes finos exactos entre fotos.
        <View style={styles.container}>
            <FlatList
                data={posts}
                numColumns={3}
                keyExtractor={(post) => post.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.thumbnailWrapper}>
                        <PostThumbnail post={item} />
                    </View>
                )}
                ListEmptyComponent={renderEmptyComponent}
                contentContainerStyle={
                    !posts || posts.length === 0 
                        ? styles.emptyContentContainer 
                        : styles.gridContent
                }
                showsVerticalScrollIndicator={false}
            />
        </View>
        // ===== IA: FIN =====
    );
};

// ===== IA: INICIO =====
// IA: Hoja de estilos con cálculo de columnas de flexbox y separaciones micro-espaciadas.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    gridContent: {
        paddingBottom: 16,
    },
    thumbnailWrapper: {
        flex: 1 / 3,
        padding: 1, // Genera la separación micro de 1px a 2px entre miniaturas
    },
    emptyContentContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
        minHeight: 300,
    },
    emptyContainer: {
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 32,
    },
    emptyIconContainer: {
        width: 64,
        height: 64,
        borderRadius: 32,
        borderWidth: 2,
        borderColor: "#262626",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 16,
    },
    emptyTitle: {
        fontSize: 20,
        fontWeight: "700",
        color: "#262626",
        textAlign: "center",
    },
});
// ===== IA: FIN =====

export default PostGrid;
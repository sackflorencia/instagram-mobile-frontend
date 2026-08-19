/* MODIFICADO CON IA */

// ===== IA: INICIO =====
// IA: Se agregan FlatList, Text, StyleSheet para optimización de renderizado en React Native y gestión de estados vacíos.
import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";
// ===== IA: FIN =====
import type { Comment } from "../../../interfaces/Comment";
import CommentItem from "./CommentItem/CommentItem";

// ===== IA: INICIO =====
// IA: Tipado explícito de las props del componente.
interface CommentsListProps {
    comments: Comment[];
}
// ===== IA: FIN =====

const CommentsList = ({ comments }: CommentsListProps) => {
    // ===== IA: INICIO =====
    // IA: Componente para renderizar de forma limpia cuando la lista no tiene elementos.
    const renderEmptyComponent = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No hay comentarios aún</Text>
            <Text style={styles.emptySubtitle}>Iniciá la conversación dejando un comentario.</Text>
        </View>
    );
    // ===== IA: FIN =====

    return (
        // ===== IA: INICIO =====
        // IA: Se reemplaza la iteración con .map() dentro de un View por FlatList para lograr un rendimiento optimizado en mobile.
        <View style={styles.container}>
            <FlatList
                data={comments}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => <CommentItem comment={item} />}
                ListEmptyComponent={renderEmptyComponent}
                contentContainerStyle={
                    !comments || comments.length === 0 
                        ? styles.emptyContentContainer 
                        : styles.listContent
                }
                showsVerticalScrollIndicator={false}
            />
        </View>
        // ===== IA: FIN =====
    );
};

// ===== IA: INICIO =====
// IA: Estilos estructurados respetando la paleta de colores y espaciados de la aplicación.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFFF",
    },
    listContent: {
        paddingVertical: 8,
    },
    emptyContentContainer: {
        flexGrow: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    emptyContainer: {
        paddingHorizontal: 32,
        alignItems: "center",
        justifyContent: "center",
    },
    emptyTitle: {
        fontSize: 15,
        fontWeight: "600",
        color: "#262626",
        marginBottom: 4,
        textAlign: "center",
    },
    emptySubtitle: {
        fontSize: 13,
        color: "#8E8E8E",
        textAlign: "center",
    },
});
// ===== IA: FIN =====

export default CommentsList;
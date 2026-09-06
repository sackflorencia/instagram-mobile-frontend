import React from "react";
import { View, FlatList, Text, StyleSheet } from "react-native";

import type { Comment } from "../../../interfaces/Comment";
import CommentItem from "./CommentItem/CommentItem";


interface CommentsListProps {
    comments: Comment[];
}

const CommentsList = ({ comments }: CommentsListProps) => {
    const renderEmptyComponent = () => (
        <View style={styles.emptyContainer}>
            <Text style={styles.emptyTitle}>No hay comentarios aún</Text>
            <Text style={styles.emptySubtitle}>Iniciá la conversación dejando un comentario.</Text>
        </View>
    );

    return (
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
    );
};

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

export default CommentsList;
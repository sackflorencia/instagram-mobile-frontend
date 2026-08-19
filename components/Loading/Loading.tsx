// ===== IA: INICIO =====
// IA: Se importaron View, ActivityIndicator y StyleSheet para construir una UI estructurada.
import React from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
// ===== IA: FIN =====

const Loading = () => {
    return (
        // ===== IA: INICIO =====
        // IA: Se reemplazó el Text suelto por un View contenedor flexbox.
        // Se añadió el spinner nativo y se estilizó el texto original.
        <View style={styles.container}>
            <ActivityIndicator size="large" color="#262626" />
            <Text style={styles.text}>Loading...</Text>
        </View>
        // ===== IA: FIN =====
    )
}

// ===== IA: INICIO =====
// IA: Creación de la hoja de estilos para manejar la presentación inspirada en Instagram.
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFFFFF", 
    },
    text: {
        marginTop: 12,
        fontSize: 14,
        fontWeight: "500",
        color: "#8E8E8E", 
        letterSpacing: 0.3,
    }
});
// ===== IA: FIN =====

export default Loading;
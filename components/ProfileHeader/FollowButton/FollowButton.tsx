import { useEffect, useState } from "react";
import { Pressable, StyleSheet, Text } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const FollowButton = ({ profileId }: { profileId: string }) => {
    const [isFollowing, setIsFollowing] = useState(false);

    // Cargar el estado guardado al montar el componente o cambiar de perfil
    useEffect(() => {
        const loadFollowState = async () => {
            try {
                const savedValue = await AsyncStorage.getItem(`following-${profileId}`);
                setIsFollowing(savedValue === "true");
            } catch (error) {
                console.error("Error al cargar el estado de seguimiento", error);
            }
        };

        loadFollowState();
    }, [profileId]);

    // Cambiar y guardar el estado de seguimiento
    const handleClick = async () => {
        const newValue = !isFollowing;
        setIsFollowing(newValue);
        
        try {
            await AsyncStorage.setItem(`following-${profileId}`, String(newValue));
        } catch (error) {
            console.error("Error al guardar el estado de seguimiento", error);
        }
    };

    return (
        <Pressable
            onPress={handleClick}
            style={[
                styles.button,
                isFollowing ? styles.followingButton : styles.followButton,
            ]}
        >
            <Text
                style={[
                    styles.text,
                    isFollowing ? styles.followingText : styles.followText,
                ]}
            >
                {isFollowing ? "Following" : "Follow"}
            </Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    button: {
        flex: 1,
        paddingVertical: 5,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
    },
    // Estilo base para el texto del botón
    text: {
        fontSize: 14,
        fontWeight: "600",
    },
    // Estilo cuando NO lo sigues (Azul clásico de Instagram)
    followButton: {
        backgroundColor: "#0095f6",
    },
    followText: {
        color: "#fff",
    },
    // Estilo cuando YA lo sigues (Gris claro con borde sutil y texto negro)
    followingButton: {
        backgroundColor: "#ebebeb",
    },
    followingText: {
        color: "#000",
    },
});

export default FollowButton;
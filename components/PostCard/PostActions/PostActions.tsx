import { useEffect, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { FontAwesome, Feather } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

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
    return (
        <View>
            <View>
                <View>
                    <Pressable onPress={toggleLike}>
                        {liked ? (
                            <FontAwesome name="heart" size={24} />
                        ) : (
                            <FontAwesome name="heart-o" size={24} />
                        )}
                    </Pressable>

                    <Pressable>
                        <FontAwesome name="comment-o" size={24} />
                    </Pressable>

                    <Pressable>
                        <Feather name="send" size={24} />
                    </Pressable>
                </View>

                <Pressable onPress={toggleSave}>
                    {saved ? (
                        <FontAwesome name="bookmark" size={24} />
                    ) : (
                        <FontAwesome name="bookmark-o" size={24} />
                    )}
                </Pressable>
            </View>

            <View>
                <Text>{likes + (liked ? 1 : 0)} likes</Text>
            </View>
        </View>
    );
};

export default PostActions;
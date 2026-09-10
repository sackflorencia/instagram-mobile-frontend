import { useCallback, useState } from "react";
import { useFocusEffect } from "expo-router";
import PostsList from "../../components/PostList/PostList";
import type { Post } from "../../interfaces/Post";
import { characterToPost } from "../../mappers/characterMapper";
import { getCharacters } from "../../services/hpAPI";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { View } from "react-native";

const FeedPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const insets = useSafeAreaInsets();
  useFocusEffect(
    useCallback(() => {
      async function loadPosts() {
        try {
          const characters = await getCharacters();

          const posts = characters
            .filter(character => character.house && character.image)
            .map(characterToPost);

          setPosts(posts);
        } catch (error) {
          console.error(error);
        }
      }

      loadPosts();
    }, [])
  );

  return (
    <View
  style={{
    flex: 1,
    paddingTop: insets.top,
  }}
>

      <PostsList posts={posts} />
    </View>
  );
};

export default FeedPage;
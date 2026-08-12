import { useEffect, useState } from "react";
import { View } from "react-native";
import PostsList from "../../components/PostList/PostList";
import type { Post } from "../../interfaces/Post";
import { characterToPost } from "../../mappers/characterMapper";
import { getCharacters } from "../../services/hpAPI";
import { SafeAreaView } from "react-native-safe-area-context";


const FeedPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
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
  }, []);

  return (
    <SafeAreaView>
      <PostsList posts={posts} />
    </SafeAreaView>
  )
}

export default FeedPage;
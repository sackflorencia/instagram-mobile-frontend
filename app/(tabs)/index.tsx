import { useEffect, useState } from "react";
import { View } from "react-native";
import type { Post } from "../../interfaces/Post";
import { getCharacters } from "../../services/hpAPI";
import { characterToPost } from "../../mappers/characterMapper";
import PostsList from "../../components/PostsList";
import type { Profile } from "../../interfaces/Profile";
import { houseToProfile } from "../../mappers/houseMapper";
import { HOUSES } from "../../constants/houses";
import './FeedPage.css';


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
    <View>
      <PostsList posts={posts} />
    </View>
  )
}

export default FeedPage;
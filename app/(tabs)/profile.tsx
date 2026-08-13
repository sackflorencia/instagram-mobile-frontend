import { useEffect, useState } from "react";
import type { Profile } from "../../interfaces/Profile";
import type { Post } from "../../interfaces/Post";
import { characterToPost } from "../../mappers/characterMapper";
import { houseToProfile } from "../../mappers/houseMapper";
import { getHouseCharacters } from "../../services/hpAPI";
import { useLocalSearchParams } from "expo-router";
import { MY_HOUSE } from "../../constants/profile";
import PostGrid from "../../components/PostGrid/PostGrid";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Loading from "../../components/Loading/Loading";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const ProfileScreen = () => {
    const { house } = useLocalSearchParams<{ house: string }>();
    const isOwnProfile = house === "me";
    const realHouse = isOwnProfile ? MY_HOUSE : house ?? "";
    const [posts, setPosts] = useState<Post[]>([]);
    const [profile, setProfile] = useState<Profile | null>(null);
    useEffect(() => {
        async function loadProfile() {
            const characters =
                await getHouseCharacters(realHouse);

            const posts = characters
                .filter(character => character.image)
                .map(characterToPost);

            setPosts(posts);

            const profile =
                houseToProfile(
                    realHouse,
                    posts.length
                );

            setProfile(profile);
        }

        loadProfile();
    }, [realHouse]);
    if (!profile) {
        return <Loading />;
    }

    return (
        <SafeAreaView>
            <View>
                <ProfileHeader profile={profile} isOwnProfile={isOwnProfile} />
                <View/>
                <PostGrid posts={posts} />
            </View>
        </SafeAreaView>
    )
}

export default ProfileScreen
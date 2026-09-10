import type { Profile } from "../../interfaces/Profile";
import type { Post } from "../../interfaces/Post";
import { characterToPost } from "../../mappers/characterMapper";
import { houseToProfile } from "../../mappers/houseMapper";
import { getHouseCharacters } from "../../services/hpAPI";
import { MY_HOUSE } from "../../constants/profile";
import PostGrid from "../../components/PostGrid/PostGrid";
import ProfileHeader from "../../components/ProfileHeader/ProfileHeader";
import Loading from "../../components/Loading/Loading";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useCallback, useState } from "react";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
const ProfileScreen = () => {
    const { house } = useLocalSearchParams<{ house: string }>();
    const isOwnProfile = house === "me";
    const realHouse = isOwnProfile ? MY_HOUSE : house ?? "";
    const [posts, setPosts] = useState<Post[]>([]);
    const [profile, setProfile] = useState<Profile | null>(null);
    const insets = useSafeAreaInsets();
    useFocusEffect(
        useCallback(() => {
            setProfile(null);

            async function loadProfile() {
                console.log("========== PROFILE ==========");
                console.log("house:", house);
                console.log("realHouse:", realHouse);

                try {
                    const characters = await getHouseCharacters(realHouse);
                    console.log("characters length:", characters.length);

                    const posts = characters
                        .filter(character => character.image)
                        .map(characterToPost);

                    console.log("posts length:", posts.length);

                    const profile = houseToProfile(
                        realHouse,
                        posts.length
                    );

                    console.log("profile:", profile);

                    setPosts(posts);
                    setProfile(profile);

                } catch (error) {
                    console.error("PROFILE ERROR:", error);
                }
            }

            loadProfile();
        }, [realHouse])
    );
    if (!profile) {
        return <Loading />;
    }

    return (
        <View
            style={{
                flex: 1,
                paddingTop: insets.top,
            }}
        >
            <ProfileHeader
                profile={profile}
                isOwnProfile={isOwnProfile}
            />

            <PostGrid posts={posts} />
        </View>
    )
}

export default ProfileScreen
import type { Profile } from "../../interfaces/Profile";
import FollowButton from "./FollowButton/FollowButton";
import ProfileStats from "./ProfileStats/ProfileStats";
import { Image, Pressable, Text, View } from "react-native";

// la base de profile header la hice yo pero la parte de followbutton dependiendo de 
// si es mi perfil no, chatgpt
const ProfileHeader = ({profile, isOwnProfile}: {profile: Profile; isOwnProfile: boolean}) => {
    return (
        <View>
            <View>
                <Image 
                    source={profile.avatar} 
                    alt={`${profile.name}'s avatar`} 
                />
            </View>

            <View >
                
                <View>
                    <Text>{profile.name}</Text>
                    <View >
                        {isOwnProfile ? (
                            <Text>Edit Profile</Text>
                        ) : (
                            <FollowButton profileId={profile.id} />
                        )}
                    </View>
                </View>

                <View>
                    <ProfileStats 
                        followers={profile.followers} 
                        following={profile.following} 
                        posts={profile.postsCount} 
                    />
                </View>

                <View >
                    <Text>{profile.bio}</Text>
                </View>

            </View>
        </View>
    )
}
export default ProfileHeader;
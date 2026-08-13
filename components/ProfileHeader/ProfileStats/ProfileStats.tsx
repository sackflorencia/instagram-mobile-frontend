import { View } from "react-native";
import StatItem from "./StatItem/StatItem";

const ProfileStats = ({ followers, following, posts }: { followers: number; following: number; posts: number }) => {
    return (
        <View>
            <StatItem label=" posts" value={posts} />
            <StatItem label=" followers" value={followers} />
            <StatItem label=" following" value={following} />
        </View>
    )
}
export default ProfileStats;
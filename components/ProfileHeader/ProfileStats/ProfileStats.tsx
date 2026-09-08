import { StyleSheet, View } from "react-native";
import StatItem from "./StatItem/StatItem";

const ProfileStats = ({ followers, following, posts }: { followers: number; following: number; posts: number }) => {
    return (
        <View style={styles.container}>
            <StatItem label="posts" value={posts} />
            <StatItem label="seguidores" value={followers} />
            <StatItem label="siguiendo" value={following} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
    },
});

export default ProfileStats;
// import { Link } from "react-router-dom";
import { Image, Text, View } from "react-native";
const PostHeader = ({ username, profileId, avatar }: { username: string, profileId: string, avatar: string }) => {
    return (
        <View>
            {/* <Link to={`/profile/${profileId}`} className="post-header-link"> */}
                {/* Agregué este div para el avatar que pide Figma */}
                <View >
                    <Image
                        source={{uri: avatar}}
                        alt={username}
                        
                    />
                </View>
                <Text>{username}</Text>
            {/* </Link> */}
        </View>
    )
}
export default PostHeader;
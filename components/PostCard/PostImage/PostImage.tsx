import { Image, View } from "react-native";

const PostImage = ({ image }: { image: string }) => {

    return (
        <View>
            <Image
                source={{ uri: image }}
                style={{
                    width: "100%",
                    aspectRatio: 1,
                }}
            />
        </View>
    );
};

export default PostImage;
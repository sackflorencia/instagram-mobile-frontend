// import { Link } from "react-router-dom";
import { Text, View } from "react-native";
import type { Comment } from "../../../../interfaces/Comment";


const CommentItem = ({ comment }: { comment: Comment }) => {
    return (
        <View className="comment-item-container">
            {/* <Link to={`/profile/${comment.profileId}`} className="comment-item-user"> */}
                <Text>{comment.username}</Text>
            {/* </Link> */}
            <Text className="comment-item-text">{comment.text}</Text>
        </View>
    )
}
export default CommentItem;
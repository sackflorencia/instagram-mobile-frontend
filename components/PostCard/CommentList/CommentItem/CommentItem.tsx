// import { Link } from "react-router-dom";
import { Text, View } from "react-native";
import type { Comment } from "../../../../interfaces/Comment";


const CommentItem = ({ comment }: { comment: Comment }) => {
    return (
        <View>
            {/* <Link to={`/profile/${comment.profileId}`} className="comment-item-user"> */}
                <Text>{comment.username}</Text>
            {/* </Link> */}
            <Text >{comment.text}</Text>
        </View>
    )
}
export default CommentItem;
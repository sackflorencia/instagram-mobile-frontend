/* MODIFICADO CON IA */

import { View } from "react-native";
import type { Comment } from "../../../interfaces/Comment";
import CommentItem from "./CommentItem/CommentItem";
import "./CommentsList.css";

const CommentsList = ({comments}: {comments: Comment[]}) => {
    return (
        <View>
            {comments.map((comment) => (
                <CommentItem key={comment.id} comment={comment} />
            ))}
        </View>
    )
}
export default CommentsList;
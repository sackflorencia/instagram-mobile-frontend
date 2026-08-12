// import type { Post } from "../../interfaces/Post";
// import PostHeader from "./PostHeader";
// import PostImage from "./PostImage";
// import PostActions from "./PostActions";
// import PostDescription from "./PostDescription";
// import CommentsList from "./CommentsList";
// import { View } from "react-native";

// interface PostCardProps {
//     post: Post;
//     variant: "feed" | "detail";
// }

// /* modificado con ia */
// const PostCard = ({ post, variant }: PostCardProps) => {

//     if (variant === "detail") {
//         return (
//             <View>
//                 <View>
//                     <PostImage image= { post.image } />
//                 </View>

//             <View>
//     <View>
//         <PostHeader
//             username={post.username}
//             profileId={post.profileId}
//             avatar={post.avatar}
//         />
//     </View>

//     <View>
//         <PostDescription post={post} variant={variant} />
//         <CommentsList comments={post.comments} />
//     </View>

//     <View>
//         <PostActions postId={post.id} likes={post.likes} />
//     </View>
// </View>
//         );
//     }
// return (
//     <View>
//         <PostHeader
//             username={post.username}
//             profileId={post.profileId}
//             avatar={post.avatar}
//         />

//         <PostImage image={post.image} />

//         <PostActions
//             postId={post.id}
//             likes={post.likes}
//         />

//         <PostDescription
//             post={post}
//             variant={variant}
//         />
//     </View>
// );
// }

// export default PostCard;
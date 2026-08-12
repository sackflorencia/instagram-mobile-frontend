import type { Post } from "../interfaces/Post";
import PostCard from "PostCard";

const PostsList = ({ posts }: { posts: Post[] }) =>{
    return (
        <>
        {posts.map(post => (
            <PostCard key={post.id} post={post} variant="feed"/>
        ))}
        </>
    )
}
export default PostsList;
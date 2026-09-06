import type { Comment } from "./Comment";
export interface Post {
  id: string;
  profileId: string;
  username: string;
  image: string;
  caption: string;
  likes: number;
  comments: Comment[];
  commentCount: number;
  avatar : string;
}
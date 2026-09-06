import type { ImageSourcePropType } from "react-native";
export interface Profile {
  id: string;
  username: string;
  name: string;
  bio: string;
  avatar: ImageSourcePropType;
  followers: number;
  following: number;
  postsCount: number;
}
import type { Character } from "../interfaces/Character";
import type { Post } from "../interfaces/Post";
import { generateComments } from "./commentMapper";
import { houseToProfile } from "./houseMapper";

export function characterToPost(
  character: Character
): Post {
  const comments = generateComments(character.id);
  const profile =
    houseToProfile(
      character.house.toLowerCase(),
      0
    );
  return {
    id: character.id,
    username: character.house,
    profileId: character.house.toLowerCase(),
    image: character.image,
    caption: `${character.name} repressenting ${character.house}`,
    likes: Math.floor(Math.random() * 1000),
    comments: comments,
    commentCount: comments.length,
    avatar: profile.avatar
  };
}
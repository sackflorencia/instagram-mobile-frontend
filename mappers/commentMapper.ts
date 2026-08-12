import { HOUSES } from "../constants/houses";
import { COMMENT_TEXTS } from "../constants/comments";
import type { Comment } from "../interfaces/Comment";

const randomFromArray = <T>(array: readonly T[]): T => {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
};

export const generateComments = (
    postId: string
): Comment[] => {

    const comments: Comment[] = [];

    const commentsCount =
        Math.floor(Math.random() * 5) + 1;

    for (let i = 0; i < commentsCount; i++) {
        const house = randomFromArray(HOUSES);
        const text = randomFromArray(COMMENT_TEXTS);
        comments.push({
            id: `${postId}-${i}`,
            profileId: house.id,
            username: house.name,
            text,
        });
    }

    return comments;
};
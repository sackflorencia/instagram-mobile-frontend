import type { Profile } from "../interfaces/Profile";
import { HOUSES } from "../constants/houses";
import {HOUSE_STATS} from "../constants/houseStats";

export function houseToProfile(
    houseId: string,
    postsCount: number
): Profile {
    const house = HOUSES.find(
        house => house.id === houseId
    );

    if (!house) {
        throw new Error("House not found");
    }

    return {
        id: house.id,
        username: house.name.toLowerCase(),
        name: house.name,
        avatar: HOUSE_STATS[house.id].avatar,

        bio: HOUSE_STATS[house.id].bio,

        followers: HOUSE_STATS[house.id].followers,

        following: HOUSE_STATS[house.id].following,

        postsCount,
    };
}
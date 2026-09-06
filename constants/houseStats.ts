const houseAvatars = {
  gryffindorAvatar: require("../assets/houses/gryffindor.png"),
  slytherinAvatar: require("../assets/houses/slytherin.png"),
  hufflepuffAvatar: require("../assets/houses/hufflepuff.png"),
  ravenclawAvatar: require("../assets/houses/ravenclaw.png"),
};

export const HOUSE_STATS = {
  gryffindor: {
    avatar: houseAvatars.gryffindorAvatar,
    bio: "Home of the brave.",
    followers: 5230,
    following: 134,
  },

  slytherin: {
    avatar: houseAvatars.slytherinAvatar,
    bio: "Ambition and cunning.",
    followers: 4890,
    following: 98,
  },

  hufflepuff: {
    avatar: houseAvatars.hufflepuffAvatar,
    bio: "Loyal and hardworking.",
    followers: 4120,
    following: 120,
  },

  ravenclaw: {
    avatar: houseAvatars.ravenclawAvatar,
    bio: "Wit and wisdom.",
    followers: 4380,
    following: 110,
  },
} as const;
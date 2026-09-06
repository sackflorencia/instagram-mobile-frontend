import type { Character } from "../interfaces/Character";

export async function getCharacters(): Promise<Character[]> {
  const response = await fetch(
    "https://hp-api.onrender.com/api/characters"
  );
  return response.json();
}

export async function getHouseCharacters(
  house: string
): Promise<Character[]> {
  const response = await fetch(
    `https://hp-api.onrender.com/api/characters/house/${house}`
  );
  return response.json();
}
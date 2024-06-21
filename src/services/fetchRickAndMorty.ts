import type { APIResult, Character } from "../models/apiRickAndMorty.model";

export const fetchAPI = async (page: number) => {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`
  );
  const data: APIResult = await res.json();
  return data;
};

export const getCharacter = async (id: number) => {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const data: Character = await res.json();
  return data;
};

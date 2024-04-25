"use server";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=7&order=popularity`
  );

  const data = await response.json();

  console.log(data);

  return data.map((item: AnimeProp, index: number) => (
    <AnimeCard key={item.id} anime={item} index={index} />
  ));
};

export const fetchCharacter = async (id: number) => {
  const response = await fetch(`https://shikimori.one/api/characters/${id}`);

  const data = await response.json();

  console.log(data);

  // return data.map((item: AnimeProp, index: number) => (
  //   <AnimeCard key={item.id} anime={item} index={index} />
  // ));
};

// export const fetchManga = async (page: number) => {
//   const response = await fetch(
//     `https://shikimori.one/api/mangas?page${page}&order=popularity`
//   );

//   const data = await response.json();

//   console.log(data);
// };

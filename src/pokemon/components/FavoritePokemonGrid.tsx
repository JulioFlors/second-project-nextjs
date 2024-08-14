'use client';

import { PokemonGrid } from "@/pokemon";
import { IoHeart } from "react-icons/io5";
import { usePokemonStore } from '@/stores';

export const FavoritePokemonGrid = () => {
  const favoriteList = usePokemonStore(state => (state.favorites))
  const pokemonList = Object.values(favoriteList);

  return (
    <>
      {
        pokemonList.length === 0
          ? (<NoFavorites />)
          : (<PokemonGrid pokemonList={pokemonList} />)
      }
    </>
  )
}

export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50vh] items-center justify-center ">
      <IoHeart size={100} className="text-pink-800" />
      <span>No hay favoritos</span>
    </div>
  )
}
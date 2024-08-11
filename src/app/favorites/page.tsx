import { PokemonGrid } from "@/pokemon";
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Favoritos',
  description: 'GlobalState',
};

export default async function FavoritesPage() {
  return (
    <div className="flex flex-col p-3">

      <div className="Flex font-flexo text-gray-800">
        <small > Global State </small>
        <span className="font-semibold">Pokémon Favorites</span>
      </div>

      <PokemonGrid pokemonList={[]} />

    </div>
  );
}
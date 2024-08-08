import { PokemonCard, SimplePokemon } from '@/pokemon';
interface Props {
  pokemonList: SimplePokemon[];
}

export const PokemonGrid = ({ pokemonList }: Props) => {
  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3">
      {
        pokemonList.map(pokemon => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))
      }
    </section>
  )
}
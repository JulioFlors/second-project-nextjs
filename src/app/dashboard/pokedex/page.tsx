import { PokemonGrid, PokemonResponse, SimplePokemon } from '@/pokemon'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'static Pokémon List',
  description: 'static Pokédex',
};

const getPokemonList = async (limit = 20, offset = 0): Promise<SimplePokemon[]> => {
  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
    .then(res => res.json())
  const pokemonList = data.results.map(pokemon => ({
    id: pokemon.url.split('/').at(-2)!,
    name: pokemon.name
  }))

  //throw new Error('Esto es un Error del Servidor')
  //throw notFound();

  return pokemonList
}

export default async function PokedexPage() {

  const pokemonList = await getPokemonList(151)
  return (
    <div className='flex flex-col p-3'>

      <div className="Flex font-flexo text-gray-800">
        <small > static </small>
        <span className="font-semibold">Pokémon List</span>
      </div>

      <PokemonGrid pokemonList={pokemonList} />
    </div>
  )
}
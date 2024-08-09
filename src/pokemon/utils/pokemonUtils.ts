import { Pokedex, Pagination } from '@/pokemon';

export const formatPokemonId = (id: string): String => {
  return (parseInt(id) <= 9 ? `N.º 000${id}` : parseInt(id) <= 99 ? `N.º 00${id}` : `N.º 0${id}`)
}

export const capitalizeName = (name: string): String => {
  return name.charAt(0).toUpperCase() + name.slice(1);
}

export const fetchPokemonById = async (id: string): Promise<Pokedex> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {
    /* cache: 'force-cache', */
    next: {
      revalidate: 60 * 60 * 30 * 6
    }
  }).then(resp => resp.json())

  console.log(`The ${pokemon.name} data is loaded`);
  return pokemon
}

export const fetchPokemonByName = async (name: string): Promise<Pokedex> => {
  const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`, {
    /* cache: 'force-cache', */
    next: {
      revalidate: 60 * 60 * 30 * 6
    }
  }).then(resp => resp.json())

  console.log(`The ${pokemon.name} data is loaded`);
  return pokemon
}

export const getPokemon = async (slug: string): Promise<Pokedex> => {
  const isNumeric = /^\d+$/.test(slug);

  const pokemon = isNumeric
    ? await fetchPokemonById(slug)
    : await fetchPokemonByName(slug);

  return pokemon
}

export const pokedexPagination = async (id: number, limit: number): Promise<Pagination> => {
  try {
    const prevId = id === 1 ? limit : id - 1;
    const nextId = id === limit ? 1 : id + 1;

    const prevPokemon = await fetchPokemonById(prevId.toString());
    const nextPokemon = await fetchPokemonById(nextId.toString());

    return { prevPokemon, nextPokemon };
  } catch (error) {
    throw new Error('Ha ocurrido un Error en la funcion pokedexPagination')
  }
};
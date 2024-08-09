import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { GrFormPrevious, GrFormNext } from "react-icons/gr";
import { capitalizeName, formatPokemonId, getPokemon, SetPokedexUrl, pokedexPagination, PokemonResponse } from '@/pokemon';


interface Props {
  params: { slug: string }
}

const LIMIT_POKEMON = 1025;
const LIMIT_STATIC = 151;

export async function generateStaticParams() {

  const STATIC_ID = Array.from({ length: LIMIT_STATIC }).map((_, i) => `${i + 1}`);

  const data: PokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT_STATIC}`)
    .then(res => res.json());

  const STATIC_NAME = data.results.map(pokemon => (pokemon.name));

  const STATIC_POKEMON = [...STATIC_ID, ...STATIC_NAME]

  console.log(STATIC_POKEMON);

  return STATIC_POKEMON.map(slug => ({
    slug: slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  try {
    const pokemon = await getPokemon(params.slug);
    return {
      title: `${formatPokemonId(pokemon.id.toString())} - ${capitalizeName(pokemon.name)}`,
      description: `Pagina que proporciona informacion detallada sobre el pokemon [${pokemon.name}] en especifico`
    }
  } catch (error) {
    return {
      title: 'Pokémon Details',
      description: 'Pagina que proporciona informacion detallada sobre un pokemon en especifico'
    }
  }
}

export default async function PokemonPage({ params }: Props) {
  try {
    const pokemon = await getPokemon(params.slug);
    const { prevPokemon, nextPokemon } = await pokedexPagination(pokemon.id, LIMIT_POKEMON)

    return (
      <>
        <SetPokedexUrl pokemon={pokemon} />

        <section className="flex mt-5 flex-col items-center text-slate-800">
          <div className="relative flex flex-col items-center rounded-[20px] w-[700px] mx-auto bg-white bg-clip-border  shadow-lg  p-3">


            <div className="mt-2 mb-8 w-full">

              <div className="flex w-full justify-between font-flexo font-semibold ">
                <Link href={`/dashboard/pokedex/${prevPokemon.name}`}>
                  <div className="flex items-center">
                    <GrFormPrevious className='mr-2' />
                    <span className="text-gray-500 mr-2">{formatPokemonId(prevPokemon.id.toString())}</span>
                    <span >{capitalizeName(prevPokemon.name)}</span>
                  </div>
                </Link>

                <Link href={`/dashboard/pokedex/${nextPokemon.name}`}>
                  <div className="flex items-center">
                    <span >{capitalizeName(nextPokemon.name)}</span>
                    <span className="text-gray-500 ml-2">{formatPokemonId(nextPokemon.id.toString())}</span>
                    <GrFormNext className='ml-2' />
                  </div>
                </Link>
              </div>


              <header className="flex items-center justify-center bg-gray-100 rounded-md p-2">
                <Image
                  alt={`official-artwork ${pokemon.name}`}
                  height={250}
                  priority={false}
                  src={pokemon.sprites.other?.['official-artwork'].front_default ?? ''}
                  width={250}
                />
              </header>
              <h1 className="px-2 text-xl font-flexo font-medium flex justify-center" >
                {capitalizeName(pokemon.name)}
                <span className="text-gray-500 ml-2">{formatPokemonId(pokemon.id.toString())}</span>
              </h1>
            </div>

            <div className="grid grid-cols-2 gap-4 px-2 w-full">

              <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
                <p className="text-sm text-gray-600">Types</p>
                <div className="text-base font-medium text-navy-700 flex">
                  {
                    pokemon.types.map(type => (
                      <p key={type.slot} className="mr-2 capitalize">{type.type.name}</p>
                    ))
                  }
                </div>
              </div>

              <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg ">
                <p className="text-sm text-gray-600">Peso</p>
                <span className="text-base font-medium text-navy-700 flex">
                  {
                    pokemon.weight
                  }
                </span>
              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
                <p className="text-sm text-gray-600">Regular Sprites</p>
                <div className="flex justify-center">

                  <Image
                    src={pokemon.sprites.front_default}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon.name}`}
                  />

                  <Image
                    src={pokemon.sprites.back_default}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon.name}`}
                  />

                </div>
              </div>

              <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4  drop-shadow-lg">
                <p className="text-sm text-gray-600">Shiny Sprites</p>
                <div className="flex justify-center">

                  <Image
                    src={pokemon.sprites.front_shiny}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon.name}`}
                  />

                  <Image
                    src={pokemon.sprites.back_shiny}
                    width={100}
                    height={100}
                    alt={`sprite ${pokemon.name}`}
                  />

                </div>
              </div>



            </div>
          </div>
        </section >
      </>
    );
  } catch (error) {
    console.log(error);
    notFound();
  }
}
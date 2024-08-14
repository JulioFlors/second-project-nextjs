'use client';

import Link from 'next/link';
import Image from 'next/image';
import { formatPokemonId, SimplePokemon } from '@/pokemon';
import { IoHeart, IoHeartOutline } from "react-icons/io5";
import { usePokemonStore } from '@/stores';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon
  const isFavorite = usePokemonStore(state => (!!state.favorites[id]));
  const onToggle = usePokemonStore(state => state.toggleFavorite)

  return (

    <article className='flex flex-col hover:scale-105 transition duration-500'>
      <Link href={`/pokedex/${name}`}>
        <header className="flex items-center justify-center bg-gray-100 rounded-md p-2 cursor-pointer">
          <Image
            alt={`official-artwork ${name}`}
            height={350}
            key={id}
            priority={false}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            width={350}
          />
        </header>
      </Link>

      <div className="px-3 text-left select-none">

        <div className='flex items-center justify-between'>
          <Link href={`/pokedex/${name}`}>
            <span
              className="flex-initial py-2 font-flexo font-semibold text-gray-400 sm:text-xs md:text-xs lg:text-xs xl:text-xs cursor-pointer">
              {formatPokemonId(id)}
            </span>
          </Link>
          <div
            onClick={() => onToggle(pokemon)}
            className="text-rose-800 z-50 hover:scale-150 transition duration-500 cursor-pointer">
            {
              isFavorite
                ? (<IoHeart size={15} />)
                : (<IoHeartOutline size={15} />)
            }
          </div>
        </div>
        <Link href={`/pokedex/${name}`}>
          <h2 className="flex-initial font-flexo font-medium text-gray-800 text-lg capitalize cursor-pointer">
            {name}
          </h2>
        </Link>
      </div>

    </article >


  )
}
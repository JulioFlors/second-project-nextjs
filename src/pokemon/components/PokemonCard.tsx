import Link from 'next/link';
import Image from 'next/image';
import { formatPokemonId, SimplePokemon } from '@/pokemon';

interface Props {
  pokemon: SimplePokemon;
}

export const PokemonCard = ({ pokemon }: Props) => {
  const { id, name } = pokemon

  return (
    <Link href={`/dashboard/pokedex/${name}`}>
      <article className='flex flex-col hover:scale-105 transition duration-500 cursor-pointer'>

        <header className="flex items-center justify-center bg-gray-100 rounded-md p-2">
          <Image
            alt={`official-artwork ${name}`}
            height={350}
            key={id}
            priority={false}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
            width={350}
          />
        </header>

        <div className="px-3 text-left select-none">
          <span
            className="flex-initial my-1 py-2 font-flexo font-semibold text-gray-400 sm:text-xs md:text-xs lg:text-xs xl:text-xs">
            {formatPokemonId(id)}
          </span>

          <h2 className="flex-initial py-2 font-flexo font-medium text-gray-800 text-lg capitalize">
            {name}
          </h2>
        </div>

      </article>
    </Link>
  )
}
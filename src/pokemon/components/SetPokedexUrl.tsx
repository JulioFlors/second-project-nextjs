'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { Pokedex } from '@/pokemon';

interface Props {
  pokemon: Pokedex;
}

export const SetPokedexUrl = ({ pokemon }: Props) => {
  const router = useRouter();

  useEffect(() => {
    router.push(`/dashboard/pokedex/${pokemon.name}`);
  }, [pokemon.name]); // Depende de pokemon.name para que se ejecute solo cuando cambie

  return null; // No renderizamos nada, ya que solo queremos redirigir
};

import { SimplePokemon } from '@/pokemon'
import { create, type StateCreator } from 'zustand'
import { devtools, persist } from 'zustand/middleware';

/* 
  favorites: {
    '1': { id: '1', name: 'Bulbasaur' },
    '54': { id: '54', name: 'Psyduck' },
    '94': { id: '94', name: 'Gengar' },
    '130': { id: '130', name: 'Gyarados' },
    '143': { id: '143', name: 'Snorlax' },
  },
*/

interface PokemonState {
  favorites: { [key: string]: SimplePokemon },

  toggleFavorite: (pokemon: SimplePokemon) => void;
}

const storeApi: StateCreator<PokemonState, [["zustand/devtools", never]]> = (set) => ({
  favorites: {
    '1': { id: '1', name: 'Bulbasaur' },
    '54': { id: '54', name: 'Psyduck' },
    '94': { id: '94', name: 'Gengar' },
    '130': { id: '130', name: 'Gyarados' },
    '143': { id: '143', name: 'Snorlax' },
  },

  // Esta version de la funcion muta el estado, dejando basura.
  // esta es la estructura sacada de la documentacion de Zustand
  /*   toggleFavorite: (pokemon: SimplePokemon) => {
      const { id } = pokemon;
      set((state) => ({
        favorites: { ...state.favorites },
        [id]: !!state.favorites[id] ? delete state.favorites[id] : state.favorites[id] = pokemon,
      }), false, 'toggleFavorite');
    }, */

  toggleFavorite: (pokemon: SimplePokemon) =>
    set((state) => {
      const { id } = pokemon;
      const favorites = { ...state.favorites };

      if (!!favorites[id]) {
        delete favorites[id];
      } else {
        favorites[id] = pokemon;
      }

      return { favorites: favorites };
    }, false, 'toggleFavorite'),


})




export const usePokemonStore = create<PokemonState>()(
  devtools(
    persist(
      storeApi,
      { name: 'pokemon-store' }
    )
  )
) 
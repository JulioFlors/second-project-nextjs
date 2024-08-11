'use client';
import { useCounterStore } from '@/store';
import { useEffect } from 'react';

interface Props {
  value?: number
}

export interface CounterResponse {
  count: number;
  method: string;
}

const getApiCounter = async (): Promise<CounterResponse> => {
  const data = await fetch('/api/counter')
    .then(res => res.json());
  return data
}

export const CartCounter = ({ value = 0 }: Props) => {

  const count = useCounterStore(state => (state.count))
  const increase = useCounterStore(state => (state.increase))
  const initCount = useCounterStore(state => (state.initCountState))

  useEffect(() => {
    getApiCounter()
      .then(({ count }) => initCount(count))
  }, [])

  /* Inicializa el contador desde el valor defaulf del estado
     useEffect(() => {
      initCount(value)
    }, [value]) 
    */
  const isDisabled = count <= 0

  return (
    <>
      <span className="text-9xl">{count}</span>

      <div className="flex">
        <button
          disabled={isDisabled}
          onClick={() => increase(- 1)}
          className={`flex items-center justify-center p-2 rounded-lg bg-gray-900 text-white hover:opacity-80 transition-all w-[100px] mr-2 ${isDisabled ? 'opacity-80' : ''}`}>
          -1
        </button>
        <button
          onClick={() => increase(+ 1)}
          className='flex items-center justify-center p-2 rounded-lg bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2'>
          +1
        </button>
      </div>
    </>
  )
}
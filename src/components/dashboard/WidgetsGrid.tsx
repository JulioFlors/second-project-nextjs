'use client';

import { IoCartOutline } from "react-icons/io5"
import { SimpleWidget } from "./SimpleWidget"
import { useCounterStore } from '@/stores';


export const WidgetsGrid = () => {

  const count = useCounterStore(state => (state.count))

  return (
    <div className="flex flex-wrap p-2 items-center justify-center">
      <SimpleWidget
        title={`${count}`}
        subTitle="Productos agregados"
        label="Contador"
        icon={<IoCartOutline size={70} className="text-green-600" />}
        href="/counter"
      />
    </div>
  )
}
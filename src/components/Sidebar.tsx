import Link from 'next/link';
import Image from 'next/image'
import { TbPokeball } from 'react-icons/tb';
import { SidebarMenuItem } from './SidebarMenuItem';
import { IoBrowsersOutline, IoCalculator } from 'react-icons/io5';
import { ImLeaf } from "react-icons/im";

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subTitle: 'Visualización',
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subTitle: 'Contador Client Side',
  },
  {
    path: '/dashboard/pokedex',
    icon: <TbPokeball size={40} />,
    title: 'Pokédex',
    subTitle: 'Generacion estatica',
  }
]

export const Sidebar = () => {
  return (
    <div
      id="menu"
      className="bg-gray-900 min-h-screen z-10 text-slate-300 left-0 overflow-auto w-80">

      <div id="logo" className="my-4 px-6">
        <h1 className="flex items-center text-lg md:text-2xl font-bold text-green-500 ">
          <span>Vivero</span>
          <span className="text-white">Online</span>
          <ImLeaf className='ml-1' />
        </h1>
        <p className="text-slate-500 text-sm">Toda nuestra experiencia a tu alzance</p>
      </div>
      <div id="profile" className="px-6 py-10">
        <p className="text-slate-500">Bienvenida,</p>
        <Link href="#" className="inline-flex space-x-2 items-center">
          <span>
            <Image
              className="rounded-full w-8 h-8"
              src="/images/kurohana.jpg"
              alt="User Avatar"
              width={50}
              height={50}
            />
          </span>
          <span className="text-sm md:text-base font-bold">
            Kurohana
          </span>
        </Link>
      </div>
      <div id="nav" className="w-full px-6">

        {
          menuItems.map(item => (
            <SidebarMenuItem key={item.path} {...item} />
          ))
        }
      </div>

    </div>
  )
}
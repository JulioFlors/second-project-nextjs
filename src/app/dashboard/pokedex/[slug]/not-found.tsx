import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="grid min-h-full place-items-center bg-gray-800 px-6 py-24 sm:py-32 lg:px-8 selection:none">
      <div className="relative z-[1] flex place-items-center before:absolute before:h-[300px] before:w-full before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:z-[2] after:h-[180px] after:w-full after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-fuchsia-700 before:dark:opacity-10 after:dark:from-violet-900 after:dark:via-[#733CA9] after:dark:opacity-40 sm:before:w-[480px] sm:after:w-[240px] before:lg:h-[360px]">

        <div className="text-center">
          <p className="text-base font-flexo font-bold text-purple-500">404</p>
          <h1 className="mt-4 text-3xl font-flexo font-semibold tracking-tight text-gray-200 sm:text-5xl">Pokémon No Encontrado</h1>
          <p className="mt-6 text-base font-semibold leading-7 text-gray-200">Parece que te has perdido en la niebla.</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/dashboard/pokedex" className="rounded-md bg-[#733CA9] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible: outline-purple-600 z-[3]">Ir al Pokédex</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
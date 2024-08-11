import { WidgetsGrid } from "@/components";


export const metadata = {
  title: 'Admin Dashboard',
  description: 'SEO Title',
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <p className="text-xl">Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-2">
        <WidgetsGrid />
      </div>

    </div>


  );
}
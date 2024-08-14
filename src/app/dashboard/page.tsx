import { WidgetsGrid } from "@/components";


export const metadata = {
  title: 'Admin Dashboard',
  description: 'SEO Title',
};

export default function MainPage() {
  return (
    <div className="p-2">

      <div className="Flex font-flexo text-gray-800">
        <small > State Management </small>
        <span className="font-semibold">Zustand</span>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))] gap-2">
        <WidgetsGrid />
      </div>

    </div>


  );
}
import { Outlet } from 'react-router-dom';
import { Sidebar } from '../components/navigation/sidebar/Sidebar';

export const PokeAppLayout = () => {
  return (
    <div className="bg-slate-100 overflow-y-scroll w-screen h-screen antialiased text-slate-300 selection:bg-blue-600 selection:text-white">
      <div className="flex">
        <Sidebar />
        <div className="p-2 w-full text-slate-900">
          <Outlet />
        </div>
      </div>
    </div>
  );
};
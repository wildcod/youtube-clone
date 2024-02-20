import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
  return (
    <div className="border border-neutral-700">
      <Header />
      <Sidebar />
      <div id="main" className="border border-zinc-700 ml-60 mt-14">
        <Outlet />
      </div>
    </div>
  );
};

export default DefaultLayout;

import { MenuOutlined, YoutubeFilled } from '@ant-design/icons';
import SearchFilter from './SearchFilter';
import ActionButtons from './ActionButtons';

const Header = () => {
  return (
    <header className="flex z-50 justify-between h-14 px-4 fixed w-[100%] bg-white top-0 left-0 items-center border border-sky-500">
      <div className="flex gap-4">
        <MenuOutlined className="text-xl/[20px] inline-flex items-center" />
        <div className="flex items-center gap-1">
          <YoutubeFilled className="text-3xl/[20px] text-red-yt" />
          <span>YouTube</span>
        </div>
      </div>
      <SearchFilter />
      <ActionButtons />
    </header>
  );
};

export default Header;

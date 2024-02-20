import React from 'react';
import SearchIcon from '../../../assets/images/svgs/SearchIcon';
import IconCross from '../../../assets/images/svgs/IconCross';

interface Props {}

const SearchFilter: React.FC<Props> = () => {
  return (
    <div className="flex min-h-10 items-stretch flex-[0_1_600px]">
      <form className="flex flex-1 pl-4 pr-1 border-solid border border-gray-300 rounded-l-[40px] items-center">
        <input placeholder="Search" className="outline-none w-[100%]" />
        <IconCross />
      </form>
      <div className="flex justify-center items-center border-solid border border-gray-300 border-l-0 min-w-16 bg-gray-50 rounded-r-[40px]">
        <SearchIcon />
      </div>
    </div>
  );
};

export default SearchFilter;

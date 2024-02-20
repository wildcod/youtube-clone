import React from 'react';
import IconCamera from '../../../assets/images/svgs/IconCamera';
import IconBell from '../../../assets/images/svgs/IconBell';

interface Props {}

type IconWrapperProps = {
  children: React.ReactNode;
};

const IconWrapper = ({ children }: IconWrapperProps) => (
  <button className="rounded-full p-2 hover:bg-black/[0.1]">{children}</button>
);

const ActionButtons: React.FC<Props> = () => {
  return (
    <div className="flex gap-x-3">
      <IconWrapper>
        <IconCamera />
      </IconWrapper>
      <IconWrapper>
        <IconBell />
      </IconWrapper>
      <button className="rounded-full py-px px-3.5 bg-teal-900 text-white">
        <span>S</span>
      </button>
    </div>
  );
};

export default ActionButtons;

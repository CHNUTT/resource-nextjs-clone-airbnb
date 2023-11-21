'use client';

interface MenuItemProps {
  handleOnClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ handleOnClick, label }) => {
  return (
    <div
      onClick={handleOnClick}
      className='
        px-4
        py-3
        hover:bg-neutral-100
        transition
        font-semibold
      '
    >
      {label}
    </div>
  );
};

export default MenuItem;

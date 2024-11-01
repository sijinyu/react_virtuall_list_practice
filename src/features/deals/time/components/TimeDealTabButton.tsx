type TTimeDealTabButtonProps = {
  label: string;
  isActive: boolean;
  onClick: () => void;
};

const TimeDealTabButton = ({
  label,
  isActive,
  onClick,
}: TTimeDealTabButtonProps) => {
  return (
    <button className='flex-1 px-4' onClick={onClick}>
      <span
        className={`h-full relative ${
          isActive
            ? 'before:absolute before:-bottom-4 before:border-b-2 before:border-b-black before:w-full font-black'
            : 'text-gray-500'
        }`}
      >
        {label}
      </span>
    </button>
  );
};

export default TimeDealTabButton;

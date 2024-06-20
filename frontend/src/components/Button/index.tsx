export default function Button({
  title = 'Continue',
  onClick,
}: {
  title: string;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className='w-[90%] max-w-[400px] h-[48px] bg-[#0074CC] outline-none text-white rounded-lg font-semibold'
    >
      {title}
    </button>
  );
}

const Header = () => {
  return (
    <div className="w-[100%] h-[60px] bg-gray-800 flex items-center justify-between px-6">
      <div className="text-[26px] text-gray-200 font-bold">Conduit</div>
      <div className="flex justify-center items-center">
        <div className="cursor-pointer hover:text-gray-400 text-gray-200 font-medium text-[16px] ml-4">
          Home
        </div>
        <div className="cursor-pointer hover:text-gray-400 text-gray-200 font-medium text-[16px] ml-4">
          Sign in
        </div>
        <div className="cursor-pointer hover:text-gray-400 text-gray-200 font-medium text-[16px] ml-4">
          Sign up
        </div>
      </div>
    </div>
  );
};

export default Header;

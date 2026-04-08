import { assets } from "../assets/assets";

const SideBar = () => {
  return (
    <div className="w-[15%] h-full p-2 flex flex-col gap-2 text-white hidden lg:flex">
      <div className="bg-gray-950 rounded p-4 flex flex-col gap-4">
        <div className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
          <img className="w-6" src={assets.home_icon} alt="home" />
          <p className="font-bold">Home</p>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-gray-300">
          <img className="w-6" src={assets.search_icon} alt="search" />
          <p className="font-bold">Search</p>
        </div>
      </div>

     
      <div className="bg-gray-900 rounded flex-1 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="library" />
            <p className="font-semibold">Your Library</p>
          </div>
        </div>

       
        <div className="text-sm text-gray-400">Your Library
        </div>
      </div>

    </div>
  );
};

export default SideBar;
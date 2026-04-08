import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const SideBar = () => {

   const navigate = useNavigate();

  return (
    <div className="w-[25%] h-full p-3 flex-col gap-3 text-white hidden lg:flex">

      <div className="bg-gray-900 rounded-xl p-4 flex flex-col gap-5">

        <div onClick={()=>navigate('/')} className="flex items-center gap-3 cursor-pointer hover:text-gray-400 transition">
          <img className="w-5" src={assets.home_icon} alt="home" />
          <p className="font-semibold">Home</p>
        </div>

        <div className="flex items-center gap-3 cursor-pointer hover:text-gray-400 transition">
          <img className="w-5" src={assets.search_icon} alt="search" />
          <p className="font-semibold">Search</p>
        </div>
      </div>
      <div className="bg-gray-900 rounded-xl flex-1 p-4 flex flex-col">
        <div className="flex items-center justify-between mb-5">

          <div className="flex items-center gap-3 cursor-pointer hover:text-gray-400 transition">
            <img className="w-7" src={assets.stack_icon} alt="library" />
            <p className="font-semibold">Your Library</p>
          </div>

          <div className="flex gap-3 items-center">
            <img className="w-5 cursor-pointer " src={assets.arrow_icon} alt="arrow" />
            <img className="w-5 cursor-pointer " src={assets.play_icon} alt="play" />
          </div>

        </div>

        <div className=" p-4 bg-[#242424] m-2 rounded-2xl flex  flex-col font-semibold items-start justify-start gap-1 pl-4">
          <h1 className="font-semibold text-sm">Create your first playlist</h1>
          <p className="text-xs text-gray-400">We will help you</p>
          <button className="mt-3 px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:scale-105 transition">
            Create Playlist
          </button>
        </div>
        <div className="p-4 bg-[#242424] m-2 rounded-2xl flex  flex-col font-semibold items-start justify-start gap-1 pl-4 mt-4">
          <h1 className="font-semibold text-sm">Let's find some Podcast to follow</h1>
          <p className="text-xs text-gray-400">We will Update a new episodes</p>
          <button className="mt-3 px-4 py-2 bg-white text-black text-sm font-medium rounded-full hover:scale-105 transition">
            Browse Podcast
          </button>
        </div>
      </div>

    </div>
  );
};

export default SideBar;
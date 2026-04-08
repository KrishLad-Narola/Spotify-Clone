import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

const Navbar = () => {

    const navigate = useNavigate()

    return (
        <>
            <div  className="flex justify-start gap-2">
                <div className="w-full flex gap-3 items-center font-semibold">
                    <img onClick={() => navigate(-1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer ite" src={assets.arrow_left} alt="" />
                    <img onClick={() => navigate(+1)} className="w-8 bg-black p-2 rounded-2xl cursor-pointer" src={assets.arrow_right} alt="" />
                </div>
                <div className="flex items-center gap-4">
                    <p className="w-38 bg-white text-black  text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">Explore Premium</p>
                    <p className="w-25 bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer">Install App</p>
                    <p className="bg-purple-500 text-black rounded-full items-center justify-center w-7 h-7 flex cursor-pointer">K</p>
                </div>
            </div>
            <div className="flex items-center gap-2 mt-4">
                <p className="w-14 bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">All</p>
                <p className="w-18 bg-black px-4 py-1 rounded-2xl cursor-pointer">Music</p>
                <p className="w-21 bg-black px-4 py-1 rounded-2xl cursor-pointer">Podcast</p>
            </div>
        </>
    );
};

export default Navbar;
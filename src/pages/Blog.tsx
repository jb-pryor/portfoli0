import { Link } from "react-router-dom";
import WaveText from "../components/WaveText";

function Blog() {

  return (
    <>
      <div className='bg-zinc-900 min-h-screen font-[Inter] px-6 md:px-20 text-left text-white'>

        {/* Nav */}
        <div className='flex gap-8 md:gap-25 text-lg md:text-2xl pt-8 md:mt-10'>
          <Link to="/"><div className='text-gray-200 hover:text-[#7b00ff] cursor-pointer'>Home</div></Link>
          <Link to="/About"><div className='text-gray-200 hover:text-[#7b00ff] cursor-pointer'>About</div></Link>
          <Link to="/Contact"><div className='text-gray-200 hover:text-[#7b00ff] cursor-pointer'>Contact</div></Link>
          <div className='text-purple-500 font-bold cursor-pointer'>Blog</div>
        </div>

        <div className="flex justify-center items-center md:mt-0 md:min-h-[80vh]">
          <WaveText text="Coming Soon"/>
        </div>

      </div>
    </>
  );
}

export default Blog;
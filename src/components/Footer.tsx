//imports
import { Link } from "react-router-dom";

function Footer() {

  return (

    <>
      <footer>
      <div className='border-t border-zinc-800 w-full'></div>
      <div className='flex justify-between items-center px-6 md:px-20 py-6 text-zinc-500'>
        
        {/* Left - page links */}
        <div className='flex gap-6 text-sm md:text-base'>
        <Link to="/"><div className='text-gray-200 hover:text-[#7b00ff] cursor-pointer'>Home</div></Link>
          <Link to="/About"><div className='text-gray-200 hover:text-[#7b00ff] cursor-pointer'>About</div></Link>
          <Link to="/Contact"><div className='text-gray-200 hover:text-[#7b00ff] cursor-pointer'>Contact</div></Link>
          <Link to="/Blog"><div className='text-gray-200 hover:text-[#7b00ff] cursor-pointer'>Blog</div></Link>
        </div>

        {/* Right - created by */}
        
        <a href="https://github.com/jb-pryor/portfoli0" target="_blank" rel="noopener noreferrer" className='text-sm md:text-base hover:text-purple-500 transition-colors duration-200'>
          Created by JB
        </a>

      </div>
    </footer>
    </>
  );
}

export default Footer;
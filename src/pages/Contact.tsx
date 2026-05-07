import { Link } from "react-router-dom";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import anotherPhoto from '../assets/jbGrad.jpg'

function Contact() {

  return (
    <>
      <div className='bg-zinc-900 min-h-screen font-[Inter] px-6 md:px-20 text-left text-white'>
        
        {/* Nav */}
        <div className='flex gap-8 md:gap-25 text-lg md:text-2xl pt-8 md:mt-10'>
          <Link to="/"><div className='text-gray-200 hover:text-[#7b00ff] cursor-pointer'>Home</div></Link>
          <Link to="/About"><div className='text-gray-200 hover:text-[#7b00ff] cursor-pointer'>About</div></Link>
          <div className='text-purple-500 font-bold cursor-pointer'>Contact</div>
          <Link to="/Blog"><div className='text-gray-200 hover:text-[#7b00ff] cursor-pointer'>Blog</div></Link>
        </div>

        <div className='flex flex-col md:flex-row gap-8 md:gap-15 mt-4 pb-20'>
          
          {/* Photo + Name */}
          <div>
            
            <div className='mt-6 md:mt-10'></div>

            <div className='text-xl md:text-2xl mt-2'>James Benjamin Pryor</div>
            <div className='text-xl md:text-2xl mt-2'>San Diego, CA</div>

            <div className='w-48 h-48 md:w-75 md:h-75 rounded-2xl overflow-hidden flex-shrink-0'>
              <img
                src={anotherPhoto}
                alt="JB Pryor"
                className='w-full h-full object-cover scale-255 object-top'
              />
            </div>
          </div>

          {/* Social icons */}
          <div className='font-bold md:mt-9 flex flex-row md:flex-col gap-4'>
            
            <div className='flex items-center gap-2'>
              <a href="https://www.linkedin.com/in/james-pryor-571b3a2ab/" target="_blank" rel="noopener noreferrer">
                <svg width="60" height="60" viewBox="0 0 24 24" className="fill-current cursor-pointer md:w-[135px] md:h-[135px]">
                  <FaLinkedin />
                </svg>
              </a>
              <div className='hidden md:block'>Linkedin</div>
            </div>

            <div className='flex items-center gap-2'>
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <svg width="60" height="60" viewBox="0 0 24 24" className="fill-current cursor-pointer md:w-[135px] md:h-[135px]">
                  <FaGithub />
                </svg>
              </a>
              <div className='hidden md:block'>Github</div>
            </div>

            <div className='flex items-center gap-2'>
              <a href="mailto:youremail@example.com">
                <svg width="60" height="60" viewBox="0 0 24 24" className="fill-current cursor-pointer md:w-[135px] md:h-[135px]">
                  <FaEnvelope />
                </svg>
              </a>
              <div className='hidden md:block'>Email</div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
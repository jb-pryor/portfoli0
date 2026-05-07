import './App.css'
import profilePhoto from '../assets/profile.jpg'
import anotherPhoto from '../assets/jbGrad.jpg'
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

import Footer from '../components/Footer';

function Home() {
  return (
    <>
      <div className='bg-zinc-900 border-zinc-800 border-1 min-h-screen font-[Inter] text-left text-zinc-200'>
        <div className='px-6 md:px-20'>
        {/* Nav */}
        <div className='flex gap-8 md:gap-25 text-lg md:text-2xl pt-8 md:mt-10'>
          <div className='cursor-pointer font-bold text-purple-500'>Home</div>
          <Link to="/About"><div className='text-zinc-200 hover:text-[#7b00ff] cursor-pointer'>About</div></Link>
          <Link to="/Contact"><div className='text-zinc-200 hover:text-[#7b00ff] cursor-pointer'>Contact</div></Link>
          <Link to="/Blog"><div className='text-zinc-200 hover:text-[#7b00ff] cursor-pointer'>Blog</div></Link>
        </div>

        {/* Hero */}
        <div className='flex flex-col md:flex-row md:items-start'>
          <div className='flex-3 min-w-0'>
            <div className='text-6xl md:text-9xl mt-12 md:mt-30 font-bold'>
              <span className='text-zinc-200'>JB</span> <span className='text-purple-500'>Pryor</span>
            </div>
            <div className='mt-6 md:mt-12 text-zinc-400 text-base md:text-xl'>
            CS graduate from Point Loma Nazarene with a focus on <span className='text-purple-500 font-bold'>software engineering</span>. I enjoy building <span className='font-bold'>efficient</span>, <span className='font-bold'>well-crafted</span> applications and am actively looking for <span className='font-bold'>opportunities</span> to grow as a developer.
            </div>
          </div>

          {/* Profile photo - shows above name on mobile, right side on desktop */}
          <div className='order-first md:order-last md:ml-10 md:flex-1 mt-8 md:mt-30'>
            <div className='w-32 h-32 md:w-50 md:h-50 rounded-full overflow-hidden'>
              <img
                src={profilePhoto}
                alt="JB Pryor"
                className='w-full h-full object-cover [object-position:center_15%]'
              />
            </div>
          </div>
        </div>

        <div className='mt-16 md:mt-40'></div>

        {/* Projects */}
        <div className='mb-8 md:mb-12 text-3xl md:text-4xl font-bold'>Projects</div>

        <Link to="/Project1">
          <div className='group cursor-pointer mt-8 md:mt-15 border-2 border-transparent hover:bg-zinc-800 p-4 md:p-5 rounded-2xl transition-colors duration-300'>
            <div className='text-xl md:text-xl font-bold'>Department KPI Dashboard Tracker</div>
            <div className='text-sm mt-2 md:text-base text-zinc-400'>-Angular, Typescript, Apex Charts, Tailwind/DaisyUi</div>
            <div className='mt-2 text-sm md:text-base text-zinc-400'>Worked with director of institutional research at Point Loma Nazarene. Visualizes department performance data. Tracks KPI trends over time for individual departments.</div>
            <div className='text-purple-500 mt-2'>Read Article &gt;</div>
          </div>
        </Link>

        <Link to="/Project2">
          <div className='group cursor-pointer mt-8 md:mt-15 border-2 border-transparent hover:bg-zinc-800 rounded-2xl p-4 md:p-5 transition-colors duration-300'>
            <div className='text-xl md:text-xl font-bold'>AST Parsing GitHub Action Comparison Tool</div>
            <div className='text-sm mt-2 md:text-base text-zinc-400'>-Python, Tree-sitter, GitHub Actions, Docker</div>
            <div className='mt-2 text-sm md:text-base text-zinc-400'>Worked alongside a fellow student to develop a GitHub action that runs on push, checks for modified Python files, parses them and compares their ASTs.</div>
            <div className='text-purple-500 mt-2'>Read Article &gt;</div>
          </div>
        </Link>

        <Link to="/Project3">
          <div className='group cursor-pointer mt-8 md:mt-15 border-2 border-transparent hover:bg-zinc-800 rounded-2xl p-4 md:p-5 transition-colors duration-300'>
            <div className='text-xl md:text-xl font-bold'>Spotify Wrapped Dashboard Clone</div>
            <div className='text-sm mt-2 md:text-base text-zinc-400'>-Next.js, Typescript, SpotifyAPI</div>
            <div className='mt-2 text-sm md:text-base text-zinc-400'>Built a Spotify Wrap clone that connects to a user's Spotify account and displays their most played tracks, artists, and genres.</div>
            <div className='text-purple-500 mt-2'>Read Article &gt;</div>
          </div>
        </Link>

        <Link to="/Project4">
          <div className='group cursor-pointer mt-8 md:mt-15 border-2 border-transparent hover:bg-zinc-800 rounded-2xl p-4 md:p-5 transition-colors duration-300'>
            <div className='text-xl md:text-xl font-bold'>Infinite Tile Editor Game</div>
            <div className='text-sm mt-2 md:text-base text-zinc-400'>-Java, JavaFx, OOP</div>
            <div className='mt-2 text-sm md:text-base text-zinc-400'>Created a JavaFX game that lets users design custom levels, select blocks with different abilities, save them to a file, and play them back with physics.</div>
            <div className='text-purple-500 mt-2'>Read Article &gt;</div>
          </div>
        </Link>

        {/* Contact */}
        <div className='text-3xl md:text-4xl mt-16 md:mt-35 font-bold'>Contact</div>

        <div className='flex flex-col md:flex-row gap-8 md:gap-15 mb-20 mt-4'>
          <div>
            <div className='mt-6 md:mt-10'></div>
            <div className='w-48 h-48 md:w-75 md:h-75 rounded-2xl overflow-hidden flex-shrink-0'>
              <img
                src={anotherPhoto}
                alt="JB Pryor"
                className='w-full h-full object-cover scale-255 object-top'
              />
            </div>
            <div className='text-xl md:text-2xl mt-2'>James Benjamin Pryor</div>
            <div className='text-xl md:text-2xl mt-2'>San Diego, CA</div>
          </div>

          <div className='font-bold md:mt-9 flex md:flex-col flex-row gap-4'>
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
        <Footer />

      </div>
    </>
  )
}

export default Home
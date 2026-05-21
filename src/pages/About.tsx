import './App.css'
import profilePhoto from '../assets/profile.jpg'
import { Link } from "react-router-dom";


import Footer from '../components/Footer';

function About() {

  return (
    <>
      <div className='bg-zinc-900 min-h-screen font-[Inter]  text-left text-white'>
        
        <div className='px-6 md:px-20'>
          {/* Nav */}
          <div className='flex gap-8 md:gap-25 text-lg md:text-2xl pt-8 md:mt-10'>
            <Link to="/"><div className='text-zinc-200 hover:text-[#7b00ff] cursor-pointer'>Home</div></Link>
            <div className='text-purple-500 font-bold cursor-pointer'>About</div>
            <Link to="/Contact"><div className='text-zinc-200 hover:text-[#7b00ff] cursor-pointer'>Contact</div></Link>
            {/*<Link to="/Blog"><div className='text-zinc-200 hover:text-[#7b00ff] cursor-pointer'>Blog</div></Link>*/}
          </div>

          {/* Hero */}
          <div className='flex flex-col md:flex-row md:gap-25'>
            
            {/* Photo - shows first on mobile */}
            <div className='order-first md:order-last md:flex-1 mt-10 md:mt-15'>
              <div className='w-40 h-40 md:w-82 md:h-82 rounded-full overflow-hidden'>
                <img
                  src={profilePhoto}
                  alt="JB Pryor"
                  className='w-full h-full object-cover [object-position:center_15%]'
                />
              </div>
            </div>

            {/* Name */}
            <div className='md:flex-1 min-w-0'>
              <div className='text-5xl md:text-8xl mt-8 md:mt-20 font-bold'>
                <span className='text-purple-500'>J</span>ames <br /><span className='text-purple-500'>B</span>enjamin <br /><span className='text-purple-500'>P</span>ryor
              </div>
            </div>

          </div>

          {/* Bio */}
          <div className='text-zinc-400 mt-8 md:mt-10 text-sm md:text-base'>
            I am a computer science student focused on software engineering, with an interest in building efficient, scalable, and reliable systems. I enjoy solving complex problems through clean, maintainable code and continuously expanding my technical skills. I am particularly interested in developing applications that balance performance with user experience, while following best practices in design and development. I value collaboration, adaptability, and writing code that is both effective and easy for others to understand.
          </div>
          <div className='text-zinc-400 text-sm md:text-base mt-6 md:mt-8'>
            Outside of programming, I enjoy staying active and spending time with friends. I'm a big fan of sports and like being outdoors whenever I can, whether that's playing, watching, or just relaxing. I appreciate the balance between working on technical projects and taking time to recharge through social activities and hobbies.
          </div>
          <div className='text-zinc-400 text-sm md:text-base mt-6 md:mt-8 pb-16'>
            I'm someone who enjoys learning new things, both in and out of tech, and I try to bring that same curiosity and energy into everything I do.
          </div>

          {/*<div className='flex pb-16 gap-2 md:gap-10'>
            <div className='w-40 h-40 md:w-82 md:h-82 overflow-hidden'>
              <img
                src={jbpic1}
                alt="JB Pryor"
                className='w-full h-full object-cover [object-position:center_15%]'
              />
            </div>
            <div className='w-40 h-40 md:w-82 md:h-82 overflow-hidden'>
                <img
                  src={jbpic2}
                  alt="JB Pryor"
                  className='w-full h-full object-cover [object-position:center_15%]'
                />
              </div>
              <div className='w-40 h-40 md:w-82 md:h-82 overflow-hidden'>
                <img
                  src={jbpic3}
                  alt="JB Pryor"
                  className='w-full h-full object-cover [object-position:center_15%]'
                />
              </div>
            </div>*/}

        </div>
        <Footer />
      </div>
    </>
  );
}

export default About;
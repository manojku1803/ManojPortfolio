import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Nextjs from '../assets/next.png';
import Git from '../assets/git.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Bootstrap from '../assets/bootstrap.png';
import Vercel from '../assets/vercel.png';
import TypeScript from '../assets/pngwing.com (1).png'
import Java from '../assets/pngwing.com.png'
import Python from '../assets/pngwing.com (2).png'
import Nodejs from '../assets/nodejs-logo.png'
import Postgresql from '../assets/postgresql-inc-logo.png'



const Tools = () => {
  return (
    <div id='tools' className='w-full pt-32 md:pt-0 md:h-screen bg-[#0a192f] dark:bg-gray-100 text-gray-300 dark:text-gray-800'>
      {/* Container */}
      <div className='max-w-[950px] mx-auto p-4 flex flex-col justify-center h-full'>
          <div className='absolute md:mb-32 md:pb-48 mb-96 sm:pb-2 -mt-10 pb-96 pl-4'>
              <p className='opacity-10 text-9xl font-bold inline border-b-4 border-yellow-600'>Tools</p>
          </div>

          <div className='w-full z-10 grid grid-cols-2 sm:grid-cols-5 gap-5 text-center py-10'>
              <div className='rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-[60px] mx-auto' src={HTML} alt="HTML icon" />
                  <p className='my-4'>HTML</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-[60px] mx-auto' src={CSS} alt="HTML icon" />
                  <p className='my-4'>CSS</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-[60px] mx-auto' src={JavaScript} alt="HTML icon" />
                  <p className='my-4'>JAVASCRIPT</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-[60px] mx-auto' src={TypeScript} alt="HTML icon" />
                  <p className='my-4'>TYPESCRIPT</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-[60px] mx-auto' src={Java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-[60px] mx-auto' src={Python} alt="HTML icon" />
                  <p className='my-4'>PYTHON</p>
              </div>
           
              <div className='rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-[60px] mx-auto' src={Bootstrap} alt="HTML icon" />
                  <p className='my-4'>BOOTSTRAP</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-[60px] mx-auto' src={Tailwind} alt="HTML icon" />
                  <p className='my-4'>TAILWINDCSS</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-[60px] mx-auto' src={ReactImg} alt="HTML icon" />
                  <p className='my-4'>REACT</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-[60px] mx-auto' src={Git} alt="HTML icon" />
                  <p className='my-4'>GIT</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-[60px] mx-auto dark:bg-gray-800' src={GitHub} alt="HTML icon" />
                  <p className='my-4'>GITHUB</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-[70px] h-[60px] mx-auto' src={Nextjs} alt="HTML icon" />
                  <p className='my-4'>NEXT.JS</p>
              </div>
            <div className='rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-[60px] mx-auto' src={Postgresql} alt="HTML icon" />
                  <p className='my-4'>POSTGRESQL</p>
              </div>
              <div className='rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-[60px] mx-auto' src={Nodejs} alt="HTML icon" />
                  <p className='my-4'>NODE JS</p>
              </div>
            
              <div className='rounded-lg shadow-xl shadow-gray-600 hover:scale-110 hover:shadow-xl duration-500'>
                  <img className='w-[60px] mx-auto' src={Vercel} alt="HTML icon" />
                  <p className='my-4'>VERCEL</p>
              </div>
              
          </div>
      </div>
    </div>
  );
};

export default Tools;

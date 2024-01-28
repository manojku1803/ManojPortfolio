const About = () => {
  return (
    <div id='about' className='w-full h-auto pt-40 md:h-screen bg-[#0a192f] dark:bg-gray-100 text-gray-300 dark:text-gray-800'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full'>
          <div className='absolute -mt-16 pb-8 pl-4'>
            <p className='opacity-10 text-9xl font-bold inline border-b-4 border-yellow-600 dark:text-gray-900'>
              About
            </p>
          </div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-3xl font-bold'>
            <p>A little bit about me.</p>
          </div>
          <div>
            <p>Hey there! I'm Manoj, a tech enthusiast and full-stack developer with a passion for crafting digital experiences that leave an impact. I code with flair, turning ideas into sleek, user-friendly web apps using the MERN stack.</p>
            
            <p className='mt-3'>From real-time collaborative workspaces to diving into the world of machine learning and deep learning, I thrive on challenges that keep the excitement alive.</p>
            
            <p className='mt-3'>When not immersed in code, you'll catch me contributioning to open-source projects on GitHub.  </p>

            <p className='mt-3'>Let's connect the dots between creativity and technology - because that's where the magic happens!</p>
            
            <p className='mt-3'>PS: I use <a href='https://www.twitter.com/mxnoj18' className='text-blue-400'>Twitter</a> alot.</p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
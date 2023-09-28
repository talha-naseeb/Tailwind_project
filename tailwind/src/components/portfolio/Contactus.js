import React from "react";
import portfolioimages from "./imgs/img";


function Contactus() {
  return (
    <div>
      <div className='flex flex-col md:flex-row items-center justify-center md:justify-between'>
        <div className='md:w-1/2 p-4'>
          <h1 className='text-center md:text-left text-2xl md:text-3xl'>
            Hi, this is <span className='text-blue-400'>Talha Jutt!</span>
          </h1>
          <p className='text-center text-sm md:text-base mt-2'>This is my Official Portfolio website to show all details and my work experience in web development.</p>
          <a href='TALHA SF CV (2).pdf' target='_blank' rel='noopener noreferrer' className='text-center mt-4 block text-blue-400 hover:underline hover:text-green-500'>
            Download CV
          </a>
        </div>

        <div className='md:w-1/2 p-6'>
          <img src={portfolioimages.img1} alt='Capture' className='mx-auto rounded-lg transition-transform transform hover:scale-105' />
        </div>
      </div>

      <div className='text-center md:text-left px-4 flex gap-1 mt-4'>
        <a href='https://mail.google.com' target='_blank' className='hover:text-red-500 hover:underline'>
          GMAIL
        </a>
        <a href='https://twitter.com' target='_blank' className='hover:text-red-500 hover:underline'>
          TWITTER
        </a>
        <a href='https://github.com' target='_blank' className='hover:text-red-500 hover:underline'>
          GITHUB
        </a>
      </div>

      <div className='md:flex'>
        <div className='md:w-1/2 p-6'>
          <div className='flex justify-center md:justify-start'>
            <div className='h-48 w-48'>
              <img src={portfolioimages.img4} alt='Profile Image' className='gif mx-auto transition-transform transform hover:scale-90 h-[15rem] w-[15rem]' />
            </div>
          </div>
        </div>
        <div className='md:w-1/2 p-6'>
          <div>
            <h1 className='text-2xl'>
              <span className='text-blue-400'>About </span>Me
            </h1>
            <p className=''>
              Proficient in HTML, CSS, JavaScript, and PHP. Skilled in creating responsive websites and web applications using modern frameworks and libraries.
              <br />
              Designed and developed responsive website layouts using <br />
              - HTML
              <br />
              - CSS
              <br />
              - JavaScript
              <br />
              - React
              <br />
              - Bootstrap
              <br />- Tailwind
            </p>
          </div>
        </div>
      </div>

      <h1 className='text-2xl text-blue-400'>Services</h1>

      <div className='md:flex'>
        <div className='md:w-1/2 p-6'>
          <div>
            <h1 className='text-xl text-blue-400'>Backend Development</h1>
            <p>
              Backend development alone cannot directly make a website beautiful. However, a well-designed backend can support the creation of a beautiful website by ensuring it runs smoothly and
              efficiently. Additionally, a backend that provides easy-to-use content management tools can allow front-end designers to create visually stunning pages without being limited by technical
              constraints.
            </p>
          </div>
        </div>
        <div className='md:w-1/2 p-6'>
          <img src={portfolioimages.img3} alt='Image' className='gif mx-auto transition-transform transform hover:scale-90 rounded-lg h-[15rem] w-[15rem]' />
        </div>
      </div>

      <div className='md:flex'>
        <div className='md:w-1/2 p-6'>
          <div className='flex justify-center md:justify-start'>
            <div className='h-48 w-48'>
              <img src={portfolioimages.img2} alt='Image' className='rounded-lg h-[15rem] w-[150rem]' />
             
            </div>
          </div>
        </div>
        <div className='md:w-1/2 p-6'>
          <div>
            <h1 className='text-blue-400 text-xl'>Forntend Development</h1>
            <p>
              Building your awesome product from a visual concept to a fully functional application. Sketch Integrations in Bootstrap or Material Design and modern single-page apps development with
              React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contactus;

  
import React from 'react';
import { FaReact, FaCss3, FaHtml5, FaJsSquare, FaNodeJs, } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';
import { motion } from 'framer-motion';
function Home() {
  return (
    <div>
      <motion.div initial="hidden" animate="visible" variants={{
        hidden:{
          scale: .4,
          opacity: 0
        },
        visible:{
          scale: 1,
          opacity: 1,
          transition: {
            delay: .2
          }
        },
      }}>
      <div className="intro h-screen bg-slate-400">
        <div className="bg-slate-400 grid grid-cols-1 md:grid-cols-2 h-screen items-center lg:border-4 border-white lg:transform md:mx-10 lg:rotate-12">
          <div className="h-1/2">
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_kkflmtur.json" background="transparent" speed="1" loop autoplay></lottie-player>
          </div>
          <div className='shadow-lg rounded-lg' >
            <h1 className="text-4xl text-center sm:text-7xl px-5 border-b-4 md:px-0">Hii, I am <b className="text-yellow-500"> Sarabnoor</b></h1>
            <h1 className="text-3xl text-center sm:text-4xl px-5 md:px-0">Fullstack <b className="text-fuchsia-500">Developer</b> </h1>
          </div>
        </div>
      </div>
      </motion.div>
      <div className="tech section">
        <div className="headline text-4xl rounded-md border-2 text-slate-500 text-center my-16 shadow-lg p-3">
          <h2>Technologies I USE</h2>
        </div>
        <div className=" techno ">
          <div className="grid grid-cols-1 md:grid-cols-3" >
            <motion.li whileHover={{scale: 1.2, transition: {duration: .2}}} className="list-none"><FaHtml5 size={180} className="text-orange-500 w-full text-center mt-20 animate-pulse " /></motion.li>
            <motion.li whileHover={{scale: 1.2, transition: {duration: .2}}} className="list-none"><FaReact size={180} className="text-cyan-500 w-full text-center mt-20 animate-bounce " /></motion.li>
            <motion.li whileHover={{scale: 1.2, transition: {duration: .2}}} className="list-none"><FaCss3 size={180} className="text-blue-500 w-full text-center mt-20 animate-pulse " /></motion.li>
            <motion.li whileHover={{scale: 1.2, transition: {duration: .2}}} className="list-none"><FaJsSquare size={180} className="text-yellow-500 w-full text-center mt-20 animate-bounce" /></motion.li>
            <motion.li whileHover={{scale: 1.2, transition: {duration: .2}}} className="list-none"><FaNodeJs size={180} className="text-green-900 w-full text-center mt-20 animate-pulse " /></motion.li>
            <motion.li whileHover={{scale: 1.2, transition: {duration: .2}}} className="list-none"><SiNextdotjs size={180} className="text-black w-full text-center mt-20 animate-bounce " /></motion.li>

          </div>
        </div>
      </div>
      <div className="devstack my-20 ">
        <div className="text-center h-52 bg-cyan-500">
          <h1 className="text-black font-bold text-4xl py-10">My Dev Stack</h1>
        </div>
        <div className="mx-5 md:mx-32 bg-gray-50 shadow-2xl -mt-20 rounded-lg">
          <div className="h-[40rem]">
            <lottie-player src="https://assets4.lottiefiles.com/packages/lf20_hluo7ags.json" background="transparent" speed="1" loop autoplay></lottie-player>
          </div>
          <div className="stack grid grid-cols-1 md:grid-cols-3 p-5 ">
            <div className="text-left">
              <h1 className="text-2xl font-bold">Front End</h1>
              <hr />
              <p className=" text-xl font-bold mt-2">HTML/CSS</p>
              <p className=" text-xl font-bold mt-2">Javascript</p>
              <p className=" text-xl font-bold mt-2">React</p>
              <p className=" text-xl font-bold mt-2">Next JS</p>
            </div>
            <div className="text-center">
              <h1 className="text-2xl font-bold mt-3 md:mt-0">UI/UX</h1>
              <hr />
              <p className=" text-xl font-bold mt-2">Bootstrap</p>
              <p className=" text-xl font-bold mt-2">Tailwind CSS</p>
            </div>
            <div className="text-right">
              <h1 className="text-2xl font-bold mt-3 md:mt-0">Back end and DB</h1>
              <hr />
              <p className=" text-xl font-bold mt-2">Node JS</p>
              <p className=" text-xl font-bold mt-2">Next JS</p>
              <p className=" text-xl font-bold mt-2">Mongo DB</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mydata ">
        <h1 className="text-4xl text-cyan-500 text-center font-bold">Who is Sarabnoor?</h1>
        <div className="relative text-gray-500">
          <div className=" md:h-[60rem]">
            <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_gja1z1ru.json" background="transparent" speed="1" loop autoplay></lottie-player>
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <h1 className="text-xl small:text-2xl sm:text-4xl md:text-5xl">Hi , Hello , Namaste....</h1>

            <hr />
            <pre className="text-[12px] md:text-3xl smallv:text-[18px] small:text-2xl my-5 font-semibold ">
              {JSON.stringify({
                Name: 'Sarabnoor Singh',
                Age: '22',
                Gender: 'Male',
                Country: 'India'
              }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

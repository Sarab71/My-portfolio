import { FaPhoneAlt } from 'react-icons/fa'
import { ImMail4 } from 'react-icons/im'
import { motion } from 'framer-motion'
export default function Contact() {
  return (
    
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
      <div className="contact-animation mt-11 h-96">
        <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_mwawjro9.json" background="transparent" speed="1" loop autoplay></lottie-player>
      </div>
      
      <div className="w-screen flex justify-center mb-11 ">
        <div className=" mb-11 shadow-xl border-2 mt-12 p-8 text-center md:flex-row space-y-2 md:space-y-0 md:items-stretch md:space-x-12 bg-cyan-700 w-full max-w-4xl sm:px-12 sm:py-10 rounded-xl text-white overflow-hidden">
          <div className="details md:py-4 flex-grow flex flex-col space-y-4">
            <h1 className="contact us font-bold text-4xl tracking-wide">Contact Me</h1>
            <p className="text-cyan-100 text-2xl">Feel free to ask me anything!</p>
          </div>
          <div className="details space-y-3 items-center justify-center  ">
            <div>
              <div></div>
              <div className='grid grid-col justify-center space-y-1'><FaPhoneAlt className='text-teal-300 text-3xl ' />
              </div>
              <p className='text-2xl mt-3'>+91 9319747717</p>
            </div>
            <div>
              <div></div>
              <div className='grid grid-col justify-center space-y-1'><ImMail4 className='text-teal-300 text-4xl' />
              </div>
              <p className='text-2xl mt-2'>singhsarabnoor@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      </motion.div>
  )
}
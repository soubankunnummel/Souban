import React from 'react'
import {motion} from 'framer-motion'
import { fadeIn } from '../variants'

function Contact() {
  return (
    <section className='section lg:mt-0 mt-[30%]' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          <motion.div
           variants={fadeIn("right", 0.3)}
           viewport={{ once: false, amount: 0.3 }}
           initial="hidden"
           whileInView={"show"}
           className='flex-1 flex justify-start items-center'
          >
              <div>
                <h4 className='text-xl uppercase text-sky-500 font-medium mb-6 tracking-wide'
                >Get in touch</h4>
                <h2 className='text-4xl lg:text-6xl leading-none font-primary'>
                  Let's work <br /> together
                </h2>
              </div>
          </motion.div>
          <motion.div
           variants={fadeIn("left", 0.3)}
           viewport={{ once: false, amount: 0.3 }}
           initial="hidden"
           whileInView={"show"}
           className='flex-1 flex lg:mt-0 mt-8 border rounded-2xl flex-col gap-y-5 pb-10
           p-6 items-center justify-start '
          >
              <input type="text" name="" id="" className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-sky-500 transition-all duration-300 ' 
            placeholder='Enter your Name'/>
              <input type="text" name="" id="" className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-sky-500 transition-all duration-300 ' 
            placeholder='Enter Email'/>
              <textarea type="text" name="" rows="5" cols="30" id="" className='bg-transparent border-b py-3 outline-none w-full
            placeholder:text-white focus:border-sky-500 transition-all duration-300 resize-none ' 
            placeholder='Enter Message'/>
            <button className='btn btn-lg'>Send Message</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
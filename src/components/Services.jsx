import React from 'react'
import {BsArrowRight} from 'react-icons/bs'
import {motion} from 'framer-motion'
import {fadeIn} from '../variants'
import img3 from '../img/img3.jpg'


const sevices = [
  {
    name:"Fullstack developer",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eaque itaque fugiat, suscipit rem culpa aut nulla esse, architecto amet magni iusto natus, voluptatibus asperiores sint! Laborum deleniti at id.
    Assumenda amet quod, ut eum ad consequatur sit commodi voluptatem necessitatibus sequi aliquam voluptates dicta cumque iure facilis, autem quas suscipit harum ullam eaque at adipisci rerum molestiae. Rerum, dolor?`,
    link: "Learn more"

  },
  {
    name:" React Developer",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eaque itaque fugiat, suscipit rem culpa aut nulla esse, architecto amet magni iusto natus, voluptatibus asperiores sint! Laborum deleniti at id.
    Assumenda amet quod, ut eum ad consequatur sit commodi voluptatem necessitatibus sequi aliquam voluptates dicta cumque iure facilis, autem quas suscipit harum ullam eaque at adipisci rerum molestiae. Rerum, dolor?`,
    link: "Learn more"

  },
  {
    name:"MERN Stack developer",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eaque itaque fugiat, suscipit rem culpa aut nulla esse, architecto amet magni iusto natus, voluptatibus asperiores sint! Laborum deleniti at id.
    Assumenda amet quod, ut eum ad consequatur sit commodi voluptatem necessitatibus sequi aliquam voluptates dicta cumque iure facilis, autem quas suscipit harum ullam eaque at adipisci rerum molestiae. Rerum, dolor?`,
    link: "Learn more"
  },
  {
    name:"API Documentaiton",
    desc: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus eaque itaque fugiat, suscipit rem culpa aut nulla esse, architecto amet magni iusto natus, voluptatibus asperiores sint! Laborum deleniti at id.
    Assumenda amet quod, ut eum ad consequatur sit commodi voluptatem necessitatibus sequi aliquam voluptates dicta cumque iure facilis, autem quas suscipit harum ullam eaque at adipisci rerum molestiae. Rerum, dolor?`,
    link: "Learn more"
  },
]
function Services() {

  return (
    <section className='section h-screen mt-36 'id='sevices'>
    <div className='container mx-auto'>
      <div className='flex flex-col lg:flex-row  '>
      <motion.div
        variants={fadeIn("right", 0.5)}
        viewport={{ once: false, amount: 0.3 }}
        initial="hidden"
        whileInView={"show"}
        className='flex-1 lg:bg-services lg:bg-bottom bg-no-repeat mix-blend-lighten mb-12 lg:mb-0'
      >
        <h2 className='h2 text-sky-500 mb-6'>Who am I ?</h2>
        <h3 className='h3 max-w-[455px] mb-6 '>I am a Freelance Full-Stack devleloper with 1 year expreance</h3>
        <img src={img3} alt="" className='size-64' />
        <button className='btn btn-sm mt-3'>See My projects </button>
      </motion.div>

      <motion.div
       variants={fadeIn("right", 0.5)}
       viewport={{ once: false, amount: 0.3 }}
       initial="hidden"
       whileInView={"show"}
      
      >
        <div>
          {sevices.map((item, idx) => {
            const {name, desc, link} = item
            return (
              <div key={idx} className='flex border-b border-white/20 h-[130px] mb-4 '>
                <div className='max-w-[456px] overflow-hidden gap-x-6'>
                  <h4 className='text-xl tracking-wide font-primary font-semibold'>
                    {name}
                  </h4>
                  <p className='font-secondary leading-tight mt-2 text-gray-300'>
                  {desc}
                    
                  </p>

                </div>
                <div className='flex flex-col flex-1 items-end'>
                  <a href="#" className='btn w-9 h-9 flex items-center justify-center'>
                    <BsArrowRight/>
                  </a>
                  <a href="" className='text-sm  '>{link} </a>
                </div>

              </div>
            )
          })}
        </div>
      </motion.div>
      </div>
    </div>
    </section>
  )
}

export default Services
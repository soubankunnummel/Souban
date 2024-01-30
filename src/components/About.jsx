import React from "react";
import CountUp from 'react-countup';
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img4 from '../img/img4.jpg'

function About() {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className="section lg:48 " id="about" ref={ref}>
      <div className="container mx-auto">
        <div
          className="flex lg:flex-row flex-col lg:justify-between gap-y-10 lg:gap-y-0
        gap-x-0 lg:gap-x-20 h-screen"
        >
          <motion.div
           variants={fadeIn("left", 0.5)}
           initial="hidden"
           whileInView={"show"}
           className="flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten
           bg-top
           "
          >
           <img src={img4} alt="" />
          </motion.div>
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            className="flex-1 text-sky-500 lg:text-left text-center"
          >
            <h2 className="h2 text-sky-500">About Me</h2>
            <h2 className="h3 mb-4 text-white">I am a Freelance Full-Stack devleloper with 1 year expreance</h2>
            <p>As a seasoned Freelance Full-Stack Developer with one year of diverse experience, I specialize in the MEAN stack.
               Currently engaged in a live project at Kodlar Innovations, I employ Agile methodology for efficient development. With two successful full-stack projects under my belt, I bring a wealth of expertise in creating dynamic and innovative web solutions.</p>

            <div className="flex lg:justify-start justify-center lg:text-left text-center items-center gap-x-6 lg:gap-x-10 font-primary">
              <div className="text-[40px] tracking-[2px] text-sky-500 mb-2
              font-semibold
              ">
                {inView ? <CountUp start={0} end={1} duration={4} />: null}
              </div>

              <div className=" text-sm tracking-[2px] text-white">
                Year of <br />Exprereans

              </div>
              <div className="text-[40px] tracking-[2px] text-sky-500 mb-2
              font-semibold
              ">
                {inView ? <CountUp start={0} end={2} duration={4} />: null}
              </div>

              <div className=" text-sm tracking-[2px] text-white">
                Project <br /> conpleted

              </div>
              {/* <div className="text-[40px] tracking-[2px] text-sky-500 mb-2
              font-semibold
              ">
                {inView ? <CountUp start={0} end={1} duration={4} />: null}
              </div>

              <div className=" text-sm tracking-[2px] text-white">
                Satisfied <br /> Clinets

              </div> */}
             

             

            </div>
            <div className="flex lg:justify-start justify-center my-4  gap-x-8  items-center">
            <button className="btn btn-lg">
              <a href="mailto:your.souban.san@gmail.com">Contact me</a>
            </button>
            <a href="">My Portfolio</a>
            </div>
             </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;

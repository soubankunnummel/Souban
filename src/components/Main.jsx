import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { fadeIn } from "../variants";
import { FaGithub, FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import img1 from "../img/img0.jpeg";

function Main() {
  return (
    <section
      className="section min-h-[85vh] lg:min-h-[70vh] flex items-center "
      id="home"
    >
      <div className="container mx-auto lg:-mt-28 mt-8">
        <div className="flex flex-col lg:items-center lg:flex-row gap-y-8 lg:gap-y-0 ">
          <div className="flex-1 text-center font-secondary lg:text-left">
            <motion.h1
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="text-2xl font-bold leading-[0.8] lg:text-4xl "
            >
              MUHAMMED <span>SOUBAN</span>
            </motion.h1>

            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="md-6 mt-2 font-primary text-[36px] lg:text-[60px] uppercase leading-[1] font-semibold "
            >
              <span className="mr-4">I'am</span>
              <TypeAnimation
                sequence={[
                  "Freelance Developer",
                  2000,
                  "Full stack Developer",
                  2000, 
                  "MERN stck Developer",
                  2000,
                  "FrondEnd Developer",
                  2000,
                ]}
                speed={50}
                className="text-sky-500"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
            <motion.p
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-8 max-w-lg mx-auto lg:mx-0 font-thin"
            >
              I am a self-taught developer who has a passion for solving digital
              problems with cutting-edge technologies. I have a knack for web
              development and a thirst for learning more about scalable and
              distributed systems. I also value writing code that is clear and
              easy to maintain.
            </motion.p>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex max-w-max mx-auto lg:mx-0 items-center gap-x-8 mb-12"
            >
              <button className="btn btn-lg">Contact me</button>
              <a  href="">My Portfolio</a>
            </motion.div>
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="flex items-center gap-x-4 max-w-max lg:mx-0 mx-auto"
            >
              <a target="_blank" href="https://www.instagram.com/souban_kunnummel/">
                <FaInstagram className="text-2xl" />
              </a>
              <a target="_blank" href="https://github.com/soubankunnummel">
                <FaGithub className="text-2xl" />
              </a>
              <a target="_blank" href="https://www.linkedin.com/in/muhammedsouban/">
                <FaLinkedin className="text-2xl" />
              </a>
              <a target="_blank" href="https://wa.me/9072925095?text=Hello%20from%20your%20website">
                <FaWhatsapp className="text-2xl" />
              </a>
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="lg:flex hidden flex-1 max-w-[320px] lg:mx-w-[480px]  "
          >
            <img src={img1} alt="img" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Main;

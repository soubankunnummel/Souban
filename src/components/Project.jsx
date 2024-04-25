import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import img5 from "../img/img5.png";
import img6 from "../img/img6.png";
import img8 from "../img/img8.jpeg";

import React from "react";

function Project() {
  return (
    <section id="project" className="section h-full lg:mt-0 mt-[50%] ">
      <div className="container mx-auto">
        <div className="flex lg:flex-row flex-col gap-x-10">
          <motion.div
            variants={fadeIn("right", 0.3)}
            viewport={{ once: false, amount: 0.3 }}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col flex-1 gap-y-12 mb-10 lg:mb-0"
          >
            <div>
              <h2 className="h2 leading-tight">
                My last <br /> works
              </h2>
              <p className="max-w-sm mb-16 ">
                Engineered a vibrant Full Stack social media platform and a
                powerful Redwood.js e-commerce application, showcasing my
                versatility and expertise in web development.
              </p>
              <button className="btn btn-sm ">
                <a  target="_blank" href="https://github.com/soubankunnummel?tab=repositories">
                  See My Projects
                </a>
              </button>
            </div>

            <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
              <div
                className="group-hover bg-black/70 z-40 w-full h-full absolute
                transition-all duration-300 cursor-pointer
                "
              ></div>
              <img
                src={img5}
                alt=""
                className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
              />

              <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                <span className="text-sky-500 lg:text-3xl text-2xl">
                  Web Development
                </span>
              </div>
              <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50 ">
                <span className="text-white lg:text-4xl text-2xl">Redwood</span>
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", 0.3)}
            viewport={{ once: false, amount: 0.3 }}
            initial="hidden"
            whileInView={"show"}
            className="flex flex-col flex-1 lg:gap-y-24 gap-y-10 "
          >
            <div className="relative overflow-hidden  border-2 border-white/50 rounded-xl">
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
                <div
                  className="group-hover bg-black/70 z-40 w-full h-full absolute
                transition-all duration-300 cursor-pointer
                "
                ></div>
                <img
                  src={img6}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
                />

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                  <span className="text-sky-500 lg:text-3xl text-2xl">
                    Web Development
                  </span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50 ">
                  <span className="text-white lg:text-4xl text-2xl">
                    TalkFlow
                  </span>
                </div>
              </div>
            </div>
            <div className="relative overflow-hidden  border-2 border-white/50 rounded-xl">
              <div className="group relative overflow-hidden  border-2 border-white/50 rounded-xl">
                <div
                  className="group-hover bg-black/70 z-40 w-full h-full absolute
                transition-all duration-300 cursor-pointer
                "
                ></div>
                <img
                  src={img8}
                  alt=""
                  className="group-hover:scale-125 transition-all duration-500 cursor-pointer"
                />

                <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50 ">
                  <span className="text-sky-500 lg:text-3xl text-2xl">
                    Web Development
                  </span>
                </div>
                <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-500 z-50 ">
                  <span className="text-white lg:text-4xl text-2xl">
                    Project Title
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Project;

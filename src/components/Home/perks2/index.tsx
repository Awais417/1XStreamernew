"use client";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
const Perks2 = () => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const TopAnimation = {
    initial: { y: "-100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "-100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };

  const bottomAnimation = {
    initial: { y: "100%", opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : { y: "100%", opacity: 0 },
    transition: { duration: 0.6, delay: 0.4 },
  };


  return (
    <section className="pb-28  relative">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center">
         <div ref={ref} className="grid grid-cols-12 items-center">
            <motion.div
            {...bottomAnimation}
            className="lg:col-span-7 col-span-12 lg:text-left"
          >
            <p className="sm:text-40 text-30 text-white">
              Step <span className="text-primary">2</span> :
            </p>
            <h2 className="sm:text-40 text-30 text-white lg:w-full md:w-70% font-medium">
              Bet behind the streamer
            </h2>
              <p className="sm:text-28 text-18 text-white">
              Place a bet to team up and “bet behind” the streamer for a chance to win together.<br/><span className="text-primary">If the streamer wins</span>,<br/> the players win.
            </p>
          </motion.div>
          <motion.div {...TopAnimation} className="lg:col-span-5 col-span-12">
            <div className="2xl:-mr-40 mt-9 flex justify-center">
              <Image
               src= "/images/Step2.png"
                alt="image"
                width={600}
                height={425}
                className="lg:w-full"
              />
            </div>
          </motion.div>
        </div>
            
        </div>
      </div>
        {/* <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div> */}
    </section>
  );
};

export default Perks2;

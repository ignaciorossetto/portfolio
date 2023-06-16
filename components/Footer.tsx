import React from "react";
import SocialButton from "./SocialButton";
import Whatsapp from "../public/whatsapp.svg";
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.div
    initial="initial"
    whileInView="animate"
    variants={PreviewAnimation}
    >
      <div className='h-[20rem] mb-5 bg-[url("/gradient-bg.jpg")] bg-cover bg-center rounded-3xl p-10 flex flex-col gap-10 justify-center items-center'>
        <h1 className="font-semibold text-4xl">Ignacio Rossetto</h1>
        <a
          className="font-semibold text-xl sm:text-3xl hover:scale-105 duration-200 hover:text-slate-600 "
          href="mailto:ignaciorossetto@hotmail.com?subject=Contact%20from%20portfolio"
        >
          ignaciorossetto@hotmail.com
        </a>
        <a className="flex items-center hover:scale-105 duration-200 hover:text-slate-600" href="https://api.whatsapp.com/send?phone=543516330434"
            target="_blank">
          <SocialButton bgColor="whatsapp">
            <Whatsapp className="w-5 h-5" />
            
          </SocialButton>
          <p
            className="font-semibold text-xl sm:text-3xl"
            
          >+54 351 6330434</p>
        </a>
      </div>
    </motion.div>
  );
};

const PreviewAnimation = {
  initial: {
      y:30,
      opacity: 0,
      scale: 0.9
  },
  animate: {
      y:0,
      opacity:1,
      scale: 1,
      transition: {
          ease: [0.6, 0.01, 0.05, 0.95],
          duration: 0.5,
      }
  }
}

export default Footer;

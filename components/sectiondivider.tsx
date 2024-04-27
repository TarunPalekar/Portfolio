"use client";
import React from 'react'
import {motion} from "framer-motion"

export default function Sectiondivider() {
  return (
    <motion.div className="bg-gray-200 my-24 h-  rounded-full sm: dark:bg-opacity-20 "
    initial={{opacity:0, y:100}}
    animate={{opacity:1, y:0}}
    transition={{delay:0.125}}
    >
    
    </motion.div>
  )
}

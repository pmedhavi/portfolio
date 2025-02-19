import React from 'react'
import {CONTACT} from '../constants'
import { motion } from 'framer-motion'
const Contact = () => {
  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h2 whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.0}} className='my-10 text-center text-4xl'>Get in touch with me</motion.h2>
        <motion.div whileInView={{opacity:1,y:0}} initial={{opacity:0,y:-100}} transition={{duration:1.5}} className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${CONTACT.email}`} target="_blank" rel="noopener noreferrer" className='border-b'>
            {CONTACT.email}
            </a>

        </motion.div>
    </div>
  )
}

export default Contact
import React from 'react'
import { motion as m } from 'framer-motion'

type Props = {}

const About = ({ }: Props) => {
    return (
        <div className='flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center h-screen'>
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>About</h3>

            <m.img
                initial={{
                    x: -200,
                    opacity: 0,
                }}
                whileInView={{
                    x: 0,
                    opacity: 1,
                }}
                transition={{
                    duration: 1.2,
                    ease: 'easeInOut'
                }}
                // viewport={{ once: true }}
                className='-mb-20 md:mb-0 flex-shrink-0 rounded-full object-cover w-[180px] md:rounded-lg md:w-64 xl:w-[500px]'
                src='https://avatars.githubusercontent.com/u/91784445?v=4'
                alt='Wasath Image About'
            />

            <div className='space-y-10 px-0 md:px-10 '>
                <h4 className='text-4xl font-semibold '>Here is a <span className='underline decoration-[#F7AB0A]/50'> little</span> background</h4>
            </div>
        </div>
    )
}

export default About
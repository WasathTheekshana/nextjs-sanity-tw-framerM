import { motion as m } from 'framer-motion'
import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({ }: Props) {
    return (
        <header className='p-5 sticky top-0 flex flex-row items-start justify-between max-w-7xl mx-auto z-20 xl:items-center '>
            <m.div
                initial={{
                    x: -500,
                    opacity: 0,
                    // scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    // scale: 1,
                }}
                transition={{
                    duration: 1.5,
                    ease: 'easeInOut'
                }}
                className='flex flex-row items-center'>
                {/* Social Icons */}
                <SocialIcon
                    url='https://www.youtube.com/wasaththeekshana'
                    target="_blank"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.youtube.com/wasaththeekshana'
                    target="_blank"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <SocialIcon
                    url='https://www.youtube.com/wasaththeekshana'
                    target="_blank"
                    fgColor='gray'
                    bgColor='transparent'
                />
            </m.div>

            <m.div
                initial={{
                    x: 500,
                    opacity: 0,
                    // scale: 0.5,
                }}
                animate={{
                    x: 0,
                    opacity: 1,
                    // scale: 1,
                }}
                transition={{
                    duration: 1.5,
                    ease: 'easeInOut'
                }}
                className='flex flex-row items-center cursor-pointer text-gray-300'>
                <SocialIcon
                    className='cursor-pointer'
                    network='email'
                    target="_blank"
                    fgColor='gray'
                    bgColor='transparent'
                />
                <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get In Touch</p>
            </m.div>
        </header>
    )
}

export default Header
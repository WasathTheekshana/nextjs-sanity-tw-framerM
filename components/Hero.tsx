import Link from 'next/link'
import React from 'react'
import { Typewriter, Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function Hero({ }: Props) {

    const [text, count] = useTypewriter({
        words: [
            "It's me Wasath",
            "The guy who loves coding",
            "loves .tsx than .girlfriend"
        ],
        loop: true,
        delaySpeed: 2000,
    })

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://avatars.githubusercontent.com/u/91784445?v=4"
                alt="Wasath Image"
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[10px]'>Software Engineer</h2>
                <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor='#F7AB0A' />
                </h1>

                <div className='pt-5'>
                    <Link href={"#about"}>
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href={"/about"}>
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href={"/about"}>
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href={"/about"}>
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero
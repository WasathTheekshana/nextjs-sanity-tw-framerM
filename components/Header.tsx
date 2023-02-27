import React from 'react'
import { SocialIcon } from 'react-social-icons'

type Props = {}

function Header({ }: Props) {
    return (
        <header>
            <div>
                {/* Social Icons */}
                <SocialIcon
                    url='https://www.youtube.com/wasaththeekshana'
                    target="_blank"
                    fgColor='gray'
                    bgColor='transparent'
                />
            </div>
        </header>
    )
}

export default Header
"use client"
import Link from 'next/link';
import React, { ReactNode } from 'react';

interface Props {
    children: ReactNode;
    bgColor?: string | undefined;
    url?: string | undefined;
}

const SocialButton: React.FC<Props> = ({children, bgColor= 'black', url= '/#'}) => {
    let bgHoverColorClass

    switch (bgColor) {
        case 'instagram':
            bgHoverColorClass = 'hover:bg-instagram'
            break;
        case 'twitter':
            bgHoverColorClass = 'hover:bg-twitter'
            break;
        case 'linkedin':
            bgHoverColorClass = 'hover:bg-linkedin'
            break;
        case 'whatsapp':
            bgHoverColorClass = 'hover:bg-whatsapp'
            break;
        case 'url':
            bgHoverColorClass = 'hover:bg-white hover:scale-110 active:scale-100 duration-200 transition-all'
            break;
        default:
            bgHoverColorClass = 'hover:bg-black'
            break;
    }


  return (
    <Link href={url} className={`group h-12 w-12 bg-white ${bgHoverColorClass} rounded-full transition-colors duration-200 ease-in-out flex justify-center items-center`}>
        <div className='fill-black group-hover:fill-white  transition-colors duration-200 ease-in-out ' >
            {children}
        </div>
    </Link>
  )
}

export default SocialButton
"use client"
import React from 'react'
import Arrow from '../public/arrow.svg'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface Props {
    name?: string | undefined;
    description?: string | undefined;
    imageUrl?: string | undefined;
    bgColor?: string | undefined;
    dark?: boolean | undefined;
    url?: string | undefined;
    bgPosition?: string | undefined,
    id: number
}


const ProjectPreview: React.FC<Props> = ({
    name= "Block name",
    description= "This is an amazing app",
    imageUrl= "/project-1.png",
    bgColor= "#e4e4e7",
    dark= false,
    url='/',
    bgPosition= 'bg-bottom',
    id
}) => {
    const router = useRouter()
    const handleClick = () => {
        router.push(`/project/${id}`)
    }
  return (
    <motion.div 
    className={`h-[32rem] rounded-3xl overflow-hidden ${dark ? 'dark' : ''} cursor-pointer`}
    style={{background: `${bgColor}`}}
    initial="initial"
    whileInView="animate"
    variants={PreviewAnimation}
    viewport={{ once: true }}
    onClick={handleClick}
    >
        <div 
        className={`w-full h-full px-10 py-6 duration-[500ms] transition-all ease-in-out scale-100 hover:scale-110 bg-contain bg-no-repeat ${bgPosition}`}
        style={{backgroundImage: `url(${imageUrl})`}}
        >
        <div className='flex justify-between'>
            <div>
                <h2 className='font-medium text-lg dark:text-white'>{name}</h2>
                <p className='text-sm text-zinc-700 dark:text-zinc-300'>{description}</p>
            </div>
            <Link href={url} className='h-12 w-12 bg-white rounded-full flex justify-center items-center transition-all duration-150 hover:scale-105  cursor-pointer'>
                <Arrow className='h-5 w-5  '/>
            </Link >
            </div>
        </div>
    </motion.div>
  )
}

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
            duration: 0.8,
        }
    }
}

export default ProjectPreview
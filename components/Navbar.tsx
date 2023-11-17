"use client"
import Link from 'next/link'
import React, { useReducer } from 'react'
import reducer from '../hooks/navBarButtonsReducer'
import { useRouter } from 'next/router'

const initialState = {
    home: true,
    projects: false,
    contact: false
}

const Navbar = ({type='home'}) => {

const [state, dispatch] = useReducer(reducer, initialState)
const router = useRouter()

const handleHomeClick = () => {
  if (type === 'home') {
    return dispatch({type: 'home'})
  }
  else{
    router.push('/')
  }
}


  return (
    <nav className='flex sticky top-0 bg-white z-10  flex-col justify-between py-4 px-2 md:flex-row '>
        <div className='flex items-center gap-{1ch}'>
            <div className='w-5 h-5 bg-yellow-400 rounded-full'/>
            <span className='text-sm font-semibold tracking-widest ml-1'>PORTFOLIO</span>
        </div>
        <div className='flex gap-12 text-md text-zinc-400  mt-3 justify-center items-center'>
            <Link 
            href='/' 
            className={`${state.home ? 'text-black font-medium ' : 'hover:underline'} scroll-smooth`}
            onClick={handleHomeClick}
            >Home</Link>
            
            {
              type === 'home' ? <>
            <Link 
            href='#projectsSection' 
            className={`${state.projects ? 'text-black font-medium ' : 'hover:underline'} scroll-smooth`}
            onClick={()=> dispatch({type: 'projects'})}
            >Projects</Link>
            <Link 
            href='#footerSection' 
            className={`${state.contact ? 'text-black font-medium ' : 'hover:underline'} scroll-smooth`}
            onClick={()=> dispatch({type: 'contact'})}
            >Contact</Link>
            </> :
              <Link href='https://api.whatsapp.com/send?phone=+543516330434&text=Hi+Ignacio%21+I+followed+your+portfolio+link.' className="text-white bg-black py-3 px-12 rounded-full font-medium  hover:scale-110 duration-200">Contact me</Link>
          }
        </div>
    </nav>
  )
}

export default Navbar
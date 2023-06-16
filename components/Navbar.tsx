import Link from 'next/link'
import React, { useReducer } from 'react'
import reducer from '../hooks/navBarButtonsReducer'

const initialState = {
    home: true,
    projects: false,
    contact: false
}

const Navbar = () => {

const [state, dispatch] = useReducer(reducer, initialState)


  return (
    <nav className='flex flex-col justify-between py-4 px-2 md:flex-row '>
        <div className='flex items-center gap-{1ch}'>
            <div className='w-5 h-5 bg-yellow-400 rounded-full'/>
            <span className='text-sm font-semibold tracking-widest ml-1'>PORTFOLIO</span>
        </div>
        <div className='flex gap-12 text-md text-zinc-400  mt-3 justify-center'>
            <Link 
            href='#' 
            className={`${state.home ? 'text-black font-medium ' : 'hover:underline'}`}
            onClick={()=> dispatch({type: 'home'})}
            >Home</Link>
            <Link 
            href='#' 
            className={state.projects ? 'text-black font-medium ' : 'hover:underline'}
            onClick={()=> dispatch({type: 'projects'})}
            >Projects</Link>
            <Link 
            href='#' 
            className={state.contact ? 'text-black font-medium ' : 'hover:underline'}
            onClick={()=> dispatch({type: 'contact'})}
            >Contact</Link>
        </div>
    </nav>
  )
}

export default Navbar
"use client"
import React, { useEffect, useState } from 'react'
import { projects } from '../../../../utils/projects'
import { Project } from '../../../../types/types'
import {useSearchParams} from 'next/navigation'
import Navbar from '../../../../components/Navbar'
import ImageSlider from '../../../../components/imageSlider/ImageSlider'
import Footer from '../../../../components/Footer'
import Link from 'next/link'
import Url from '../../../../public/url.svg';
import SocialButton from '../../../../components/SocialButton'
import Github from '../../../../public/github.svg';

const Index = () => {
    const [project, setProject] = useState<Project>()
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
    useEffect(()=> {
        const proj = projects.filter((p)=> p.id === Number(id))
        setProject(proj[0])
    }, [])
  return (
    <div>
        <Navbar type='project'/>
        <section className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-10 lg:gap-0 lg:gap- mb-10 lg:mt-10">
        <div className="relative h-auto sm:h-[20rem] lg:h-[30rem] rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <h1 className="text-4xl font-semibold">{project?.title}</h1>
          <p className="flex-1 ">{project?.description}</p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end absolute bottom-[-25px] right-[45%]">
            <div className="flex justify-center items-center gap-4 w-full top-0">
              <SocialButton bgColor="url" url={project?.projectUrl.frontend.url!}>
                <Url className='w-7 h-7'/>
              </SocialButton>
            </div>
          </div>
        </div>
        <div className=" rounded-3xl w-full ">
            <ImageSlider images={project?.imageArray || ['']}/>
        </div>
      </section>
        <section className="grid grid-cols-1  gap-10 mb-10 lg:mt-10">
        <div className="h-auto rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
            {project?.projectUrl?.frontend?.repository && 
            <div>
              <Link href={project?.projectUrl?.frontend?.repository! || ''} className='flex gap-5 text-[20px] font-semibold items-center'>
                <Github /> Frontend repo
              </Link>
              <Link href={project?.projectUrl?.frontend?.url! || ''} className='flex gap-5 text-[20px] font-semibold items-center'>
                <Url /> Frontend url
              </Link>
            </div>
            }
            {project?.projectUrl?.backend?.repository && 
            <div>
              <Link href={project?.projectUrl?.frontend?.repository! || ''} className='flex gap-5 text-[20px] font-semibold items-center '>
                <Github /> Backend repo
              </Link>
              <Link href={project?.projectUrl?.frontend?.url! || ''} className='flex gap-5 text-[20px] font-semibold items-center'>
                <Url /> Backend api
              </Link>
            </div>
            }
          </div>
        </div>
      </section>
        <Footer />
    </div>
  )
}

export default Index
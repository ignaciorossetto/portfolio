"use client"
import Head from "next/head";
import Navbar from "../../components/Navbar";
import SocialButton from "../../components/SocialButton";
import Instagram from '../../public/instagram.svg';
import Twitter from '../../public/twitter.svg';
import Linkedin from '../../public/linkedin.svg';
import Whatsapp from '../../public/whatsapp.svg';
import ProjectPreview from "../../components/ProjectPreview";
import Footer from "../../components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>My portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <section className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-4 mb-4">
        <div className="h-auto sm:h-[30rem] rounded-3xl p-10 flex flex-col gap-16 bg-[url('/gradient-bg.jpg')] bg-cover">
          <h1 className="text-4xl font-semibold">Hi there! My name is Ignacio Rossetto. MERN stack dev =)</h1>
          <p className="flex-1 ">Passionate and ambitious junior developer, skilled in <span className="font-bold"> MongoDB, MySQL, Express, Next, React, and Node.js.</span> Committed to building responsive web applications with clean code and a user-centric approach. Excited to tackle new challenges, learn from experienced developers, and contribute my creativity to dynamic projects. Let's build something remarkable together!</p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
            <Link href='https://api.whatsapp.com/send?phone=+543516330434&text=Hi+Ignacio%21+I+followed+your+portfolio+link.' className="text-white bg-black py-3 px-12 rounded-full font-medium  hover:scale-110 duration-200">Contact me</Link>
            <div className="flex items-center gap-4">
              <SocialButton bgColor="instagram" url="https://www.instagram.com/ignaciorossetto/">
                <Instagram className='w-5 h-5'/>
              </SocialButton>
              <SocialButton bgColor="twitter" url="https://twitter.com/RossettoIgnacio">
                <Twitter className='w-5 h-5'/>
              </SocialButton>
              <SocialButton bgColor="linkedin" url="https://www.linkedin.com/in/ignaciorossetto/">
                <Linkedin className='w-5 h-5'/>
              </SocialButton>
              <SocialButton bgColor="whatsapp" url="https://api.whatsapp.com/send?phone=+543516330434&text=Hi+Ignacio%21+I+followed+your+portfolio+link.">
                <Whatsapp className='w-5 h-5'/>
              </SocialButton>
            </div>
          </div>
        </div>
        <div className="h-[30rem] rounded-3xl p-8 bg-[url('/profile1.jpg')] bg-cover bg-center"/>
      </section>
      <section id="projectsSection" className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <ProjectPreview
        name="Pet Sitter Finder"
        description="MERN stack next.js webapp + tailwind + socket"
        imageUrl="DESKTOMOCKUPPF.png"
        bgColor="#6858e8"
        dark
        url="https://www.petsitterfinder.com.ar/"
        />
        <ProjectPreview
        name="Pet Sitter Finder Frontend repo"
        description="Github repo"
        imageUrl="DESKTOPMOCKUPPF02.png"
        bgColor="#41525e"
        dark
        url="https://github.com/ignaciorossetto/petsitter_frontend_nextjs"
        />
        
        <ProjectPreview
        name="Pet Sitter Finder Backend repo"
        description="Next 13 webapp"
        imageUrl="SMARTPHONE.png"
        bgColor="#7f7f7f"
        dark
        url='https://github.com/ignaciorossetto/petsitter_backend'
        />
        <ProjectPreview
        name="Promptopia"
        description="Next 13 webapp"
        imageUrl="project-2.png"
        bgColor="#007ace"
        dark
        url="https://promtopia-kohl.vercel.app/"
        />
      </section>
      <Footer />
    </>
  );
}

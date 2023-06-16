import Head from "next/head";
import Navbar from "../../components/Navbar";
import SocialButton from "../../components/SocialButton";
import Instagram from '../../public/instagram.svg';
import Twitter from '../../public/twitter.svg';
import Linkedin from '../../public/linkedin.svg';
import Whatsapp from '../../public/whatsapp.svg';
import ProjectPreview from "../../components/ProjectPreview";
import Footer from "../../components/Footer";

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
          <p className="flex-1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ipsa libero recusandae eum dicta quibusdam sequi, vel consectetur id explicabo!</p>
          <div className="flex flex-col lg:flex-row items-center gap-4 justify-self-end">
            <button className="text-white bg-black py-3 px-12 rounded-full font-medium  hover:scale-110 duration-200">Contact me</button>
            <div className="flex items-center gap-4">
              <SocialButton bgColor="instagram" >
                <Instagram className='w-5 h-5'/>
              </SocialButton>
              <SocialButton bgColor="twitter">
                <Twitter className='w-5 h-5'/>
              </SocialButton>
              <SocialButton bgColor="linkedin">
                <Linkedin className='w-5 h-5'/>
              </SocialButton>
              <SocialButton bgColor="whatsapp">
                <Whatsapp className='w-5 h-5'/>
              </SocialButton>
            </div>
          </div>
        </div>
        <div className="h-[30rem] rounded-3xl p-8 bg-[url('/profile2.jpg')] bg-cover bg-center"/>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-4 my-4">
        <ProjectPreview
        name="Pet Sitter Finder"
        description="MERN stack webapp"
        imageUrl="project-3.png"
        />
        <ProjectPreview/>
        <ProjectPreview/>
        <ProjectPreview/>
        <ProjectPreview/>
        <ProjectPreview/>
        <ProjectPreview/>
      </section>
      <Footer />
    </>
  );
}

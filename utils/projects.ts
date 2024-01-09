import { Project } from "../types/types"


export const projects: Project[] = [
    {
        id: 1,
        title: 'Karam hecho a mano',
        description: 'Karam Hecho a Mano is a MERN stack web app that showcases and sells handcrafted clothes and bedclothes. It features a responsive design, a user-friendly interface, a secure payment system, and a dynamic inventory management. Karam Hecho a Mano is a perfect choice for anyone who appreciates quality and originality',
        stack: 'MERN stack webapp + firebase + mercadopago // fullresponsive',
        imageArray: ['/khm/webapp-portada2.png', '/khm/khm-checkout-responsive.png', '/khm/webapp-one-order.png', '/khm/responsive-products-view.png'],
        projectUrl: {
            frontend: {
                url:'https://karamhechoamano.vercel.app',
                repository: 'https://github.com/ignaciorossetto/khm-frontend'
            } ,
            backend: {
                url: 'https://khm-backend.onrender.com',
                repository: 'https://github.com/ignaciorossetto/khm-backend'
            } 
        },
        bgColor: "#41525e",
        bgPosition: 'bg-bottom'
    },
    {
        id: 2,
        title: 'Pet Sitter Finder',
        description: 'PetSitterFinder is a MERN stack web app that connects pet owners with reliable and rated pet sitters in their area. It uses websockets, firebase, and geolocation to enable real-time communication, authentication, and location-based services. Pet owners can also buy pet supplies and schedule pet walks through the app. PetSitterFinder is a convenient and secure solution for pet care',
        stack: 'MERN stack next.js webapp + tailwind + socket',
        imageArray: ['/psf/DESKTOMOCKUPPF.png', '/psf/DESKTOPMOCKUPPF02.png', '/psf/SMARTPHONE.png'],
        projectUrl: {
            frontend: {
                url:'https://www.petsitterfinder.com.ar/',
                repository: 'https://github.com/ignaciorossetto/petsitter_frontend_nextjs'
            } ,
            backend: {
                url: 'https://petsitterfinder-backend.onrender.com',
                repository: 'https://github.com/ignaciorossetto/petsitter_backend'
            } 
        },
        bgColor: "#6858e8",
        bgPosition: 'bg-center'
    },
    {
        id: 4,
        title: 'Supply Construction Prices',
        description: 'Construction supplies prices (CSP) is a full stack web app that tracks and records the prices of construction supplies in Argentine pesos and US dollars. It uses express, node, mysql2, sequelize, and vite to create a fast, scalable, and secure app. CSP helps users to get accurate quotes for their construction projects and to monitor the inflation and exchange rate fluctuations in Argentina. CSP is a useful and relevant tool for the construction industry.',
        stack: 'Vite - React - Nodejs - Sequelize - tailwind',
        imageArray: ['/csp/csp-login-deskt.png', '/csp/csp-budg-deskt.png', '/csp/csp-sup-deskt.png', '/csp/csp-sups-deskt.png'],
        projectUrl: {
            frontend: {
                url:'https://csp-frontend.vercel.app/',
                repository: 'https://github.com/ignaciorossetto/csp_frontend'
            } ,
            backend: {
                url: 'https://csp-backend.onrender.com',
                repository: 'https://github.com/ignaciorossetto/csp_backend'
            } 
        },
        bgColor: "rgb(73 106 70)",
        bgPosition: 'bg-center'
    },
    {
        id: 5,
        title: 'LIVE',
        description: ' LIVE, a PWA web app powered by Next.js 14. Experience the thrill of Instagram Live simulation seamlessly with Tailwind CSS, React, and TypeScript.',
        stack: 'Next14 - React - Typescript - tailwind',
        imageArray: ['/live/LIVE.png'],
        projectUrl: {
            frontend: {
                url:'https://inst-live.vercel.app/',
                repository: 'https://github.com/ignaciorossetto/inst_live'
            } ,
            backend: {
                url: null,
                repository: null
            } 
        },
        bgColor: "#007ace",
        bgPosition: 'bg-center',
        bgSize: 'bg-60'
    },
    {
        id: 7,
        title: 'GROCERY SHOPPING LIST',
        description: 'GSL, a Progressive Web App built with Next.js 14, Tailwind, and TypeScript, simplifies grocery shopping. Enjoy a responsive and efficient experience, creating and managing your shopping list seamlessly on any device.',
        stack: 'Next14 - React - Typescript - tailwind',
        imageArray: ['/gsl/gsl-cellphone-view.png'],
        projectUrl: {
            frontend: {
                url:'https://grocery-list-gilt.vercel.app/',
                repository: 'https://github.com/ignaciorossetto/grocery_list'
            } ,
            backend: {
                url: null,
                repository: null
            } 
        },
        bgColor: "rgb(156 157 6)",
        bgPosition: 'bg-center',
        bgSize: 'bg-60'
    },
]
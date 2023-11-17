"use client"
import React from 'react'
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

type ImageType = {
    images: string[]
}

const ImageSlider = (props: ImageType) => {
    const [number, setNumber] = useState(0)
    const handleSliderClick = (mov:string) => {
        const maxLenght = props.images?.length
        let newNumber;
        if (mov==='r'){
            newNumber = number === 0 ? maxLenght-1 : number - 1
        } else {
            newNumber = number === maxLenght-1 ? 0 : number + 1
        }
        setNumber(newNumber)
    }

  return (
    <div className="imageContainer">
        <div className="imagenCont">
        {props.images?.length > 1 && <FontAwesomeIcon icon={faArrowAltCircleLeft} onClick={()=>handleSliderClick('l')} className='sliderArrow singleProdIcon'/>}
        {props.images?.length >= 0 && <Image loading="lazy" height={700} width={700} src={props.images[number]} alt="#" className="sliderImg h-[300px] sm:h-[500px] lg:h-[485px]"/> }
        {props.images?.length > 1 && <FontAwesomeIcon icon={faArrowAltCircleRight} onClick={()=>handleSliderClick('r')} className='sliderArrow singleProdIcon'/>}
        </div>
    </div>
  )
}

export default ImageSlider

"use client"
import Image from 'next/image'
import React, { useState } from 'react'

const SkillCard = ({item}) => {
    const [showColor,setShowColor]= useState(false);
  return (
    <div onMouseEnter={()=>setShowColor(true)} onMouseLeave={()=>setShowColor(false)} className=' skillCard text-center group duration-300  hover:border-default '>
        <Image src={showColor===true?item.hover:item.notHover} alt={item.skillName}/>
        <p className='text-white group-hover:font-bold '>{item.skillName}</p>
    </div>
  )
}

export default SkillCard
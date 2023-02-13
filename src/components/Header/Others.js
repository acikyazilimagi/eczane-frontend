import React from 'react'
import haritaLogo from "../../icons/afetHarita.svg"
import ioLogo from "../../icons/depremIO.svg"
import yardımLogo from "../../icons/depremYardım.svg"
import { useState } from 'react';

const Others = () => {
  const [isHovering, setIsHovering] = useState("");
  console.log(isHovering)

  const handleMouseOver = (event) => {
    setIsHovering(event.target.id);
  };
  const handleMouseOut = () => {
     setIsHovering("");
  };
  return (
    <div className='others'>
      <h4>Yardımcı Siteler:</h4>
      <div className='logo-container' onMouseOver={(event)=>handleMouseOver(event)}   onMouseOut={handleMouseOut}> 
        <a href='https://afetharita.com/'> <img id="harita"  src={haritaLogo} /> </a>
        <a href='https://deprem.io/'> <img id="io"      src={ioLogo} /> </a>
        <a href='https://depremyardim.com/'> <img id="yardim"  src={yardımLogo} /> </a>
      </div>
      {
       isHovering === "harita" ? <div className='description'>Depremzedeleri aramak ve yardım etmek için kullandığımız site.</div> :
       isHovering === "io" ? <div className='description'>Afetle ilgili çeşitli konularda bilgi almak için kullandığımız web sitesi.</div> : 
       isHovering === "yardim" ?  <div className='description'>Depremzedelere erzak yardımı için kullandığımız site.</div> : ""  
      }
    </div>
  )
}

export default Others
import React from 'react';
import { FiInstagram } from "react-icons/fi";
import { RiTwitterXLine, RiYoutubeFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <footer className='bg-amber-300 grid grid-cols-3 p-10'>
        <div>
            <ul>
                <li><a href="#">Menú</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Ubicaciones</a></li>
            </ul>
        </div>
        <div>
            <ul>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Terminos y condiciones</a></li>
                <li><a href="#">Métodos de pago</a></li>
                <li><a href="#">Trabaja con nosotros</a></li>
            </ul>
        </div>
        <div className='flex gap-x-5 justify-center'>
            <FiInstagram />
            <RiTwitterXLine />
            <RiYoutubeFill />
        </div>
      </footer>
    </>
  )
}

export default Footer
import React, { useState } from 'react';
import fastBurguerIcon from '../assets/icon.png';
import { IoCartOutline } from "react-icons/io5";

function Nav() {
  const cart = [
    { id: 1, nombre: "Hamburguesa Clásica", precio: 8.99 },
    { id: 2, nombre: "Papas Fritas", precio: 3.99 },
    { id: 3, nombre: "Refresco", precio: 2.50 },
    { id: 4, nombre: "malteada", precio: 4.50 },
    { id: 5, nombre: "Cheesebombs", precio: 1.50 },
  ]

    // Summation
    const total = cart.reduce((acc, product) => acc + product.precio, 0);

  return (
    <>
      <nav className='bg-amber-300 flex space-x-11 items-center px-6 justify-between'>
          <div>
            <a href="#"><img className='h-20' src={fastBurguerIcon} alt="Carrito de compras" /></a>
          </div>

          <div className='flex flex-1 justify-end space-x-8 text-lg font-semibold'>
            <a href="#">Menú</a>
            <a href="#">Blog</a>
            <a href="#">Eventos</a>
            <a href="">Ingresa/Registrate</a>
          </div>
          <div>
            <IoCartOutline className='text-4xl'/>
          </div>
      </nav>
      

      {/* Cambiar luego para poner funcionalidad */}
      <div className='flex flex-col items-end justify-end h-full'>
        <ul className=' overflow-y-auto space-y-2 bg-lime-200 p-5'>
          {cart.map((product) => (
            <li key={product.id}>
              <div>
                <h2>{product.nombre}</h2>
                <p>{product.precio.toFixed(2)}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Total */}
        <div className='flex justify-end bottom-0 bg-amber-900 text-amber-100 space-x-9.5 p-8'>
          <h2>Total:</h2> <p>${total.toFixed(2)}</p>
        </div>
      </div>

    </>
  );
};

export default Nav;
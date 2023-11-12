import React from 'react'
import Container from '../../elements/Container'
import img1 from '../../../assets/imgs/Burgers/LastProducts-1.jpg'
import img2 from '../../../assets/imgs/Burgers/LastProducts-2.jpg'
import img3 from '../../../assets/imgs/Burgers/LastProducts-3.jpg'

export default function LastProduct() {
  return (
    <Container>
        <div className='w-full h-96 my-20 px-11 grid grid-rows-2 grid-cols-2 gap-9 text-white'>

          <div className='bg-yellow-400 h-full row-span-2 rounded-md p-7 relative'>

            <img src={img1} alt='image du killer burger' className='absolute w-full h-full object-cover rounded-md z-0 top-0 right-0'/>

            <div className='z-10 relative'>
              <span className='block font-bold text-lg uppercase'>Killer Burger</span>
              <span className='text-2xl font-extrabold uppercase'>Birger le plus populaire</span>
            </div>
          </div>

          <div className='bg-yellow-500 h-full rounded-md p-7 relative'>

            <img src={img2} alt='image du Island Burger' className='absolute w-full h-full object-cover rounded-md z-0 top-0 right-0'/> 

            <div className='z-10 relative'>
              <span className='block font-bold text-lg uppercase'>Island Burger</span>
              <span className='block text-2xl font-extrabold'>plus de plaisir</span>
              <span className='text-2xl font-extrabold'>plus de gout</span>
            </div>
          </div>

          <div className='bg-yellow-600 h-full rounded-md p-7 relative'>

            <img src={img3} alt="image du Orlando's Burger" className='absolute w-full h-full object-cover rounded-md z-0 top-0 right-0'/>

            <div className='z-10 relative'>
              <span className='block font-bold text-lg uppercase'>Orlando's Burger</span>
              <span className='text-2xl font-extrabold'>frais et pimente</span>
            </div>
          </div>

        </div>
    </Container>
  )
}

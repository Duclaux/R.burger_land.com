import React from 'react'
import illustrion from '../../../assets/imgs/Background/bg-food.jpg'
import Container from '../../elements/Container'
import Header from './Header'
import Products from '../../../assets/imgs/HeroTop/burger-hero-top.png'
import Button from '../../elements/Button'

export default function HeroTop() {
  return (
    <div className='bg-primary w-full'>
      <div className='bg-repeat w-full h-full pb-40' style={{ backgroundImage:`url(${illustrion})` }}>
        <Container>
          {/* composant de navigation */}
          <Header />

          {/* composant de bbaniiere */}
          <div className='w-full relative mt-24'>

            <img src={Products} alt='Un hamburger en banniere' className='absolute z-0 -top-64 right-0 w-6/12' />

            <div className='absolute right-80 top-40 rounded-full bg-red-primary w-40 h-40 p-3 '>
              <div className='w-full h-full rounded-full border-dashed border-2 border-white text-white flex items-center justify-center'>
                <div className='text-center'>
                <span className='block font-extrabold'>
                  <span className='text-5xl'>5</span>.49$
                </span>
                <span className='tracking-widest uppercase text-sm'>seulement</span>
                </div>
              </div>
            </div>

            <div className='relative z-10 text-secondary uppercase'>
              <h1 className='mb-4 font-semibold'>C'est le moment de gouter au bon gout des hamburger</h1>
              <h2 className='font-secondary shadowTitleSecondary'>
                <span className='text-8xl block secondary'>Burger</span>
                <span className='text-6xl'>house</span>
                <span className='text-4xl ml-3'>click<span className='text-red-800'>&</span>collect</span>
              </h2>
            </div>

            <Button name='creer mon compte' theme='big' myClass='bg-secondary mt-5'/>
          </div>
        </Container>
      </div>

    </div>
  )
}

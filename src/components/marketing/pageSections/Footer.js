import React from 'react'
import Container from '../../elements/Container'
import Bg_Foot from '../../../assets/imgs/Background/bg-footer.jpg'
import { EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import Logo from '../../../assets/imgs/Logo/Logo-burger-house-white.svg'
import ImgFace from '../../../assets/svg/Icones/facebook-f-brands.svg'
import ImgInst from '../../../assets/svg/Icones/instagram-brands.svg'
import ImgTwitter from '../../../assets/svg/Icones/twitter-brands.svg'
import ImgWhatsapp from '../../../assets/svg/Icones/whatsapp-brands.svg'

export default function Footer() {
  return (
    <Container>
      
      <div className='relative mb-20 mt-32 p-5 text-white'>
        <img src={Bg_Foot} alt='un plan de travail' className=' bg-black absolute top-0 left-0 w-full h-full object-cover z-0'/>

        <div className='relative z-10 grid grid-cols-2 '>

            <div className='w-full p-5 mt-20 mb-28'>
                <img src={ Logo } alt='juste le logo' className='w-2/3'/>
                <p className='mt-10'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quibusdam explicabo similique, neque, maiores voluptate qui aspernatur reiciendis expedita vel nam nostrum ad. Quaerat, earum nam cumque distinctio voluptates obcaecati?</p>
            </div>

            <div className='h-full w-full flex flex-col items-center justify-center'>
                <div className='flex items-center'>
                    <MapPinIcon className='h-10 w-10 mr-5 '/>               
                    <span className='uppercase font-extrabold text-lg tracking-tighter'>15 places bellecour, 6900 lyon</span>
                </div>

                <div className='flex items-center mt-5'>
                    <EnvelopeIcon className='h-10 w-10 mr-5 '/>               
                    <span className='uppercase font-extrabold text-lg tracking-tighter'>ducFred@gmail.com</span>
                </div>
            </div>
        </div>

        <div className='relative z-10 flex items-center justify-between'>
            <div className='uppercase font-extrabold tracking-tighter text-sm'>
                burger house 2023. All rights reserved
            </div>
            <div className='flex items-center '>
                <div>
                    <a href='https://instagram.com' target='_blank'>
                        <img src={ImgInst} className='w-7 h-7 mr-2 bg-white rounded-full p-1'/>
                    </a>
                </div>
                <div>
                    <a href='https://facebook.com' target='_blank'>
                        <img src={ImgFace} className='w-7 h-7 mr-2 bg-white rounded-full p-1'/>
                    </a>
                </div>
                <div>
                    <a href='https://twitter.com' target='_blank'>
                        <img src={ImgTwitter} className='w-7 h-7 mr-2 bg-white rounded-full p-1'/>
                    </a>
                </div>
                <div>
                    <a href='https://whatsapp.com' target='_blank'>
                        <img src={ImgWhatsapp} className='w-7 h-7 bg-white rounded-full p-1'/>
                    </a>
                </div>
            </div>
        </div>

      </div>
    </Container>
  )
}

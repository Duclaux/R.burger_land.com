import React from 'react'
import logo from '../../../assets/svg/Logo/Logo-burger-house.svg'
import Icone from '../../../assets/svg/ico-bag-clickAndCollect.svg'
import Button from '../../elements/Button'

export default function Header() {
  return (
    <div className='relative z-10 flex items-center justify-between py-10'>
      {/* conteuneur du logo */}
      <div className= 'w-full'>
        <img src={logo} alt='burger house app' className='w-64'/>
      </div>

      {/* conteuneur du second lots */}
      <div className='w-full text-secondary'>
        <div className='flex items-center justify-end'>
          <img src={Icone} alt='' className='w-5 h-5 mr-1' />
          <span >Commandez votre repas en ligne</span>
        </div>

        {/* conteneur des boutton */}
        <div className='flex items-center justify-end mt-5'>
          <Button name='inscription' myClass='bg-primary hover:bg-primary-hover mr-4 tracking-widest' theme='small'/>
          <Button name='connexion' myClass='bg-secondary hover:bg-secondary-hover tracking-widest' theme='small'/>
        </div>
      </div>
    </div> 
  )
}

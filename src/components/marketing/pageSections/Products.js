import React from 'react'
import Container from '../../elements/Container'
import HeadingTitle from '../../elements/displayTitle/HeadingTitle'
import Heading from '../../elements/displayTitle/Heading'
import Button from '../../elements/Button'
import product1 from '../../../assets/imgs/Burgers/Product-1.jpg'
import product2 from '../../../assets/imgs/Burgers/Product-2.jpg'
import product3 from '../../../assets/imgs/Burgers/Product-3.jpg'

export default function Products() {
  return (
    <Container>

      <HeadingTitle title='Toujours des delicieux burgers' variant='h3'/>
      <Heading title='Choisissez et savourez' variant='h3' theme='secondary' display='gray' className='my-5'/>
      <p className='text-center'>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quibusdam explicabo similique, neque, maiores voluptate qui aspernatur reiciendis expedita vel nam nostrum ad. Quaerat, earum nam cumque distinctio voluptates obcaecati?
      </p>

      <div className='grid grid-cols-3 gap-x-1 mb-20 mt-10'>
        <div className='w-full h-full'>
            <div className='w-full h-72 relative'>
                <img src={product1} alt='' className='bg-primary absolute right-0 top-0 w-full h-full object-cover z-0' />
            </div>
            <div className='flex flex-col items-center justify-center px-5 pb-5'>
                <Heading variant='h3' title='Lorem ipsum dolor' className='my-5'/>
                <p className='text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quibusdam explicabo similique, neque, maiores voluptate
                </p>
                <Button myClass='bg-red-primary' className='font-secondary' name='Commandez'/>
            </div>
        </div>

        <div className='w-full h-full'>
            <div className='w-full h-72 relative'>
                <img src={product2} alt='' className='bg-primary absolute right-0 top-0 w-full h-full object-cover z-0' />
            </div>
            <div className='flex flex-col items-center justify-center px-5 pb-5'>
                <Heading variant='h3' title='Lorem ipsum dolor' className='my-5'/>
                <p className='text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quibusdam explicabo similique, neque, maiores voluptate
                </p>
                <Button myClass='bg-red-primary' className='font-secondary' name='Commandez'/>
            </div>
        </div>

        <div className='w-full h-full'>
            <div className='w-full h-72 relative'>
                <img src={product3} alt='' className='bg-primary absolute right-0 top-0 w-full h-full object-cover z-0' />
            </div>
            <div className='flex flex-col items-center justify-center px-5 pb-5'>
                <Heading variant='h3' title='Lorem ipsum dolor' className='my-5'/>
                <p className='text-center'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quibusdam explicabo similique, neque, maiores voluptate
                </p>
                <Button myClass='bg-red-primary' className='font-secondary' name='Commandez'/>
            </div>
        </div>
      </div>

    </Container>
  )
}

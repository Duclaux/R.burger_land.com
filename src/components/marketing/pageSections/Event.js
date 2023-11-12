import React from 'react'
import Container from '../../elements/Container'
import AliceCarousel from 'react-alice-carousel'
import '../../../css/carousel.css'
import Image1 from '../../../assets/imgs/Events/dorian-hurst-d-igN2ptyC8-unsplash.jpg'
import Image2 from '../../../assets/imgs/Burgers/Product-1.jpg'
import Image3 from '../../../assets/imgs/Burgers/Product-1.jpg'
import Heading from '../../elements/displayTitle/Heading'


const Slide = ( {child, categorie, title, img} ) => {
  return(
    <div className='grid grid-cols-2 p-6'>
      <div className='w-full p-10 mb-10'>

        <Heading title={categorie} variant='h4' align='start'/>

        <Heading title={title} theme='secondary' variant='h3' align='start' className='mb-5'/>

        <p className='tracking-wide text-lg leading-relaxed font-light text-gray-800' >{child}</p>

      </div>

      <div className='relative h-full w-full'>
        <img src={img} className='bg-primary absolute right-0 top-0 w-full h-full object-cover object-bottom z-0' />
      </div>
    </div>
  )
}


export default function Event() {

  const handleDragStart =(e) => e.preventDefault()

  const Items = [
    <Slide 
      child ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quibusdam explicabo similique, neque, maiores voluptate qui aspernatur reiciendis expedita vel nam nostrum ad. Quaerat, earum nam cumque distinctio voluptates obcaecati?'
      img={Image1}
      categorie='evenement a venir'
      title='vivez la demi-finale'
      />,

    <Slide 
    child ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quibusdam explicabo similique, neque, maiores voluptate qui aspernatur reiciendis expedita vel nam nostrum ad. Quaerat, earum nam cumque distinctio voluptates obcaecati?'
    img={Image2}
    categorie='ouveau burger'
    title='decouvrez le killer burger'
    />,

    <Slide 
    child ='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa quibusdam explicabo similique, neque, maiores voluptate qui aspernatur reiciendis expedita vel nam nostrum ad. Quaerat, earum nam cumque distinctio voluptates obcaecati?'
    img={Image3}
    categorie='nouvelle recette'
    title='le VegeBurger arrive '
    />,
    
  ]


  return (
    <Container>
        
        <div className='shadow-2xl mb-20 h-96 w-full'>
            <AliceCarousel
              mouseTracking
              items={Items}
              autoPlay
              infinite
              autoPlayInterval='4000'
              disableButtonsControls
            />
        </div>
    </Container>
  )
}

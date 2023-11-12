import React from 'react'
import Container from '../../elements/Container'
import Assiete from '../../../assets/imgs/Background/Assiette-burger-frites.png'
import Burger from '../../../assets/imgs/Background/Burger.png'
import Sauce from '../../../assets/imgs/Background/Sauce-pimente.png'
import Heading from '../../elements/displayTitle/Heading'

export default function Booking() {
  return (
    <Container>
      
      <div className='relative mb-20'>
        <img src={Burger} alt='un hamburger' className='absolute -top-20 -left-36 z-10'/>
        <img src={Sauce} alt='une Sauce pimente' className='absolute bottom-0 left-0'/>
        <img src={Assiete} alt='une assiette de fritte' className='absolute -bottom-52 -right-64 w-1k'/>

        <div className='max-w-3xl mx-auto px-10 py-20'>
            <Heading title='Reservation' variant='h3' align='center'/>
            <Heading title='Reservez votre table' variant='h3' align='center' theme='secondary' className='mt-5'/>

            <form className='grid grid-cols-2 gap-x-7 gap-y-6 mt-20'>
                <div>
                    <label htmlFor='name'>
                        Nom
                    </label>

                    <input 
                        type='text'
                        name='name'
                        id='name'
                        autoComplete='off'
                        placeholder='Duc Fred'
                        className='focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-3'
                    />
                </div>

                <div>
                    <label htmlFor='email'>
                        Email
                    </label>

                    <input 
                        type='text'
                        name='email'
                        id='email'
                        autoComplete='off'
                        placeholder='DucFred@gmail.com'
                        className='focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-3'
                    />
                </div>

                <div>
                    <label htmlFor='date'>
                        Date
                    </label>

                    <input 
                        type='date'
                        name='date'
                        id='date'
                        autoComplete='off'
                        className='focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-3'
                    />
                </div>

                <div>
                    <label htmlFor='time'>
                        Heure
                    </label>

                    <input 
                        type='time'
                        name='time'
                        id='time'
                        autoComplete='off'
                        className='focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-3'
                    />
                </div>

                <div>
                    <label htmlFor='customer'>
                        Nombre de personne
                    </label>

                    <input 
                        type='text'
                        name='customer'
                        id='customer'
                        autoComplete='off'
                        placeholder='5'
                        className='focus:ring-primary focus:border-primary focus:border block w-full border-gray-400 rounded-md p-3'
                    />
                </div>

                <div>
                    <label htmlFor='sendBooking' className='invisible'>
                        trouvez une table
                    </label>

                    <input 
                        type='button'
                        name='sendBooking'
                        id='sendBooking'
                        className='bg-red-primary hover:bg-red-800 w-full text-white font-secondary tracking-widest uppercase py-3 rounded-md animate cursor-pointer'
                        value='trouvez une table'
                    />
                </div>
            </form>
        </div>

      </div>

    </Container>
  )
}
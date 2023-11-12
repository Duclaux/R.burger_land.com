import React from 'react'

export default function HeadingTitle(props) {

    const { title, variant } = props
    const classDefault = 'px-7 py-3 uppercase bg-primary text-secondary font-bold inle-block'

    switch(variant){
        case 'h3':
            return(
                <div className='flex items-center justify-center my-5'>
                    <h3 className={`text-sm ${ classDefault }`}>{ title }</h3>
                </div>
            )
        default:
            return(
                <div className='flex items-center justify-center my-5'>
                    <h2 className={`${ classDefault }`}>{ title }</h2>
                </div>
            )
    }
}

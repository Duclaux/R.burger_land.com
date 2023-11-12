import React from 'react'

export default function Button(props) {
  const { name, myClass, theme } = props

  switch(theme){
    case 'small':
      return(
        <div>
          <button className={`${myClass} px-4 py-2 uppercase shadow-xl text-white text-xs font-normal animate rounded-md`}>{ name }</button>
        </div>
      )
    
    case 'big':
      return(
        <div>
          <button className={`${myClass} px-8 py-4 uppercase shadow-xl text-white text-base font-normal rounded-md`}>{ name }</button>
        </div>
      )

    default:
      return(
        <div>
          <button className={`${myClass} px-3 py-2 uppercase shadow-xl text-white text-sm font-normal animate rounded-md`}>{ name }</button>
        </div>
      )
  }
}

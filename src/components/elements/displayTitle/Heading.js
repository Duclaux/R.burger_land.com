import React from 'react'

export default function Heading(props) {

    const { title, variant, theme, display, align, className } = props
    const classDefault = 'uppercase text-secondary'
    let font, color, aligne

    switch(theme){
        case 'secondary':
            font = "font-secondary"
            break
        default:
            font = 'tracking-tighter'
    }

    switch(display){
        case 'gray':
            color = "text-gray-600"
            break
        default:
            color = 'text-secondary'
    }

    switch(align){
        case 'start':
            aligne = "justify-start"
            break

        case 'right':
            aligne = "justify-right"
            break

        default:
            aligne = 'justify-center'
    }

    switch(variant){
        case 'h3':
            return(
                <div className= {`flex ${aligne}`}>
                    <h3 className={`text-2xl ${ classDefault } ${ font } ${ color } ${className} `}>{ title }</h3>
                </div>
            )
        
        case 'h4':
            return(
                <div className={`flex ${aligne}`}>
                    <h3 className={`text-lg ${ classDefault } ${ font } ${ color } ${className} `}>{ title }</h3>
                </div>
            )
        
        default:
            return(
                <div className={`flex ${aligne}`}>
                    <h2 className={`${theme==='secondary' ? "text-2xl" : "text-3xl"}  ${className} ${ classDefault } ${ font } ${ color }`}>{ title }</h2>
                </div>
            )
    }
}

import React from 'react'


const Button = ({ onClick, title }) => {
   return (
      <button className='button' id='new-quote' onClick={onClick}>{title}</button>
   )
}

export default Button;

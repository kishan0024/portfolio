import React from 'react'

interface HeaderProps{
    title:string;
}

const Header = (props:HeaderProps) => {
  return (
    <div className='w-full text-3xl font-bold text-center'>{props.title}</div>
  )
}

export default Header
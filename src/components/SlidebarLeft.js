import React from 'react'
import logo from "../assets/logo.svg"
import { slidebarMenu } from '../ultis/menu'
import { NavLink } from 'react-router-dom'

const SlidebarLeft = () => {
  return (
    <div className='flex flex-col'>
        <div className='w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center'>
        <img src={logo} alt="logo" className='w-[120] h-10 ' /> 
        </div>

        <div>
            <NavLink 
            to={'/'}
            >
                HOME
            </NavLink>
        </div>
    </div>
  )
}

export default SlidebarLeft
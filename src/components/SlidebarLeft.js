import React from 'react'
import logo from "../assets/logo.svg"
import { slidebarMenu } from '../ultis/menu'
import { NavLink } from 'react-router-dom'
const notActiveStyle = "py-2 px-[25px] text-[#323] text-[13px] before:font-bold flex gap-3 items-center"

const activeStyle = "py-2 px-[25px] text-[#854F4F] text-[13px] before:font-bold flex gap-3 items-center";
const SlidebarLeft = () => {
  return (
    <div className='flex flex-col'>
      <div className='w-full h-[70px] py-[15px] px-[25px] flex justify-start items-center'>
        <img src={logo} alt="logo" className='w-[120] h-10 ' />
      </div>
      <div className='flex flex-col'>

        {slidebarMenu.map(item => (
          <NavLink
            to={item.path}
            key={item.path}
            end= {item.end}
            className={({isActive}) => isActive ? activeStyle : notActiveStyle}  
          >
            {item.icons}
            <span>
              {item.text}
            </span>
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default SlidebarLeft
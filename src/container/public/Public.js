import React from 'react'
import { Outlet } from 'react-router-dom'
import { SlidebarLeft, SlidebarRigth } from '../../components'


const Public = () => {
    return (
        <div className='w-full flex bg-[#E5E3DF]'>
            <div className='w-[240px] flex-none border border-blue-500 '>
                <SlidebarLeft />

            </div>

            <div className='flex-auto border border-red-500'>
                <Outlet />
            </div>

            <div className='w-[329px] flex-none border border-green-500'>
                <SlidebarRigth/>
            </div>
        </div>
    )
}

export default Public
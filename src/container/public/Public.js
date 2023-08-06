import React from 'react'
import { Outlet } from 'react-router-dom'
import { Player, SlidebarLeft, SlidebarRigth } from '../../components'


const Public = () => {
    return (
        <div className='w-full flex flex-col bg-[#E5E3DF] min-h-screen'>
            <div className='w-full flex flex-auto'>
                <div className='w-[240px] flex-none min-h-screen border border-blue-500 '>
                    <SlidebarLeft />

                </div>

                <div className='flex-auto border border-red-500'>
                    <Outlet />
                </div>

                <div className='w-[329px] flex-none border border-green-500 animate-slide-left'>
                    <SlidebarRigth />
                </div>

            </div>
            <div>
                <Player className="flex-none h-[90px]" />
            </div>

        </div>
    )
}

export default Public
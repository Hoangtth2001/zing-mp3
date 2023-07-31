import React from 'react'
import icons from '../ultis/icons'
import Search from './Search'

const { GoSearch, GoDesktopDownload, BiLogInCircle, AiOutlineArrowLeft,
    AiOutlineArrowRight } = icons
const Header = () => {
    return (
        <div className='flex justify-between w-full items-center'>
            <div className='flex gap-6 w-full items-center'>
                <div className='flex gap-4 text-[#CAC8C6]'>
                    <span >
                        <AiOutlineArrowLeft size={24} />
                    </span>
                    <span >
                        <AiOutlineArrowRight size={24} />
                    </span>
                </div>
                <div className='w-3/4'>
                    <Search />
                </div>

            </div>
            <div>
                dang nhap
            </div>


        </div>
    )
}

export default Header
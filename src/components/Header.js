import React from 'react'
import icons from '../ultis/icons'
import Search from './Search'
import { Link } from 'react-router-dom'
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { AuthContext } from '../store/reducers/AuthContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';


const { GoSearch, GoDesktopDownload, BiLogInCircle, AiOutlineArrowLeft,
    AiOutlineArrowRight } = icons
const Header = () => {
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser)
    const navigate = useNavigate()

    const handleLogOut = () => {
        signOut(auth).then(() => {
            navigate('/')
            window.location.reload();
        }).catch((error) => {
            console.error(error);
        });
    }

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
            { currentUser === null ?
                  <Link to="/login" >LOGIN</Link>:
                  <button onClick={handleLogOut} >LOGOUT</button>
                }
            </div>


        </div>
    )
}

export default Header
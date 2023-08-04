import React from 'react'
import icons from '../../ultis/icons'
import { provider, auth } from '../../firebase'
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import { AuthContext } from '../../store/reducers/AuthContext.js'
// import { useContext } from 'react'

const { FcGoogle } = icons
const Login = () => {

  // const {dispatch} = useContext(AuthContext)
  const [error, setError] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const nav = useNavigate()

  const handleSignIn = (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        nav("/")
        // dispatch({type: "LOGIN", payload: user})
      })
      .catch((error) => {
       setError(true)
       console.error(error)
      });
  }
  const handleSigninWithGoogle = (e) => {
    e.preventDefault()
    signInWithPopup(auth, provider)
      .then((result) => {
        nav("/")
        const user = result.user
        // dispatch({type: "LOGIN", payload: user})
      })
      .catch((err) => {
        setError(true)
        
      })
  }

  return (


    <div className='grid grid-cols-1 sm:grid-cols-2 w-full h-screen ml-[400px]'>

      <div className='bg-gray-100 flex flex-col justify-center'>
        <form
          onSubmit={handleSignIn}
          className='max-w-[500px] w-full mx-auto bg-white p-4'>
          <h2 className='text-4 font-bold text-center py-6'>LOGIN</h2>
          <div className=" flex flex-col py-2">
            <label>Email</label>
            <input className="border p-2" type='text' onChange={e => setEmail(e.target.value)} />
          </div>
          <div className=" flex flex-col py-2">
            <label>Passowrd</label>
            <input className="border p-2" type='Password'  onChange={e => setPassword(e.target.value)} />
          </div>
          <button
            className='rounded-full border w-full my-5 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:bg-indigo-100'>
            Sign in</button>
          {error && <span className='text-[red]'>Wrong email or password </span>}
          <div className='flex justify-between'>
            <p className='flex items-center'><input className='mr-2' type='checkbox' />Remember Me</p>
            <p >Sign up</p>

          </div>


          <div className='flex flex-col justify-between items-center mt-5'>

            <p >Sign up or Sign in with</p>
            <button className='mt-3' onClick={handleSigninWithGoogle}><FcGoogle size={24} /></button>
          </div>
        </form>

      </div>



    </div>


  )
}

export default Login
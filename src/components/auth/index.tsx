import { Box } from '@mui/system'
import React from 'react'
import { useLocation } from 'react-router-dom'
import { Login } from './login'
import { Register } from './register'
import './auth.scss'

export const AuthRootComponents = () => {
    const location = useLocation()
  return (
    <div>
        <form className='rootick'>
            <Box
            width={666}
            display='flex'
            justifyContent='center'
            flexDirection='column'
            alignItems='center'
            borderRadius='3px'
            padding='5px'
            boxShadow='5px 5px 10px #ccc'
            >
                {
                    location.pathname === '/register' ? (
                        <Register/>
                    )
                    :
                    location.pathname === '/login' ? (
                        <Login/>
                    )
                    : 
                    null
                }
            </Box>
        </form>
    </div>
  )
}

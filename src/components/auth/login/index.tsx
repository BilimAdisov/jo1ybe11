import {  Button, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div>
        <Typography
        textAlign='center'
        variant='h4'
        component='h2'
        sx={{
            color: 'black',
            margin: '20px 0 32px 0'
        }}
        >
            Войдите в аккаунт
        </Typography>

        <TextField
        margin='normal'
        fullWidth={true}
        id='standard-basic'
        label='E-mail'
        variant='outlined'
        sx={{color:'black'}}
        />
        <TextField
        margin='normal'
        fullWidth={true}
        id='standard-basic'
        label='Password'
        variant='outlined'
        type='password'
        sx={{color:'black'}}
        />
        <Button
        sx={{ 
        marginTop: '20px',
        marginBottom: '15px', 
        background: 'black',
        height: '50px'
         }}
        fullWidth={true}
        variant='contained'
        >
            Войти
        </Button>
        <Typography
        textAlign='center'
        variant='body2'
        component='h2'
        color='#909090'
        >
            Нет аккаунт ?
            <Link 
            style={{ marginLeft: '5px'}} to='/register'
            >
            Создать аккаунт
            </Link>
        </Typography>
    </div>
  )
}

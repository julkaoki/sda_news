import { Button, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { auth } from '../../helpers/firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth';

interface RegisterFormValues {
    email: string;
    password: string;
    password2: string;
}

const RegisterForm = () => {

    const { register, handleSubmit } = useForm<RegisterFormValues>();

    const submitHandler = (data: RegisterFormValues) => {console.log(data);};

    const registerUserWithFormData = ({
      email, password, password2
    }: RegisterFormValues) => {
        if (password === password2) {
            createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
              console.log("Successfully registered!");
            })
            .catch((err) => {
              console.log(`register error ${err.message}`);
            })
        } else {
            alert("Passwords are not equal!");
        }
    };

  return (
    <>
        <form onSubmit={handleSubmit(registerUserWithFormData)} style={{display: 'flex', flexDirection: 'column'}}>
            <Typography align='center' variant='h2' sx={{fontSize: '1.5rem'}}>Register new account</Typography>
            <TextField type={'email'} placeholder={'email'} sx={{display: 'block', my: '.5rem', mx: 'auto'}} 
            {...register('email', { required: true })}/>
            <TextField type={'password'} placeholder={'password'} sx={{display: 'block', my: '.5rem', mx: 'auto'}}
            {...register('password', { required: true })}/>
            <TextField type={'password'} placeholder={'repeat password'} sx={{display: 'block', my: '.5rem', mx: 'auto'}}
            {...register('password2', { required: true })}/>
            <Button variant='contained' type='submit' sx={{display:'block', mx:'auto'}}>Register</Button>
        </form>
    </>
  );
};

export default RegisterForm;
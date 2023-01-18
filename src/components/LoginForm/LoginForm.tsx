import React from 'react';
import { Button, TextField, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { auth } from '../../helpers/firebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';

// 1. Stwórz komponent LoginForm
// 2. Do komponentu LoginForm zaimportuj hook useForm i wywołaj go wyciągając funkcje register i handleSubmit
// 3. Stwórz interface dla wartości z formularza, będą tylko 2: email i hasło, jedno i drugie string. Sam interface dopisz do wywołania useForm
// 4. Stwórz funkcję logUserIn. Funkcja w parametrze będzie przyjmowała destrukturyzowany obiekt z email i password (patrz komponent RegisterForm) dopisz do tego parametru interface z pkt 3. W samej funkcji wywołaj funkcję signInWithEmailAndPassword, uprzednio ją importując. Sama funkcja przyjmuje 3 argumenty, obiekt auth (firebaseConfig), email i password. Do wywołania funkcji przypnij thena i catcha.
// 5. JSX:
// - całość obwinięta w htmlowy <form>, onSubmit skonfiguruj z handleSubmit i funkcją logUserIn, w atrybucie style ustaw display na flex i flexDirection na column
// - w form umieść TextField (MUI) variant outlined, type email, placeholder email, w sxach display block, my .5rem, mx auto. Zarejestruj input pod nazwą email.
// - w form umieść TextField (MUI) variant outlined, type password, placeholder password, w sxach display block, my .5rem, mx auto. Zarejestruj input pod nazwą password.
// - w form umieść Button (MUI) type submit, variant contained, w sxach display block, mb 1rem, mx auto. Tekst w buttonie: Log in

interface LoginFormValues {
    email: string;
    password: string
}

const LoginForm = () => {

    const { register, handleSubmit } = useForm<LoginFormValues>();

    const loginUserWithForm = ({
        email, password
    }:LoginFormValues) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {console.log("succesfully logged in");})
        .catch((err) => {console.log(`error type ${err.message}`);})
    };



  return (
    <>
        <form onSubmit={handleSubmit(loginUserWithForm)} style={{display: 'flex', flexDirection: 'column'}}>
            <TextField variant='outlined' type='email' placeholder='email' sx={{display:'block', my:'.5rem', mx:'auto'}} 
            {...register('email', { required: true })} />
            <TextField variant='outlined' type='password' placeholder='password' sx={{display:'block', my:'.5rem', mx:'auto'}} 
            {...register('password', { required: true })} />
            <Button type='submit' variant='contained' sx={{display:'block', mb:'1rem', mx:'auto'}}>Log in</Button>
        </form>
    </>
  );
};

export default LoginForm;
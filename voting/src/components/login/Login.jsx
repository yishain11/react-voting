import { useState } from 'react';
import {  checkCreds } from "../../helpers/checkdb";


export default function Login(props){
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    
    function handleSubmit(e){
        e.preventDefault()
        const name = checkCreds(email,pass)
        if(name){
            localStorage.setItem('currentUsername',name)
            localStorage.setItem('currentUserEmail',email)
            props.setIsLogIn(true)
        }
    }
    return <>
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
            <p>Maciej24@hotmail.com       wJL3RJj</p>
            <label htmlFor="">Email</label>
            <input type="email" onInput={(e)=>{setEmail(e.target.value)}}/>
            <label htmlFor="">Password</label>
            <input type="password"  onInput={(e)=>{setPass(e.target.value)}}/>
            <button type="submit">login</button>
        </form>
    </>
}
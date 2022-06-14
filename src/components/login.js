import React, {useState} from "react"
import reactRouterDom from "react-router-dom";
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import{signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from '../config/firebase'


function Login(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const btn = {
        width:'150px',
        height:'30px',
        marginTop:'3%'

    }
    let history = useHistory();
    const login =(()=>{
        signInWithEmailAndPassword(auth, email, password).then(()=>{

            history.push("/home");

        }).catch((err)=>{
            console.log(err);
        })
        
    })

return(
    <div className="container">
        <h1>Login</h1>
        <input type ="email" placeholder="enter email" onChange={(e)=>setEmail(e.target.value)}/><br></br>
        <input type ="password" placeholder="enter paasword"  onChange={(e)=>setPassword(e.target.value)}/><br></br>

        <button style={btn} onClick={login}>Login</button>
        {""}

        <span>dont have an account</span> <span>
            
            <Link to="/sign-up">create account here</Link>
            </span>
    </div>

);


}

export default Login
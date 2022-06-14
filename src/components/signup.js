import React , {useState} from 'react'
import {useHistory} from 'react-router-dom'
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword} from 'firebase/auth';
import {auth} from '../config/firebase'





function SignUp(){


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");

    let history = useHistory();

 

    const Register =(()=>{

        createUserWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/home");

        }).catch((error)=>{
            console.log(error)
        })
        
    })



    return(
        <div className="container">
            <h1>register account here</h1>

            <input type ="email" placeholder="enter email" onChange={(e)=>setEmail(e.target.value)}/>
            {" "}
            <br></br>
            <input type ="password" placeholder="enter paasword"  onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={Register}>SignUp</button>
        </div>
    
    );
    
    
    }
    
    export default SignUp
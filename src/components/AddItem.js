import React,{useState} from "react";
import "../css/Add.css"
import {db} from '../config/firebase';
import {addDoc, collection} from 'firebase/firestore'


function AddItem(props){

    const [amount, setAmount] = useState('')
    const [item, setItem] = useState("");
    const [transanctionType, settransactionType] =useState("")


    const add = (()=>{

        const collectionRef = collection(db, "transaction");
        const transaction ={
            item :item,
            amount:amount,
            transanctionType:transanctionType
        };

        addDoc(collectionRef, transaction).then(()=>{


            alert("added succesfully");
        }).catch((err)=>{
            console.log(err);
        })

       

        props.add(amount, item, transanctionType);
        

        ;
    })



return(
    <div>
<h1 style={{paddingtop:'25px'}}>Add Transaction</h1>

        <input placeholder="enter amount" onChange={(e)=> setItem(e.target.value)} /><br></br>
        <input placeholder="enter amount"  onChange={(e)=> setAmount(e.target.value)}/><br></br>
        <select  onChange={(e)=> settransactionType(e.target.value)}>
            <option value="income"  onChange={(e)=> settransactionType(e.target.value)}>income</option>
            <option value="expense"  onChange={(e)=> settransactionType(e.target.value)}>expense</option>

            
        </select><br></br>
        <button id="btn" onClick={add}>Add</button>
    </div>


)
}

export default AddItem;
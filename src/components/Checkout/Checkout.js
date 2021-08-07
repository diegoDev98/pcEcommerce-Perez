import React,{useState} from 'react'
import './Checkout.css'
import { useCartContext } from '../CartContext';
import { getFireStore } from '../../firebase';
import LastSteps from './LastSteps/LastSteps';



export default function Checkout() {
    const {items,setItems} = useCartContext();
    const {setItemsInCart} = useCartContext()
    const [checkout,setCheckout] = useState(true)
    const [compraID,setcompraID] =useState()
    const db= getFireStore()

    let total = 0;
    if(items.length > 0){
        total = items.map(item => item.price).reduce((total,num)=> total+num)
    }
    return (
        checkout===true ? (
        <div className="checkout">
                <div>
                    <label htmlFor="name">Nombre: </label>
                    <input type="text" id="name" name="name" placeholder="John Doe" onChange={validateName}></input><span id="nameErr"></span>
                </div>
                <div>
                    <label htmlFor="name">Phone: </label>
                    <input type="text" id="phone" name="phone" placeholder="11-1111-1111" onChange={validatePhone}></input><span id="phoneErr"></span>
                </div>
                <div>
                    <label htmlFor="name">Email: </label>
                    <input type="email" id="email" name="email" onChange={validateEmail}></input><span id="emailErr"></span>
                </div>
                <div>
                    <button id="finalizar" onClick={()=>{validate(setCheckout,items,total,db,setcompraID,setItems,setItemsInCart)}}>Finalizar</button>
                </div>
            
        </div>
        ): <LastSteps compraID = {compraID}></LastSteps>
    )
}



var today = new Date().toLocaleDateString();

function validate(func,items,total,db,setcompraID,setItems,setItemsInCart) {
    const one = validateName()
    const two = validatePhone()
    const three = validateEmail()

    if(one===true && two === true && three=== true){
        const clientInfo = 
            {
                buyer: {
                    name:document.getElementById('name').value,
                    phone:document.getElementById('phone').value,
                    email:document.getElementById('email').value,
                },
                items: {
                    items:items,
                    date:today,
                    total:total
                }
            }
         db.collection('buyers').add(clientInfo)
         .then(function(docRef) {
             setcompraID(docRef.id)
            console.log("Document written with ID: ", docRef.id);
        })
        .then(()=> {
            setItems([]);
            setItemsInCart(0)
        });
        
        func(false);
        
    }
    else func(true)
    
}





function validateName() {
    var name = document.getElementById('name');
    var nameErr = document.getElementById('nameErr');
    if(name.value===""){
        nameErr.innerHTML = 'Name is empty'
        return false
    }
    else {
        nameErr.innerHTML = '<img src="https://img.icons8.com/color/28/000000/checked-radio-button--v2.png"/>'
        return true
    }
}



function validatePhone() {
    var phone = document.getElementById('phone');
    var phoneErr = document.getElementById('phoneErr');
    if(phone.value===""){
        phoneErr.innerHTML = 'Phone is empty'
        return false
    }
    else {
        phoneErr.innerHTML = '<img src="https://img.icons8.com/color/28/000000/checked-radio-button--v2.png"/>'
        return true
    }
}



function validateEmail() {
    var email = document.getElementById('email');
    var emailErr = document.getElementById('emailErr');
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var bool=re.test(String(email.value).toLowerCase());

    if(email.value===""){
        emailErr.innerHTML = 'Email is empty'
        return false;
    }
    else if(!bool){
        emailErr.innerHTML = 'Email is incorrect'
        return false;
    }
    else {
        emailErr.innerHTML = '<img src="https://img.icons8.com/color/28/000000/checked-radio-button--v2.png"/>'
        return true;
    }
}



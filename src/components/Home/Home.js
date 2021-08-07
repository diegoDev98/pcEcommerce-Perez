import React from 'react'
import './Home.css'
import armatupc from './../../assets/home/armatupc.png'
import contthree1 from './../../assets/home/contthree1.png'
import contthree2 from './../../assets/home/contthree2.png'
import ItemListContainer from '../ItemListContainer/ItemListContainer'

export default function Home() {
    return (
        <div>
           <header className="header"></header>
           <div>
                <ItemListContainer greeting ="Bienvenido a DiegoTech"/>
           </div>
           <div className="homecontainer container1">
               <img src={armatupc} alt="homeImg1"></img>     
                   <h2>ARMA TU PROPIA PC</h2>
                   <h3>Nuestro armador inteligente te permitirá armar tu PC aunque desconozcas de hardware. No te limites y dale rienda suelta a tu imaginación sin cometer errores de compatibilidad.</h3>
           </div>
           <div className="homecontainer container2">
               <img src={armatupc} alt="homeImg2"></img>
               
                   <h2>ARMA TU PROPIA PC</h2>
                   <h3>Nuestro armador inteligente te permitirá armar tu PC aunque desconozcas de hardware. No te limites y dale rienda suelta a tu imaginación sin cometer errores de compatibilidad.</h3>
           </div>
           <div className="homecontainer container3">
               <img className="img1" src={contthree1} alt="homeImg3"></img>
               
                   <h2>ARMA TU PROPIA PC</h2>
                   <h3>Nuestro armador inteligente te permitirá armar tu PC aunque desconozcas de hardware. No te limites y dale rienda suelta a tu imaginación sin cometer errores de compatibilidad.</h3>
                <img className="img2" src={contthree2} alt="homeImg4"></img>
           </div>
        </div>
    )
}

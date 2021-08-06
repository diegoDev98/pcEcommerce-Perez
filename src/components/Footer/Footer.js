import React from 'react'
import './Footer.css'
import newsletter from '../../assets/Icons/newsletter.png'

export default function Footer() {
    return (
        <div className="footer">
           <div className="footerRow1">
               <div> ¿Querés recibir todas nuestras ofertas?<br/>
Suscribite a nuestro newsletter</div>
               <div> 
                   <img src={newsletter} width="70px" alt="newsLetterIcon"></img>
               </div>
               <div> 
                   <input type="email" placeholder="tucorreoelectronico@dominio.com"></input>
               </div>
           </div>
           <div className="footerRow2">
               <div>
                   <div>
                        <h2>0810-888-2992</h2> <br/>
                        Ventas 1 - 4706-2992<br/>
                        Ventas 2 - 4788-9372<br/>
                        Mercado Libre - 4783-8606<br/>
                        Soporte y RMA - 4786-8990
                   </div>
               
                    <div>
                        <h4>Contacto</h4> <br/>
                        ventas@logg.com.ar<br/>
                        info@logg.com.ar<br/>
                        presupuestos@logg.com.ar<br/>
                        serviciotecnico@logg.com.ar<br/>
                        rma@logg.com.ar<br/>
                        hola@logg.com.ar
                    </div>
               </div>
               <div>
                   <div>
                        <h4>0810-888-2992</h4> <br/>
                        Ventas 1 - 4706-2992<br/>
                        Ventas 2 - 4788-9372<br/>
                        Mercado Libre - 4783-8606<br/>
                        Soporte y RMA - 4786-8990
                   </div>
               
                    <div>
                        <h4>Contacto</h4> <br/>
                        ventas@logg.com.ar<br/>
                        info@logg.com.ar<br/>
                        presupuestos@logg.com.ar<br/>
                        serviciotecnico@logg.com.ar<br/>
                        rma@logg.com.ar<br/>
                        hola@logg.com.ar
                    </div>
               </div>

           </div>
        </div>
    )
}

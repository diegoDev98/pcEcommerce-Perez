import React from 'react'
import './LastSteps.css'
import arrow from '../LastSteps/arrow.png'




export default function LastSteps(props) {

    return (
        <div className="detalles">
            <h1>Su Compra Fue Realizada Exitosamente!</h1>
            <h2>Pasos a seguir: </h2>
            <ul>
                <li>
                    <h3>Transferencia Bancaria</h3>
                    <ul>
                        <li>CBU:.............</li>
                        <li>Alias:.............</li>
                        <li>Banco:.............</li>
                    </ul>
                </li>
                <h3>Una vez realizado el pago, comuniquese a este whatsapp con una captura de pantalla del pago.</h3>
                <div>
                    <img src={arrow} width="70" id="arrow" ></img>
                    <div className="whatsappDiv">
                        <a href="https://web.whatsapp.com/send?phone=5491160334554&text=Realize una compra">
                            <img src="https://img.icons8.com/pastel-glyph/50/000000/whatsapp--v2.png"/>   
                        </a>
                    </div>
                    
                </div>
                <h3>Los envios se realizan dentro de las 48 horas del pago</h3>
                <h4>El total de la compra se respeta hasta pasados 48 sin ser abonado.</h4>
              
            </ul>
        </div>
    )
}

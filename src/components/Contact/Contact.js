import React from 'react'
import './Contact.css'

export default function Contact() {
    return (
        <div className="shade">
		<div className="blackboard">
				<div className="form">
						<p>
								<label>Nombre: </label>
								<input type="text" />
						</p>
						<p>
								<label>Email: </label>
								<input type="text" />
						</p>
						<p>
								<label>Telefono: </label>
								<input type="tel" />
						</p>
						<p>
								<label>Tema: </label>
								<input type="text" />
						</p>
						<p>
								<label>Mensaje: </label>
								<textarea></textarea>
						</p>
						<p className="wipeout">
								<input type="submit" value="Send" />
						</p>
				</div>
		</div>
</div>
    )
}

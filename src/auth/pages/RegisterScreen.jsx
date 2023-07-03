import React from 'react'
import './RegisterScreen.css';
import WhatsAppIcon from '../components/img/whatsapp-support-icon.png'

export const RegisterScreen = () => {
  return (
    <>
      <main>
        <div class="superdiv">
          <div class="div-1">
            <h2>¿Todavía no tenés cuenta?</h2>
            <p>Al crear una cuenta en nuestro sitio, podrás realizar el proceso de pago mas rápido, guardar múltiples direcciones de envío, ver e informarte sobre los pedidos de tu cuenta y más.</p>
          </div>
          {/* <div class="div-2">
                <div class="informacion-personal">
                    <h3>Información personal</h3>
                    <div class="il">
                        <label class="label-controls" for="nombre">Nombre*</label>
                        <input class="controls" type="text" maxlength="20" id="nombre" required>
                    </div>
                    <div class="il">
                        <label class="label-controls" for="apellido">Apellido*</label>
                        <input class="controls" type="text" maxlength="20" id="apellido" required>
                    </div>
                    <div class="checkbox">    
                        <input type="checkbox" name="" id="suscripcion">
                        <label for="suscripcion">Suscribirse al boletín</label>
                    </div>
                    <div class="il">
                        <label class="label-controls" for="cumpleaños">Fecha de nacimiento</label>
                        <input class="controls" type="date" id="cumpleaños">
                    </div>
                    <div class="il">
                        <fieldset>
                            <p class="genero">Género:</p>
                                <input class="option" id= "hombre" type="radio" name="genero">
                                <label for="hombre">Hombre</label>
                                <br>
                                <input class="option" id= "mujer" type="radio" name="genero">
                                <label for="mujer">Mujer</label>
                                <br>
                                <input class="option" id="otro" type="radio" name="genero">
                                <label for="otro">Otro</label>
                        </fieldset>
                    </div>
                    <div class="il">
                        <label class="label-controls" for="telefono">Telefono*</label>
                        <input class="controls" type="text" maxlength="13"id="telefono" required>
                    </div> 
                        <div class="il">       
                        <label class="label-controls" for="domicilio">Domicilio*</label>
                        <input class="controls" type="text" maxlength="20" id="Domicilio" required>
                    </div>
                    <div class="il">
                        <label class="label-controls" for="código-postal">Codigo postal*</label>
                        <input class="controls" type="text" maxlength="5" id="codigo-postal" required>
                    </div>
                    <div class="il">
                        <label class="label-controls" for="cuit/cuil">CUIT/CUIL</label>
                        <input class="controls" type="text" maxlength="11" minlength="11" id="cuit/cuil">
                    </div>    
                </div>
                <div class="informacion-inicio-sesion">
                    <h3>Información de inicio de sesión</h3>
                    <div class="il">        
                        <label class="label-controls" for="user-name">Nombre de usuario*</label>
                        <input class="controls" type="text" maxlength="20" minlength="6" id="user-name" required>
                    </div>
                    <div class="il">
                        <label class="label-controls" for="password">Contraseña*</label>
                        <input class="controls" type="password" maxlength="20" minlength="6" id="password" required>
                    </div>
                    <div class="il">
                        <label class="label-controls" for="confirm-password">Confirmar contraseña*</label>
                        <input class="controls" type="password" maxlength="20" minlength="6" id="confirm-password" required>
                    </div>
                    <div class="il">
                        <label class="label-controls" for="email">Email*</label>
                        <input class="controls" type="email" id="email" required>
                    </div>
                    <div>
                        <div>
                            <label for="terminosycondiciones">Acepto todos los terminos y condiciones*</label>
                            <input type="checkbox" name="" id="terminosycondiciones" required>
                        </div>
                    <a href="./404notfound.html"><input class="button" type="submit" name="" value="Crear una cuenta"></a>
                    </div>

                    <a class="link" href="./login.html">Si ya posee una cuenta haga click aqui para iniciar sesión</a>
                </div>
            </div>     */}
        </div>
        <div>
          <img className="whatsapp-icon" src={WhatsAppIcon} alt="whatsapp-icon" />
        </div>
      </main>
    </>
  )
}

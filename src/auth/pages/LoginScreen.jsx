import React from 'react'
import './LoginScreen.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import LogoVertical from '../components/img/logo-vertical.png'
import WhatsAppIcon from '../components/img/whatsapp-support-icon.png'
import FacebookButtonIcon from '../components/img/facebook-button.png'
import GoogleButtonIcon from '../components/img/google-button.png'

export const LoginScreen = () => {
  return (

    <>
      <main>
        <div class="div-1">
          <div class="content-logo">
            <img src={LogoVertical} alt="logo" id="logo" />
          </div>
          <Form className="form-login">
            <legend>Ingresar con usuario y contraseña</legend>
            <div className='inp-contr'>
              <Form.Group className="div-2" controlId="formBasicEmail">
                <Form.Label className='label-controls'>Usuario</Form.Label>
                <Form.Control className='controls' id="user" type="email" maxlength="20" minlength="6" placeholder="Nombre de usuario" required />
              </Form.Group>

              <Form.Group className="div-2" controlId="formBasicPassword">
                <Form.Label className='label-controls'>Contraseña</Form.Label>
                <Form.Control className='controls' id="password-user" type="password" maxlength="20" minlength="6" placeholder="********" required />
              </Form.Group>
            </div>
            <p className="links" href="./404notfound.html">¿Olvidó su contraseña?</p>
            <Button className="button" variant="primary" type="submit">
              Iniciar Sesión
            </Button>
            <div className="div-button-facebook">
              <div className="button-facebook" href="./404notfound.html">
                <img id="facebook-icon" src={FacebookButtonIcon} alt="facebook-icon" />
                <p id="facebook-text">Continuar con Facebook</p>
              </div>
            </div>

            <div className="div-button-google">
              <div className="button-google" href="./404notfound.html">
                <img id="google-icon" src={GoogleButtonIcon} alt="google-icon" />
                <p id="google-text">Continuar con Google</p>
              </div>
            </div>
            <p className="links" href="./sign-up.html">Crear una cuenta</p>
          </Form>
        </div>
        <div>
          <img className="whatsapp-icon" src={WhatsAppIcon} alt="whatsapp-icon" />
        </div>
      </main>

    </>
  )
}

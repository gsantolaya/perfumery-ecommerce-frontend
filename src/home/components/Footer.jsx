import React from 'react'
import './Footer.css';
import LogoVertical from '../components/img/logo-vertical.png';
import FacebookIcon from '../components/img/facebook-icon-footer.png';
import TwitterIcon from '../components/img/twitter-icon-footer.png';
import InstagramIcon from '../components/img/instagram-icon-footer.png';

export const Footer = () => {
  return (
    <>
      <div className="footer row p-0 m-0">
        <div id="footer-1" className="col-0 col-md-4 pt-2 bg-light d-flex align-items-center justify-content-center">
          <div>
            <p className="footer-tt"><b>Contactanos:</b></p>
            <ul>
              <li>(+54) 381 5792863</li>
              <li>leparfume@gmail.com</li>
              <li>Laprida 550</li>
              <li>San Miguel de Tucumán</li>
            </ul>
          </div>
        </div>
        <div id="footer-2" className="col-12 col-md-4 pt-2 bg-light text-center">
          <img width="130px" src={LogoVertical} alt="logo" />
          <p className="fst-italic text-dark">&copy;Todos los derechos reservados</p>
        </div>
        <div id="footer-3" className="col-0 col-md-4 pt-2 bg-light d-flex align-items-center justify-content-center">
          <div>
            <p className="footer-tt"><b>Encuentranos tambien en:</b></p>
            <div className="div-button-google">
              <div className="button-footer">
                <img className="button-icon-footer" src={InstagramIcon} alt="instagram-icon" />
                <p className="p-3" id="google-text">le_parfume</p>
              </div>
            </div>
            <div className="div-button-google">
              <div className="button-footer">
                <img className="button-icon-footer" src={FacebookIcon} alt="facebook-icon" />
                <p className="p-3" id="google-text">Le Parfum</p>
              </div>
            </div>
            <div className="div-button-google">
              <div className="button-footer">
                <img className="button-icon-footer" src={TwitterIcon} alt="twitter-icon" />
                <p className="p-3" id="google-text">@leparfum</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

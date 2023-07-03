import React from 'react'
import './Error404Screen.css';
import ImgError404 from './home/components/img/error-404-background.png';

export const Error404Screen = () => {
  return (
    <>
      <div className='row'>
        <div className="text col-6">
          <h1>Error 404 Not Found!</h1>
          <p className="mt-5">Hemos buscando por todos lados, pero no hemos podido encontrar la pagina que estas buscando.</p>
          <div className="return-l">
            <p id="return-link">Pulse aquí para regresar a la página principal</p>
          </div>
        </div>
        <div className="img col-6">
          <img className="" src={ImgError404} alt="error-404" width="400px" />
        </div>
      </div>
    </>
  )
}

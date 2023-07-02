import React from 'react'
import './HomeScreen.css';

import Carousel from 'react-bootstrap/Carousel';
import ImgCarousel1 from '../components/img/carousel-1.jpg';
import ImgCarousel2 from '../components/img/carousel-2.jpg';
import ImgCarousel3 from '../components/img/carousel-3.jpg';
import ImgCarousel4 from '../components/img/carousel-4.jpg';
import WhatsAppIcon from '../components/img/whatsapp-support-icon.png'
import { SideMenu } from '../components/SideMenu'
export const HomeScreen = () => {
  return (
    <>
      <header>

      </header>
      <Carousel className='carousel-1 bg-dark' controls={false} indicators={false}>
        <Carousel.Item interval={2000}>
          <p class="text-light text-center p-2"><b>Envío gratis en compras superiores a $10.000</b></p>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <p class="text-light text-center p-2"><b>Hasta 15% off en productos seleccionados</b></p>
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <p class="text-light text-center p-2"><b>3 y 6 cuotas sin interés</b></p>
        </Carousel.Item>
      </Carousel>
      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" src={ImgCarousel1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ImgCarousel2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ImgCarousel3} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={ImgCarousel4} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="encabezado">
        <h1>Bienvenidos a Le Parfum</h1>
        <p>Encontra el perfume que siempre quisiste al mejor precio del mercado</p>
      </div>
      <div className="row m-0 p-0">
        <main className='col-12 col-md-12 col-lg-10 bg-secondary'>
          <section id="para-ellas" className="p-3">
            <h2 className="fs-1 title-section p-3">Fragancias para ellas</h2>
            {/* <div class="row">
              <div class="col-6 col-md-4 col-lg-3">
                <div class="card m-2" style="width: 100%;">
                  <a href="./producto.html"><img src="https://todoslosperfumes.com.ar/2682-large_default/212-heroes-edp-50.jpg" class="card-img-top" alt="212-heroes"></a>
                  <div class="card-body">
                    <h6 class="card-title">CAROLINA HERRERA</h6>
                    <p class="card-text">212 Heroes</p>
                    <p class="card-text">DESDE: <b>$22.400</b></p>
                    <a href="./carrito.html" class="btn btn-dark">COMPRAR</a>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="card m-2" style="width: 100%;">
                  <a href="./producto.html"><img src="https://todoslosperfumes.com.ar/2480-large_default/very-good-girl-edp-30.jpg" class="card-img-top" alt="very-good-girl"></a>
                  <div class="card-body">
                    <h6 class="card-title">CAROLINA HERRERA</h6>
                    <p class="card-text">Very good girl</p>
                    <p class="card-text">DESDE: <b>$26.500</b></p>
                    <a href="./carrito.html" class="btn btn-dark">COMPRAR</a>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="card m-2" style="width: 100%;">
                  <a href="./producto.html"><img src="https://todoslosperfumes.com.ar/1858-large_default/212-sexy-edp-60.jpg" class="card-img-top" alt="212-sexy"></a>
                  <div class="card-body">
                    <h6 class="card-title">CAROLINA HERRERA</h6>
                    <p class="card-text">212 Sexy</p>
                    <p class="card-text">DESDE: <b>$19.900</b></p>
                    <a href="./carrito.html" class="btn btn-dark">COMPRAR</a>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="card m-2" style="width: 100%;">
                  <a href="./producto.html"><img src="https://todoslosperfumes.com.ar/1409-large_default/good-girl-supreme-edp-50.jpg" class="card-img-top" alt="good-girl"></a>
                  <div class="card-body">
                    <h6 class="card-title">CAROLINA HERRERA</h6>
                    <p class="card-text">Good girl</p>
                    <p class="card-text">DESDE: <b>$27.810  </b></p>
                    <a href="./carrito.html" class="btn btn-dark">COMPRAR</a>
                  </div>
                </div>
              </div>
              <div class="col-12 col-md-8 col-lg-6 my-2">
                <a href="./404notfound.html"><img class="img-pub" src="https://juleriaque.vteximg.com.br/arquivos/ids/192774/XmasHome-KENZO-610x495.jpg?v=638055789545900000" alt="KENZO"></a>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="card m-2" style="width: 100%;">
                  <a href="./producto.html"><img src="https://todoslosperfumes.com.ar/707-large_default/flower-eau-de-vie-edp-50.jpg" class="card-img-top" alt="flower"></a>
                  <div class="card-body">
                    <h6 class="card-title">KENZO</h6>
                    <p class="card-text">Flower</p>
                    <p class="card-text">DESDE: <b>$25.300</b></p>
                    <a href="./carrito.html" class="btn btn-dark">COMPRAR</a>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="card m-2" style="width: 100%;">
                  <a href="./producto.html"><img src="https://todoslosperfumes.com.ar/713-large_default/flower-l-elixir-edp-50.jpg" class="card-img-top" alt="flower-l-elixir"></a>
                  <div class="card-body">
                    <h6 class="card-title">KENZO</h6>
                    <p class="card-text">Flower L'Elixir</p>
                    <p class="card-text">DESDE: <b>$28.500</b></p>
                    <a href="./carrito.html" class="btn btn-dark">COMPRAR</a>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="card m-2" style="width: 100%;">
                  <a href="./producto.html"><img src="https://todoslosperfumes.com.ar/558-large_default/miss-dior-absolutely-blooming-edp-30.jpg" class="card-img-top" alt="miss-dior"></a>
                  <div class="card-body">
                    <h6 class="card-title">DIOR</h6>
                    <p class="card-text">Miss Dior</p>
                    <p class="card-text">DESDE: <b>$21.700</b></p>
                    <a href="./carrito.html" class="btn btn-dark">COMPRAR</a>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="card m-2" style="width: 100%;">
                  <a href="./producto.html"><img src="https://todoslosperfumes.com.ar/1734-large_default/dior-addict-eau-fraiche-100.jpg" class="card-img-top" alt="addict"></a>
                  <div class="card-body">
                    <h6 class="card-title">DIOR</h6>
                    <p class="card-text">Addict</p>
                    <p class="card-text">DESDE: <b>$32.400</b></p>
                    <a href="./carrito.html" class="btn btn-dark">COMPRAR</a>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="card m-2" style="width: 100%;">
                  <a href="./producto.html"><img src="https://todoslosperfumes.com.ar/152-large_default/pure-xs-edp-30.jpg" class="card-img-top" alt="pure-xs"></a>
                  <div class="card-body">
                    <h6 class="card-title">PACO RABANNE</h6>
                    <p class="card-text">Pure XS</p>
                    <p class="card-text">DESDE: <b>$18.300</b></p>
                    <a href="./carrito.html" class="btn btn-dark">COMPRAR</a>
                  </div>
                </div>
              </div>
              <div class="col-6 col-md-4 col-lg-3">
                <div class="card m-2" style="width: 100%;">
                  <a href="./producto.html"><img src="https://todoslosperfumes.com.ar/873-large_default/lady-million-edp-80.jpg" class="card-img-top" alt="lady-million"></a>
                  <div class="card-body">
                    <h6 class="card-title">PACO RABANNE</h6>
                    <p class="card-text">Lady Million</p>
                    <p class="card-text">DESDE: <b>$32.900  </b></p>
                    <a href="./carrito.html" class="btn btn-dark">COMPRAR</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="publicidad-2 row m-lg-5">
              <iframe class="col-12 col-md-12 col-lg-6" width="560" height="340" loop src="https://www.youtube.com/embed/_3ZvYbC7IoY?playlist=_3ZvYbC7IoY&loop=1&autoplay=1&mute=1&rel=0&hd=1&controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              <p class="col-12 col-md-12 col-lg-6 fw-light mt-4 mt-lg-0"><b class="fs-3">Irresistible Givenchy</b><br>La rosa Esencial, cosechada al alba en las montañas de Isparta, en Turquía, se inicia en un baile junto con la madera rubia que desata una armoniosa tensión. La esencia, provista de jugosos y crujientes toques de pera e hibisco, palpita en contacto con el empolvado lirio. La mezcla se fusiona deliciosamente con una táctil caricia de almizcle para concebir una fragancia vigorosa, floral y amaderada que resulta descaradamente inspiradora.</p>
            </div>
            <a class="end-section mt-5" href="./categoria-mujer.html">Ver más productos para ellas</a> */}
          </section>
        </main>
        <aside class="col-0 col-md-0 col-lg-2 p-0">
          <SideMenu />
        </aside>
      </div>
















      <div>
        <img className="whatsapp-icon" src={WhatsAppIcon} alt="whatsapp-icon" />

      </div>
    </>
  )
}

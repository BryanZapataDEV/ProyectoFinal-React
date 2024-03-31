import instagramLogo from '../../Imagenes/instagram.svg';
import twitterLogo from '../../Imagenes/gorjeo.svg';
import youtubeLogo from '../../Imagenes/youtube.svg';
import facebookLogo from '../../Imagenes/simbolo-de-la-aplicacion-de-facebook.svg';
import visa from '../../Imagenes/visa.svg';
import americanExpress from '../../Imagenes/american-express.svg';
import documento from '../../Imagenes/documento.svg';
import mastercard from '../../Imagenes/tarjeta.svg';
import logobembos from '../../Imagenes/logobembos.jpg';
import React, { useState } from 'react';
import libroReclamaciones from '../../Imagenes/libroreclamaciones.jpg';


import './Footer.css';



export const Footer = ({ label, isChecked, onChange }) => {
  const [checked, setChecked] = useState(isChecked);

  const handleChange = (event) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    if (onChange) {
      onChange(isChecked);
    }
  };

  return (
    <div className="container-footer">
        <div className="ancho">
            <div className="network-footer">
                <div className="fb-bembos">
                    <img  className='img-logo-footer' src={facebookLogo}></img>  
                 </div>
                 <div className="yt-bembos">
                    <img  className='img-logo-footer' src={youtubeLogo}></img>  
                </div>
                 <div className="twitter-bembos-footer">
                     <img  className='img-logo-footer' src={twitterLogo}></img>
                </div>
                <div className="instagram-bembos">
                    <img  className='img-logo-footer'  src={instagramLogo}></img>
                </div>
                 </div>
            <div className='grid-footer-bembos'>
            <div className='info-footer-bembos'>
              <div className='info-prin-secun-bembos'>
              <div className='info-principal'>
                <ul>
                  <li><a>Locales</a></li>
                  <li><a>Zonas Reparto</a></li>
                  <li><a>Nosotros</a></li>
                  <li><a>Atencion Cliente</a></li>
                  <li><a>Preguntas Frecuentes</a></li>
                  <li><a>Mapa de Sitio</a></li>
                </ul>
              </div>
              <div className='info-info-secundaria'>
              <ul>
                  <li><a>Politicas de Datos Personales</a></li>
                  <li><a>Terminos y condiciones de promociones</a></li>
                  <li><a>Derechos Arco</a></li>
                </ul>
              </div>
              </div>
              <div className='logo-bembos'>
                <img src={logobembos}></img>
              </div>
            </div>
            <div className='formas-pago'>
                <div className='text-forma-pago'>
                    <h3>FORMA PAGO</h3>
                </div>
                <div className='iconos-forma-pago'>
                  <div className='visa'>
                    <img className='icono-pago' src={visa}></img>
                  </div>
                  <div className='mastercard'>
                  <img className='icono-pago' src={mastercard}></img>
                  </div>
                  <div className='amarican-express'>
                  <img className='icono-pago' src={americanExpress}></img>
                  </div>
                </div>
                <div className='safety'>
                <svg viewBox="0 0 160 30" xmlns="http://www.w3.org/2000/svg">
  <path d="M27.392 10.728h11.662v2.981h-7.45v2.425h6.441v2.8h-6.441v5.671h-4.212zM52.829 13.708v-2.986H41.153V24.6h11.663v-2.981h-7.441v-2.69h4.926v-2.8h-4.926v-2.423zM151.497 10.748l-2.457 4.684-2.445-4.684h-4.178l4.5 8.068v5.812h4.21v-5.812l4.515-8.068zM68.55 10.697h4.167l2.459 4.69 2.452-4.69h4.15l-4.524 8.064v5.819h-4.206v-5.823zM129.519 11.845a4.915 4.915 0 0 0-3.507-1.111h-6.976v13.883h4.141v-5.152h2.355a5.529 5.529 0 0 0 3.882-1.179 4.277 4.277 0 0 0 1.27-3.287 4.14 4.14 0 0 0-1.165-3.154zm-3.536 4.381a2.056 2.056 0 0 1-1.15.4 6.307 6.307 0 0 1-.6.031h-1.06v-3.093h1.229c.154 0 .3 0 .426.011a1.833 1.833 0 0 1 1.219.44 1.528 1.528 0 0 1 .436 1.111 1.385 1.385 0 0 1-.501 1.1zM54.614 10.734h12.8l-.011 2.977h-4.3l.015 10.907h-4.21l-.016-10.907h-4.3zM21.636 10.719h-4.09l-4.568 13.878h4.216l.588-2.287h3.611l.6 2.287h4.21zm-1.693 8.584h-1.347l.956-4.988.051.241.1.472v.018l.9 4.254zM138.496 10.734h-4.089l-4.564 13.887h4.208l.592-2.292h3.611l.6 2.292h4.221zm-2.036 8.591h-1.012l.965-4.99.047.243 1.008 4.746zM0 19.834h4.048a2.433 2.433 0 0 0 .519 1.337 2.285 2.285 0 0 0 1.891.81 2.173 2.173 0 0 0 1.412-.414 1.237 1.237 0 0 0 .49-.966 1.216 1.216 0 0 0-.465-.937 5.671 5.671 0 0 0-2.2-.774 9.412 9.412 0 0 1-4.012-1.631 3.245 3.245 0 0 1-1.219-2.586 3.418 3.418 0 0 1 .625-1.958 4.055 4.055 0 0 1 1.86-1.453 8.928 8.928 0 0 1 3.407-.527" fill="rgb(255, 255, 255)"></path>
</svg>
                </div>
                <div className='container-comprobantes'>
                  <button>Comprobantes</button>
                </div>
              </div>
            <div className='recibe-informacion-noticias'>
              <div className='text-noticias'>
                <h3>¿Quieres recibir promociones y noticias?</h3>
              </div>
              <div className='form-enviar'>
                <form className='form-footer'>
                  <input className='input-correo' placeholder='Tu correo'></input>
                  <button className='btn-enviar'>Enviar</button>
                  <div className='chk-footer'>
                  <label>
                      <input 
                        type="checkbox" 
                        checked={checked} 
                        onChange={handleChange} 
                      />
                      {label}
                    
                    </label>
                  </div>
                </form>
              </div>
              <div className='libro-reclamaciones'>
                  <img src={libroReclamaciones}></img>
              </div>
            </div>
              </div> 
            <div className='derechos-reservados'>
             
              <hr></hr>
              <p>© 2019 Todos los derechos reservados</p>
            </div>
         </div>

    </div>
  )
}



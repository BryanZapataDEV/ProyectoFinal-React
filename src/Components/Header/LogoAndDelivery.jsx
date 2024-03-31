import logoBembos from '../../Imagenes/logobembos.jpg';
import iconoTelefono from '../../Imagenes/llamada-telefonica.svg';
import hombre from '../../Imagenes/hombre.svg';

export const LogoAndDelivery = () => {
  return (

    <div className="logo-delivery-container">  
    <div className="logo-delivery-grid ancho">
      <div className="logo-container">
        <img className='logo-img' src={logoBembos} alt='Logo Bembos' href='#' />
      </div>
      <div className="delivery-info-container">
        <div className="delivery-info">
          <div className='delivery-icon'>
            <img className="phone-icon" src={iconoTelefono} alt='Phone Icon'/>
          </div>
          <div className='delivery-text'>
            <p><span className='delivery-label'>Delivery:</span> LIMA</p>
            <p className='delivery-number'>0141919119</p>
          </div>
        </div>
        <div className="login-info">
          <div className='login-icon'>
            <img className="login-logo" src={hombre} alt='Login Icon'/>
          </div>
          <div className='login-text'>
            <p>Ingresar o crear tu cuenta</p>
          </div>
        </div>
      </div>
    </div>   
  </div>
  )
}


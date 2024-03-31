import './SocialBembos.css';

export const SocialBembos = () => {
  return (
    <div className='ancho'>
 <div className="contanier-social-media">
        <div className="text-social-bembos">
            <div className='title-text-social-bembos'>
                <h2>Social </h2> <h2>Bembos</h2>
                
            </div>
            <div className='button-text-social-bembos'>
               <p>Compartir</p>
               <button className='btn-twitter'>Twitter</button>
               <button className='btn-facebook'>Facebook</button>
            </div>
           
        </div>
        <div className="red-social-bembos">
      <iframe
        className='frame-facebook'
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fbembos%2F&amp;tabs&amp;width=500&amp;height=130&amp;small_header=false&amp;adapt_container_width=true&amp;hide_cover=true&amp;show_facepile=true&amp;appId"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        title="Facebook Like Button"
      ></iframe>
    </div>
    </div>
    </div>
   
  )
}


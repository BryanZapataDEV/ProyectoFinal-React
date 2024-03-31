export const BurgerMenuItem = ({ burger }) => {
  return (
    <div className="item-menu-col">
      <div className="item-menu-img">
        <img src={burger.img} />
      </ div>

      <div className="name-item-menu">{burger.nombre}</div>
      <div className="item-section-button-menu">
      <button className="item-button-menu">Ver más</button>
      </div>
    </div>

  )
}


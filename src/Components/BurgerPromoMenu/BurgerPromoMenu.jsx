import { MenuHamburgesas } from "../MenuHamburgesas/MenuHamburgesas"
import { BurgerMenu } from "./BurgerMenu/BurgerMenu"
import { PromoBurgers } from "./BurgerPromo/PromoBurgers"
import { SocialBembos } from "./SocialBembos/SocialBembos"


export const BurgerPromoMenu = () => {
  
  return (
    <div>
         <PromoBurgers/>
         <MenuHamburgesas/>
         <SocialBembos/>
    </div>
  )
}


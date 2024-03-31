import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { BurgerPromoMenu } from "./Components/BurgerPromoMenu/BurgerPromoMenu";
import { Header } from "./Components/Header";
import { Footer } from "./Components/FooterBembos/Footer";
import { CombosPage } from "./Components/CombosPage/CombosPage";
import { PromotionsPage } from "./Components/PromotionsPage/PromotionsPage";
import { HamburgersPage } from "./Components/HamburgersPage/HamburgersPage";
import { BenefitsPage } from "./Components/BenefitsPage/BenefitsPage";
import { MenuPage } from "./Components/MenuPage/MenuPage";

export const ContextBurgerPromo = React.createContext('');

export const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<BurgerPromoMenu />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/combos" element={<CombosPage />} />
          <Route path="/promociones" element={<PromotionsPage />} />
          <Route path="/hamburguesas" element={<HamburgersPage />} />
          <Route path="/beneficios" element={<BenefitsPage />} />
        </Routes>
        <Footer label="He leído y revisado los términos y condiciones" />
      </div>
    </Router>
  );
};

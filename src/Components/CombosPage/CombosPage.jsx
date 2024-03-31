import '../CombosPage/CombosPage.css'
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink, Outlet, useLocation } from 'react-router-dom';
import { readComboBurgers } from '../../Services/Services';
import { CardCombos } from './CardCombos';
import { PestanaMenuCombo } from './PestanaMenuCombo'
import { RouteBebidas, RouteCombos, RouteComplementos, RouteHamburgesas, RouteHelados, RouteInkaChips, RouteLoncheritas, RoutePollo } from './CombosRoute';

export const CombosPage = () => {
  const [burgerCombosData, setburgerCombosData] = useState([]);
  const location = useLocation();
  const subMenuCombo = [
    {
      id: 0,
      name: 'Combos',
      link: '/combos'
    },
    {
      id: 1,
      name: 'Hamburgesas',
      link: '/combos/hamburgesas'
    },
    {
      id: 2,
      name: 'Pollo',
      link: '/combos/pollo'
    },
    {
      id: 3,
      name: 'Loncherita',
      link: '/combos/loncheritas'
    },
    {
      id: 4,
      name: 'Complemento',
      link: '/combos/complementos'
    },
    {
      id: 5,
      name: 'Bebidas',
      link: '/combos/bebidas'
    },
    {
      id: 6,
      name: 'Helado',
      link: '/combos/helado'
    },
    {
      id: 7,
      name: 'Inka Chips',
      link: '/combos/inkachip'
    }
  ];

  const isCombosCombosRoute = location.pathname === "/combos/combos" || location.pathname === "/combos";
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const readData = async () => {
      try {
        const data = await readComboBurgers();
        console.log('pgprin-combos', data);
        setburgerCombosData(data);
      } catch (error) {
        console.error('Error al obtener los combos de hamburguesas:', error);
      }
    };

    readData();
  }, []);

  const callTabActivo = (tabActivo) => {
    console.log('valTabSel', tabActivo);
    setActiveTab(tabActivo);
  };

  return (
    <>
      <div className="ancho">
        <div className='menu-navegacion-combos'>
          <PestanaMenuCombo tabs={subMenuCombo} callTabActivo={callTabActivo} />
        </div>
        {/* <Routes>
          <Route path="/combos" element={<Outlet />} />
          <Route path="/combos/hamburguesas" element={<RouteHamburgesas />} />
          <Route path="/combos/pollo" element={<RoutePollo />} />
          <Route path="/combos/loncheritas" element={<RouteLoncheritas />} />
          <Route path="/combos/complementos" element={<RouteComplementos />} />
          <Route path="/combos/bebidas" element={<RouteBebidas />} />
          <Route path="/combos/helado" element={<RouteHelados />} />
          <Route path="/combos/inkachip" element={<RouteInkaChips />} />
        </Routes> */}
        {/* 
        {isCombosCombosRoute &&
          <div className="main-combos">
            <h2>CONOCE NUESTROS COMBOS | BEMBOS</h2>
            <div className="burger-combo-container">
              {burgerCombosData.map(burger => (
                <CardCombos key={burger.id} burger={burger} />
              ))}
            </div>
          </div>
        } */}
        <div className="tab-content">
          {activeTab === 0 && <RouteCombos />}
          {activeTab === 1 && <RouteHamburgesas />}
          {activeTab === 2 && <RoutePollo />}
          {activeTab === 3 && <RouteLoncheritas />}
          {activeTab === 4 && <RouteComplementos />}
          {activeTab === 5 && <RouteBebidas />}
          {activeTab === 6 && <RouteHelados />}
          {activeTab === 7 && <RouteInkaChips />}
        </div>
      </div>
    </>
  )
}
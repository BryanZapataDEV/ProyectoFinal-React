import React, { useEffect, useState } from 'react';
import { readBebidas, readComboBurgers, readComplemento, readHamburguesas, readHelados, readInkaChip, readLoncheritasTipos, readPollo } from '../../Services/Services';
import { CardCombos } from './CardCombos';

export const RouteCombos = () => {
    const [burgerCombosData, setburgerCombosData] = useState([]);
    useEffect(() => {
        const readData = async () => {
            try {
                const data = await readComboBurgers();
                console.log('combos', data);
                setburgerCombosData(data);
            } catch (error) {
                console.error('Error al obtener los combos de hamburguesas:', error);
            }
        };

        readData();
    }, []);
    return (
        <div className="main-combos">
            <div className='div-title-combos'>
                <p>CONOCE NUESTROS COMBOS | BEMBOS</p></div>
            <div className="burger-combo-container">
                {burgerCombosData.map(burger => (
                    <CardCombos key={burger.id} burger={burger} />
                ))}
            </div>
        </div>
    )
};

export const RouteHamburgesas = () => {
    const [burgerCombosData, setburgerCombosData] = useState([]);
    useEffect(() => {
        const readData = async () => {
            try {
                const data = await readHamburguesas();
                console.log('hamburgesas', data);
                setburgerCombosData(data);
            } catch (error) {
                console.error('Error al obtener los combos de hamburguesas:', error);
            }
        };

        readData();
    }, []);
    return (
        <div className="main-combos">
            <div className='div-title-combos'>
                <p>CONOCE NUESTRAS IRRESISTIBLES HAMBURGUESAS | BEMBOS</p>
            </div>
            <div className="burger-combo-container">
                {burgerCombosData.map(burger => (
                    <CardCombos key={burger.id} burger={burger} />
                ))}
            </div>
        </div>
    )
};

export const RoutePollo = () => {
    const [burgerCombosData, setburgerCombosData] = useState([]);
    useEffect(() => {
        const readData = async () => {
            try {
                const data = await readPollo();
                // const [{
                //     id,
                //     nombre,
                //     img,
                //     precio,
                //     ...restTipos
                // }, preguntas, ...restElements] = data;

                let tipos, preguntas;
                [tipos, preguntas] = data;
                console.log('pollo', tipos.tipos);
                setburgerCombosData(tipos.tipos);
            } catch (error) {
                console.error('Error al obtener los combos de hamburguesas:', error);
            }
        };

        readData();
    }, []);
    return (
        <div className="main-combos">
            <div className='div-title-combos'>
                <p>DESCUBRE NUESTRO IRRESISTIBLE MENÚ DE POLLO | BEMBOS</p>
            </div>
            <div className="burger-combo-container">
                {burgerCombosData.map(burger => (
                    <CardCombos key={burger.id} burger={burger} />
                ))}
            </div>
        </div>
    )
};

export const RouteLoncheritas = () => {
    const [burgerCombosData, setburgerCombosData] = useState([]);
    useEffect(() => {
        const readData = async () => {
            try {
                const data = await readLoncheritasTipos();
                console.log('loncheritas', data);
                setburgerCombosData(data);
            } catch (error) {
                console.error('Error al obtener los combos de hamburguesas:', error);
            }
        };

        readData();
    }, []);
    return (
        <div className="main-combos">
            <div className='div-title-combos'>
                <p>DESCUBRE NUESTRAS LONCHERAS | BEMBOS</p>
            </div>
            <div className="burger-combo-container">
                {burgerCombosData.map(burger => (
                    <CardCombos key={burger.id} burger={burger} />
                ))}
            </div>
        </div>
    )
};


export const RouteComplementos = () => {
    const [burgerCombosData, setburgerCombosData] = useState([]);
    useEffect(() => {
        const readData = async () => {
            try {
                const data = await readComplemento();
                console.log('complementos', data);
                setburgerCombosData(data);
            } catch (error) {
                console.error('Error al obtener los combos de hamburguesas:', error);
            }
        };

        readData();
    }, []);
    return (
        <div className="main-combos">
            <div className='div-title-combos'>
                <p>CONOCE NUESTROS DELICIOSOS COMPLEMENTOS | BEMBOS</p>
            </div>
            <div className="burger-combo-container">
                {burgerCombosData.map(burger => (
                    <CardCombos key={burger.id} burger={burger} />
                ))}
            </div>
        </div>
    )
};

export const RouteBebidas = () => {
    const [burgerCombosData, setburgerCombosData] = useState([]);
    useEffect(() => {
        const readData = async () => {
            try {
                const data = await readBebidas();
                console.log('bebidas', data);
                setburgerCombosData(data);
            } catch (error) {
                console.error('Error al obtener los combos de hamburguesas:', error);
            }
        };

        readData();
    }, []);
    return (
        <div className="main-combos">
            <div className='div-title-combos'>
                <p>BEBIDAS PARA REFRESCAR TU DIA | BEMBOS</p>
            </div>
            <div className="burger-combo-container">
                {burgerCombosData.map(burger => (
                    <CardCombos key={burger.id} burger={burger} />
                ))}
            </div>
        </div>
    )
};

export const RouteHelados = () => {
    const [burgerCombosData, setburgerCombosData] = useState([]);
    useEffect(() => {
        const readData = async () => {
            try {
                const data = await readHelados();
                console.log('helados', data);
                setburgerCombosData(data);
            } catch (error) {
                console.error('Error al obtener los combos de hamburguesas:', error);
            }
        };

        readData();
    }, []);
    return (
        <div className="main-combos">

            <div className='div-title-combos'>
                <p>DELICIOSOS HELADOS PARA TI | BEMBOS</p>
            </div>
            <div className="burger-combo-container">
                {burgerCombosData.map(burger => (
                    <CardCombos key={burger.id} burger={burger} />
                ))}
            </div>
        </div>
    )
};
export const RouteInkaChips = () => {
    const [burgerCombosData, setburgerCombosData] = useState([]);
    useEffect(() => {
        const readData = async () => {
            try {
                const data = await readInkaChip();
                console.log('inkachips', data);
                setburgerCombosData(data);
            } catch (error) {
                console.error('Error al obtener los combos de hamburguesas:', error);
            }
        };

        readData();
    }, []);
    return (
        <div className="main-combos">

            <div className='div-title-combos'>
                <p>DESCUBRE NUESTRAS DELICOSAS INKA CHIPS | BEMBOS</p>
            </div>
            <div className="burger-combo-container">
                {burgerCombosData.map(burger => (
                    <CardCombos key={burger.id} burger={burger} />
                ))}
            </div>
        </div>
    )
};
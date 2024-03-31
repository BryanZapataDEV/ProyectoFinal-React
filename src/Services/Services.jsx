import axios from 'axios';

const BASE_URL = 'http://localhost:3000';

export const readBurgerMenu = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/menu`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los menús de hamburguesas:', error);
    throw error;
  }
};

export const readPromoBurgers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/promociones_online`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las promociones de hamburguesas:', error);
    throw error;
  }
};

export const readComboBurgers  = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/combos`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las promociones de hamburguesas:', error);
    throw error;
  }
};


export const readHamburguesas = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/hamburguesas`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las hamburguesas:', error);
    throw error;
  }
};

export const readPollo = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/pollo`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener pollo:', error);
    throw error;
  }
};

export const readMenuPlato = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/platos`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los platos:', error);
    throw error;
  }
};

export const readLoncheritasTipos = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/loncheritas`);
    const tiposLoncheritas = response.data.map(loncherita => loncherita.tipos).filter(Boolean);
    const tipos = [].concat(...tiposLoncheritas);
    console.log(tipos);
    return tipos;
  } catch (error) {
    console.error('Error al obtener loncheritas:', error);
    throw error;
  }
};

export const readComplemento = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/complementos`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener los platos:', error);
    throw error;
  }
};

export const readBebidas = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/bebidas`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener las bebidas:', error);
    throw error;
  }
};

export const readHelados = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/helados`);
    const helados = response.data.map(helado => ({
      nombre: helado.nombre,
      precio: helado.precio,
      id: helado.id,
      img: helado.img,
      link: helado.link,
    }));
    console.log(helados);
    return helados;
  } catch (error) {
    console.error('Error al obtener helados:', error);
    throw error;
  }
};

export const readInkaChip = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/inka-chips`);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el inaka-chips:', error);
    throw error;
  }
};
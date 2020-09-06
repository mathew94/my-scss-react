import React, { useState, createContext } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Shipment from './Components/Shipment/Shipment';

export const CategoryContext = createContext();

function App() {
  const [category, setCategory] = useState('laptop');
  return (
    <CategoryContext.Provider value = {[category, setCategory]}>
      <p>App js count value : {category}</p>
      <Header></Header>
      <Home></Home>
      <Shipment></Shipment>
    </CategoryContext.Provider>
  );
}

export default App;

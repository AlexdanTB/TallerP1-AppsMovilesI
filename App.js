import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import NavegadorBottom from './navigations/BottomTab';
import React, { createContext, useContext, useState } from 'react';

export const CarritoContx = createContext();
export function CarritoProv({children}){
  const [carrito, setcarrito] = useState([])
  const agregarCarrito = (item) =>{
    setcarrito([...carrito, item])
    Alert.alert("Agregado", "Se agregó al carrito")
    console.log(carrito)
  }
  return(
    <CarritoContx.Provider value={{carrito, agregarCarrito}}>
      {children}
    </CarritoContx.Provider>
  )
}

export default function App() {
  return (
    <CarritoProv>
      <NavegadorBottom/>
    </CarritoProv>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

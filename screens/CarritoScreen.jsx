import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from "react";
import LogoImagen from '../components/LogoImagen'
import ItemCarrito from "../components/ItemCarrito"
import { CarritoContx } from '../App'



export default function CarritoScreen() {
  const {carrito, setCarrito} = useContext(CarritoContx)
  
const subtotal = carrito.reduce(
  (suma, item) => suma + (item.precio || 0) * (item.cantidad || 1),
  0
);
const iva = subtotal * 0.15;
const total = subtotal + iva;
  
  return (
    <View style={{backgroundColor:"#f9f9f9ff"}}>
      <View>
        <LogoImagen txt = "CARRITO DE COMPRAS"/>
      </View>
      <View>
        <Text style={{fontWeight:"bold", fontSize:15, padding:3, margin:8}}>Productos seleccionados</Text>
      </View>
      <View style={styles.view2}>

        <FlatList style={{height:"40%"}}
          data={carrito}
          renderItem={({item})=>
            <ItemCarrito csc = {item}/>
          }      
        />
      <View style={styles.viewpagar}>
        <View style={{flexDirection:"row", padding:6, justifyContent:"space-between"}}>
          <View>
            <Text>Subtotal de productos:</Text>
            <Text>IVA:</Text>
            <Text>Descuentos:</Text>
            <Text style={styles.txtpagar}>TOTAL A PAGAR:</Text>
          </View>
          <View>
            <View>
              <Text style={{fontWeight:"500"}}>${subtotal.toFixed(2)}</Text>
              <Text>${iva.toFixed(2)}</Text>
              <Text style={{fontWeight:"500"}}>$0.00</Text>
              <Text style={styles.txtpagar}>${total.toFixed(2)}</Text>
            </View>
          </View>          
        </View>
        <View style={styles.btnp}>
          <Button title="PAGAR" color="#010101ff"></Button>
        </View>
      </View>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
  view2:{
    justifyContent:"space-between", 
    height:"85%"
  },
  viewpagar:{
    backgroundColor:"#C6F432",
    margin:6,
    padding:8,
    borderRadius:10
  },
  txtpagar:{
    fontSize:15,
    fontWeight:"bold"
  },
  btnp:{
    margin:5,
    paddingHorizontal:5
  }
})
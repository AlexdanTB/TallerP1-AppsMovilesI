import { Button, FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useState } from "react";
import LogoImagen from '../components/LogoImagen'
import ItemCarrito from "../components/ItemCarrito"
import { CarritoContx } from '../App'



export default function CarritoScreen() {
  const { carrito, setcarrito } = useContext(CarritoContx);
  const [compraCompletada, setCompraCompletada] = useState(false);
  const total = carrito.reduce((suma, item) => suma + (item.precio || 0), 0);
  const iva = total*0.15;
  const subtotal = total-iva;

  const manejarPago = () => {
    setCompraCompletada(true);
    setcarrito([])
  };
  if (compraCompletada) {
    return (
      <View style={styles.confirmacionContainer}>
        <Text style={styles.confirmacionTitulo}>¡Gracias por su compra!</Text>
        <Text style={styles.confirmacionTexto}>Su pedido ha sido procesado con éxito.</Text>
        <View style={styles.detalleContainer}>
          <Text style={styles.detalleTitulo}>Resumen de la compra:</Text>
          <Text>Subtotal: ${subtotal.toFixed(2)}</Text>
          <Text>IVA: ${iva.toFixed(2)}</Text>
          <Text style={styles.detalleTotal}>Total: ${total.toFixed(2)}</Text>
        </View>
        <View style={styles.btnVolver}>
          <Button title="VOLVER" color="#010101ff" onPress={() => setCompraCompletada(false)} />
        </View>
      </View>
    );
  }

  return (
    <View style={{ backgroundColor: "#f9f9f9ff" }}>
      <View>
        <LogoImagen txt="CARRITO DE COMPRAS" />
      </View>
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 15, padding: 3, margin: 8 }}>Productos seleccionados</Text>
      </View>
      <View style={styles.view2}>

        <View style={{ alignItems: "flex-end", margin: 8 }}>
          <Button
            title="Eliminar todo"
            color="#d32f2f"
            onPress={() => setcarrito([])}
          />
        </View>
        <FlatList style={{ height: "40%" }}
          data={carrito}
          renderItem={({ item }) =>
            <ItemCarrito csc={item} />
          }
        />
        <View style={styles.viewpagar}>
          <View style={{ flexDirection: "row", padding: 6, justifyContent: "space-between" }}>
            <View>
              <Text>Subtotal de productos:</Text>
              <Text>IVA:</Text>
              <Text>Descuentos:</Text>
              <Text style={styles.txtpagar}>TOTAL A PAGAR:</Text>
            </View>
            <View>
              <View>
                <Text style={{ fontWeight: "500" }}>${subtotal.toFixed(2)}</Text>
                <Text>${iva.toFixed(2)}</Text>
                <Text style={{ fontWeight: "500" }}>$0.00</Text>
                <Text style={styles.txtpagar}>${total.toFixed(2)}</Text>
              </View>
            </View>
          </View>
          <View style={styles.btnp}>
            <Button title="PAGAR" color="#010101ff" onPress={manejarPago}></Button>
          </View>
        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  view2: {
    justifyContent: "space-between",
    height: "85%"
  },
  viewpagar: {
    backgroundColor: "#C6F432",
    margin: 6,
    padding: 8,
    borderRadius: 10
  },
  txtpagar: {
    fontSize: 15,
    fontWeight: "bold"
  },
  btnp: {
    margin: 5,
    paddingHorizontal: 5
  },
  confirmacionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9ff',
    padding: 20,
  },
  confirmacionTitulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'green',
    marginBottom: 10,
  },
  confirmacionTexto: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  detalleContainer: {
    backgroundColor: '#e0e0e0',
    padding: 15,
    borderRadius: 10,
    width: '100%',
  },
  detalleTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  detalleTotal: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 10,
  },
})
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState, useEffect } from 'react'

export default function ItemCarrito({ csc, onUpdateQuantity }) {
    const [cantidad, setCantidad] = useState(csc.cantidad || 1);

    useEffect(() => {
        setCantidad(csc.cantidad || 1);
    }, [csc.cantidad]); 

    const handleIncrement = () => {
        const nuevaCantidad = cantidad + 1;
  
        onUpdateQuantity(csc.codigo, nuevaCantidad);
    };

    const handleDecrement = () => {
        if (cantidad > 1) {
            const nuevaCantidad = cantidad - 1;
        
            onUpdateQuantity(csc.codigo, nuevaCantidad);
        } else {
            onUpdateQuantity(csc.codigo, 0); 
            Alert.alert("Aviso", "Se ha removido el casco del carrito");
        }
    };

    return (
        <TouchableOpacity style={styles.to}>
            <View>
                <Image style={styles.img} source={{ uri: csc.imagen }} />
            </View>
            <View>
                <View>
                    <Text style={{ fontWeight: "500" }}>{csc.nombre}</Text>
                    <Text style={{ fontSize: 13 }}>{csc.codigo}</Text>
                </View>
                <View style={styles.v2}>
                    <Text style={styles.tprecios}>${(csc.precio * cantidad).toFixed(2)}</Text>
                    <View style={styles.vm}>
                        <Button title='-' color="#deddddff" onPress={handleDecrement} />
                        <Text style={{ fontWeight: "bold", fontSize: 14, marginHorizontal: 8 }}>{cantidad}</Text>
                        <Button title='+' color="#C6F432" onPress={handleIncrement} />
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    to:{
        flexDirection:"row",
        borderRadius:6,
        borderColor: "#cbc9c9ff",
        borderWidth:1,
        marginVertical:6,
        marginHorizontal:15,
        padding:8
    },
    img:{
        width:75,
        height:75,
        marginLeft:10,
        marginRight:20
    },
    tprecios:{
        fontSize:15,
        fontWeight:"bold"
    },
    v2:{
        flexDirection:"row", 
        alignItems:"center",
        justifyContent:"space-between", 
        width:"80%"
    },
    vm:{
        flexDirection:"row", 
        alignContent:"center", 
        justifyContent:"space-between", 
        alignItems:"center"
    }

})
import { Alert, Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function ItemCarrito(cascos) {
    const [subtotal, setsubtotal] = useState()
    console.log(cascos.csc.codigo)
  return (
    <TouchableOpacity style={styles.to}>
        <View>
            <Image style={styles.img} source={{uri: cascos.csc.imagen}}/>
        </View>
        <View>
            <View>
                <Text style={{fontWeight:"500"}}>{cascos.csc.nombre}</Text>
                <Text style={{fontSize:13}}>{cascos.csc.codigo}</Text>
                {cascos.csc.talla && (
                <Text style={{fontSize:13}}>Talla: {cascos.csc.talla}</Text>
           )}
            </View>
            <View style={styles.v2}>
                <Text style={styles.tprecios}>${cascos.csc.precio}</Text>
                <View style={styles.vm}>
                    <Button title='-' color="#deddddff"></Button>
                    <Text style={{fontWeight:"bold", fontSize:14, marginHorizontal:8}}>1</Text>
                    <Button title='+' color="#C6F432"></Button>
                </View>
            </View>
        </View>
    </TouchableOpacity>
  )
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
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function TipoSelector({seleccion}) {
    const tipos = ["Todos", "Abatible", "Abierto", "Integral", "Off-Road"]
    const [itemSelec, setitemSelec] = useState(null);
  return (
    <View style={styles.tcv}>
      {tipos.map((item, index)=>(
        <TouchableOpacity
            key={index}
            style={[
                styles.tcbtn,
                itemSelec === index && styles.tcbtnP
            ]}
            onPress={() => {
                setitemSelec(index);
                seleccion(item)
                }}>
                <Text>{item}</Text>              
        </TouchableOpacity>
        ))}
    </View>
  )
}

const styles = StyleSheet.create({
    tcv:{
      flexDirection:"row",
    },
    tcbtn:{
      backgroundColor:"#e5e6e2ff",
      margin:5,
      padding:5,
      borderRadius:5
    },
    tcbtnP:{
      backgroundColor:"#C6F432", margin:5, padding:5   
    },
})
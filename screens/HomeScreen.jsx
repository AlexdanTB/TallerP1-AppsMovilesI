import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import datos from "../assets/data/cascos.json"
import CascoItem from '../components/CascoItem';
import LogoImagen from '../components/LogoImagen';

export default function HomeScreen() {
  const cascos = datos;
  return (
    <View style={{backgroundColor:"#f9f9f9ff"}}>
      <View>
        <LogoImagen/>
      </View>
      <View>
        <Text style={{fontWeight:"bold", fontSize:15, margin:8}}>TIPOS DE CASCOS</Text>
        <View style={styles.tcv}>
          <TouchableOpacity style={{backgroundColor:"#C6F432", margin:5, padding:5}}>
            <Text>Todos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tcbtn}>
            <Text>Abatibles</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tcbtn}>
            <Text>Abierto</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tcbtn}>
            <Text>Integrales</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.tcbtn}>
            <Text>Off-Road</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.vcascos}>
          <FlatList style={styles.fl}
            data={cascos.cascos}
            numColumns={2}
            contentContainerStyle={{alignItems: 'center'}}
            renderItem={({item}) =>
              <CascoItem csc = {item}/>         
            }
          />
        </View>

      </View>
                       
    </View>
  )
}

const styles = StyleSheet.create({
    logoimg: {
        width: 200,
        height:90,
        resizeMode:"contain"
    },
    vlogo:{
      padding:3,
      height:100,
      backgroundColor: "#e7f9a6ff",
      alignContent:"center",
      justifyContent:"center"
    },
    tcv:{
      flexDirection:"row",
    },
    tcbtn:{
      backgroundColor:"#e5e6e2ff",
      margin:5,
      padding:5,
      borderRadius:5
    },
    vcascos:{
      padding:3,
      width:"95%",
      height:"82%"
    },
    fl:{
      alignContent:"center",
    }
})
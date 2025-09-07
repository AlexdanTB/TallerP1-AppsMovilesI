import { Button, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import datos from "../assets/data/cascos.json"
import CascoItem from '../components/CascoItem';
import LogoImagen from '../components/LogoImagen';
import TipoSelector from '../components/TipoSelector';

export default function HomeScreen() {
  const cascos = datos;

  const [tiposel, settiposel] = useState(null)
  const cascosFiltrados = tiposel
    ? cascos.cascos.filter(p => p.tipo === tiposel)
    : cascos.cascos;

  const tomarTipo = (type)=>{
    if (type === 'Todos') {
    settiposel(null);
  } else {
    settiposel(type);
  }

  };


  return (
    <View style={{backgroundColor:"#f9f9f9ff"}}>
      <View>
        <LogoImagen/>
      </View>
      <View>
        <Text style={{fontWeight:"bold", fontSize:15, margin:8}}>TIPOS DE CASCOS</Text>
        <View style={styles.tcv}>

          <TipoSelector seleccion={tomarTipo}/>

         
        </View>
        <View style={styles.vcascos}>
          <FlatList style={styles.fl}
            data={cascosFiltrados}
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
    tcbtnP:{
      backgroundColor:"#C6F432", margin:5, padding:5   
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
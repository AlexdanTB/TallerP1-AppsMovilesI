import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LogoImagen from '../components/LogoImagen'

export default function UsuarioScreen() {
  return (
    <View>
      <View>
        <LogoImagen txt="INFORMACIÓN DE CUENTA"/>
      </View>
      <View style={{margin:5, padding:5}}>
        <View>
          <Text style={styles.titulo}>Datos personales</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.to}>
            <Text>Nombres completos</Text>
            <Text style={styles.valor}>Alex Daniel Toapanta</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.to}>
            <Text>Correo electrónico</Text>
            <Text style={styles.valor}>alexdanieltb220@gmail.com</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.to}>
            <Text>Número de celular</Text>
            <Text style={styles.valor}>+593 63849684</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.to}>
            <Text>Ciudad / País</Text>
            <Text style={styles.valor}>Quito - Ecuador</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  titulo:{
    fontSize:15,
    fontWeight:"bold"
  },
  to:{
    marginHorizontal:5,
    marginBottom:4,
    padding:10,
    borderColor:"#e9e9e9ff",
    borderWidth:1,
    backgroundColor:"#ffffff",
    borderRadius:5
  },
  valor:{
    fontWeight:"600"
  }
})
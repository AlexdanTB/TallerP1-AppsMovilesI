import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LogoImagen from '../components/LogoImagen'

export default function RegistroScreen({navigation}) {
  return (
    <View>
      <LogoImagen txt="REGISTRO"/>
      <View>
        <Text>Nombres completos</Text>
        <TextInput></TextInput>
        <Text>Correo electrónico</Text>
        <TextInput></TextInput>
        <Text>Número de celular</Text>
        <TextInput></TextInput>
        <Text>Ciudad</Text>
        <TextInput></TextInput>
      </View>
        <Text>REGISTRAR</Text>
      <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
      </TouchableOpacity>
        
    </View>
      
  )
}

const styles = StyleSheet.create({})
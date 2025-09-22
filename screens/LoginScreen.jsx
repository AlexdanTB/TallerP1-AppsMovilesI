import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import LogoImagen from '../components/LogoImagen';

export default function LoginScreen() {
  return (
    <View>
        <LogoImagen txt='LOGIN'/>
        <View>
          <Text>Usuario</Text>
          <TextInput></TextInput>
          <Text>Contraseña</Text>
          <TextInput secureTextEntry={true}></TextInput>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({})
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LogoImagen from '../components/LogoImagen';

export default function LoginScreen({navigation}) {
  return (
    <View>
        <LogoImagen txt='LOGIN'/>
        <View>
          <Text>Usuario</Text>
          <TextInput></TextInput>
          <Text>Contraseña</Text>
          <TextInput secureTextEntry={true}></TextInput>
        </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Tabs')}>
            <Text>INGRESAR</Text>
          </TouchableOpacity>            
        <TouchableOpacity onPress={()=> navigation.navigate('Registro')}>
          <Text>¿No tienes cuenta? Registrate aquí</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({})
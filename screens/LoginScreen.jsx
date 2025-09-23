import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import LogoImagen from '../components/LogoImagen';

export default function LoginScreen({ navigation }) {
  return (
    <View>
      <LogoImagen txt='LOGIN' />
      <View style={{alignItems:"center"}}>
        <View style={styles.vw1}>
          <Text style={styles.tit}>Usuario</Text>
          <TextInput style={styles.ti}></TextInput>
          <Text style={styles.tit}>Contraseña</Text>
          <TextInput secureTextEntry={true} style={styles.ti} />
          <TouchableOpacity style={styles.btnIngresar}
            onPress={() => navigation.navigate('Tabs')}>
            <Text style={{ fontSize: 18, fontWeight: "bold", padding: 6 }}>INGRESAR</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
          <Text style={{ margin: 7 }}>¿No tienes cuenta? Registrate aquí</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}

const styles = StyleSheet.create({
  vw1: {
    padding: 5,
    margin: 10,
    alignItems: "center",
    backgroundColor: "#f8f8f8ff",
    width: "80%"
  },
  tit: {
    fontSize: 17,
    fontWeight: "bold"
  },
  ti: {
    backgroundColor: "#ffffff",
    borderColor: "#C6F432",
    borderWidth: 0.5,
    borderRadius: 5,
    margin: 8,
    padding: 10,
    width: "80%",
    fontSize: 18,
    height: 40
  },
  btnIngresar: {
    backgroundColor: "#C6F432",
    alignItems: "center",
    justifyContent: "center",
    width: 200,
    padding: 3,
    margin: 8,
    borderRadius: 6
  },
  vw2: {
    alignItems: "center"
  }
})
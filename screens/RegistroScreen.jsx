import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import LogoImagen from '../components/LogoImagen'

export default function RegistroScreen({ navigation }) {
    const [celular, setcelular] = useState('+593 ')
    return (
        <View>
            <LogoImagen txt="REGISTRO" />
            <View style={{ alignItems: "center", marginTop:8}}>
                <View style={styles.vw0}>
                    <View style={{ width: "90%" }}>
                        <Text style={styles.tit}>Nombre de usuario</Text>
                        <TextInput style={styles.ti} />
                        <Text style={styles.tit}>Nombres completos</Text>
                        <TextInput style={styles.ti} />
                        <Text style={styles.tit}>Correo electrónico</Text>
                        <TextInput style={styles.ti} />
                        <Text style={styles.tit}>Número de celular</Text>
                        <TextInput style={styles.ti} value={celular} keyboardType='numeric' onChangeText={setcelular} />
                        <Text style={styles.tit}>Ciudad</Text>
                        <TextInput style={styles.ti} />
                    </View>
                    <TouchableOpacity style={styles.btnRegistrar}
                        onPress={() => navigation.navigate('Login')}>
                        <Text style={styles.txtReg}>REGISTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>


    )
}

const styles = StyleSheet.create({
    vw0: {
        alignItems: "center",
        width: "85%",
        backgroundColor: "#fafafaff",
        margin: 5,
        padding: 8,
        borderRadius: 5
    },
    vw1: {
        padding: 5,
        margin: 10,
        alignItems: "center"
    },
    tit: {
        fontSize: 16,
        fontWeight: "500",
        marginLeft: 10
    },
    ti: {
        backgroundColor: "#ffffff",
        borderColor: "#C6F432",
        borderWidth: 0.5,
        borderRadius: 5,
        margin: 8,
        padding: 10,
        width: "100%",
        fontSize: 18,
        height: 40
    },
    btnRegistrar: {
        backgroundColor: "#C6F432",
        alignItems: "center",
        justifyContent: "center",
        width: 200,
        borderRadius: 6,
        padding: 3,
        margin: 8
    },
    txtReg: {
        fontSize: 18,
        fontWeight: "bold",
        padding: 6
    }
})
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import LogoImagen from '../components/LogoImagen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegistroScreen({ navigation }) {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [celular, setCelular] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    const handleRegistro = async () => {
        if (!username || !nombre || !email || !password || !celular || !ciudad) {
            Alert.alert("Error", "Por favor, completa todos los campos.");
            return;
        }

        const userData = {
            username: username,
            nombre: nombre,
            email: email,
            celular: celular,
            ciudad: ciudad,
            password: password
        };

        try {

            await AsyncStorage.setItem('user_data', JSON.stringify(userData));
            Alert.alert("Éxito", "Cuenta registrada correctamente.");
            navigation.navigate('Login');
        } catch (error) {
            Alert.alert("Error", "No se pudo guardar la información del usuario.");
            console.error("AsyncStorage error: ", error);
        }
    };

    return (
        <View style={{ flex: 1 }}>
            <LogoImagen txt="REGISTRO" />
            <View style={styles.contentContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.tit}>Nombre de usuario</Text>
                    <TextInput style={styles.ti} onChangeText={setUsername} value={username} />
                    <Text style={styles.tit}>Nombres completos</Text>
                    <TextInput style={styles.ti} onChangeText={setNombre} value={nombre} />
                    <Text style={styles.tit}>Correo electrónico</Text>
                    <TextInput style={styles.ti} onChangeText={setEmail} value={email} keyboardType="email-address" />
                    <Text style={styles.tit}>Contraseña</Text>
                    <TextInput style={styles.ti} onChangeText={setPassword} value={password} secureTextEntry={true} />
                    <Text style={styles.tit}>Número de celular</Text>
                    <TextInput style={styles.ti} value={celular} keyboardType='numeric' onChangeText={setCelular} />
                    <Text style={styles.tit}>Ciudad</Text>
                    <TextInput style={styles.ti} onChangeText={setCiudad} value={ciudad} />
                    <TouchableOpacity style={styles.btnRegistrar} onPress={handleRegistro}>
                        <Text style={styles.txtReg}>REGISTRAR</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    contentContainer: {
        alignItems: "center",
        marginTop: 8,
    },
    formContainer: {
        width: "90%",
    },
    vw0: {
        width: "100%",
        alignItems: "center",
    },
    tit: {
        fontSize: 16,
        fontWeight: "bold",
        marginTop: 10,
    },
    ti: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    btnRegistrar: {
        marginTop: 20,
        backgroundColor: '#C6F432',
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
    },
    txtReg: {
        fontSize: 18,
        fontWeight: "bold",
    },
});
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import LogoImagen from '../components/LogoImagen';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async () => {
        if (!username || !password) {
            Alert.alert("Error", "Por favor, ingresa tu usuario y contraseña.");
            return;
        }

        try {
            const storedUserData = await AsyncStorage.getItem('user_data');
            if (storedUserData) {
                const userData = JSON.parse(storedUserData);
                if (username === userData.username && password === userData.password) {
                    navigation.navigate('Tabs');
                } else {
                    Alert.alert("Error", "Usuario o contraseña incorrectos.");
                }
            } else {
                Alert.alert("Error", "No hay una cuenta registrada. Por favor, regístrate.");
            }
        } catch (error) {
            Alert.alert("Error", "Ocurrió un error al iniciar sesión.");
            console.error("AsyncStorage error: ", error);
        }
    };

    return (
        <View style={styles.container}>
            <LogoImagen txt='LOGIN' />
            <View style={styles.contentContainer}>
                <View style={styles.formContainer}>
                    <Text style={styles.tit}>Usuario</Text>
                    <TextInput style={styles.ti} onChangeText={setUsername} value={username} />
                    <Text style={styles.tit}>Contraseña</Text>
                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            secureTextEntry={!showPassword}
                            style={[styles.ti, { flex: 1 }]}
                            onChangeText={setPassword}
                            value={password}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Text style={{ marginLeft: 8, fontSize: 18 }}>
                                {showPassword ? ' x ' : '👁️'}
                            </Text>
                        </TouchableOpacity>
                     </View>
                    <TouchableOpacity style={styles.btnIngresar} onPress={handleLogin}>
                        <Text style={{ fontSize: 18, fontWeight: "bold", padding: 6 }}>INGRESAR</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Registro')}>
                    <Text style={{ margin: 7 }}>¿No tienes cuenta? Regístrate aquí</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    contentContainer: {
        alignItems: "center",
        flex: 1,
    },
    formContainer: {
        width: "90%",
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
    btnIngresar: {
        marginTop: 20,
        backgroundColor: '#C6F432',
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
    },
});
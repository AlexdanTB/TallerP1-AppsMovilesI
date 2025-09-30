import { StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import React, { useState } from 'react';
import LogoImagen from '../components/LogoImagen';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RegistroScreen({ navigation }) {
    const [nombre, setNombre] = useState('');
    const [emailUser, setEmailUser] = useState('');
    const [emailDomain, setEmailDomain] = useState('@gmail.com');
    const email = emailUser ? `${emailUser}${emailDomain}` : '';
    const [celular, setCelular] = useState('');
    const [ciudad, setCiudad] = useState('');
    const ciudadesEcuador = [
    "Quito", "Guayaquil", "Cuenca", "Santo Domingo", "Machala", "Durán", "Manta", "Portoviejo",
    "Loja", "Ambato", "Esmeraldas", "Quevedo", "Riobamba", "Milagro", "Ibarra", "Babahoyo",
    "Tulcán", "Latacunga", "La Libertad", "Salinas", "Santa Elena", "Sangolquí", "Playas", "Otavalo"
    ];
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [username, setUsername] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
     const validarEmail = (correo) => {
        return /\S+@\S+\.\S+/.test(correo);
    };

    const handleRegistro = async () => {
        if (!username || !nombre || !emailUser || !password || !celular || !ciudad) {
            Alert.alert("Error", "Por favor, completa todos los campos.");
            return;
        }
         if (!validarEmail(email)) {
            Alert.alert("Error", "Por favor, ingresa un correo electrónico válido.");
            return;
        }
        if (password.length < 6) {
            Alert.alert("Error", "La contraseña debe tener al menos 6 caracteres.");
            return;
        }
        if (password !== confirmPassword) {
            Alert.alert("Error", "Las contraseñas no coinciden.");
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
                   <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <TextInput
                        style={[styles.ti, { flex: 1 }]}
                        placeholder="usuario"
                        value={emailUser}
                        onChangeText={setEmailUser}
                        autoCapitalize="none"
                    />
                    <Picker
                    selectedValue={emailDomain}
                    onValueChange={setEmailDomain}
                    style={{ width: 130, height: 55 }}
                    itemStyle={{ fontSize: 12 }}
                    >
                    <Picker.Item label="@gmail.com" value="@gmail.com" />
                    <Picker.Item label="@hotmail.com" value="@hotmail.com" />
                    <Picker.Item label="@outlook.es" value="@outlook.es" />
                    </Picker>
                    </View>
                    {emailUser.length > 0 && (
                    <Text style={{ fontSize: 13, color: '#555', marginBottom: 5 }}>
                    Tu correo será: <Text style={{ fontWeight: 'bold' }}>{email}</Text>
                    </Text>
                    )}
                    <Text style={styles.tit}>Contraseña</Text>
                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            style={[styles.ti, { flex: 1 }]}
                            onChangeText={setPassword}
                            value={password}
                            secureTextEntry={!showPassword}
                        />
                        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                            <Text style={{ marginLeft: 8, fontSize: 18 }}>
                                {showPassword ? ' x ' : '👁️'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                     <Text style={styles.tit}>Confirmar contraseña</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TextInput
                            style={[styles.ti, { flex: 1 }]}
                            onChangeText={setConfirmPassword}
                            value={confirmPassword}
                            secureTextEntry={!showConfirmPassword}
                        />
                        <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
                            <Text style={{ marginLeft: 8, fontSize: 18 }}>
                                {showConfirmPassword ? ' x ' : '👁️'}
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.tit}>Número de celular</Text>
                    <TextInput style={styles.ti} value={celular} keyboardType='numeric' onChangeText={setCelular} />
                    <Text style={styles.tit}>Ciudad</Text>
                    <View style={[styles.ti, { padding: 0 }]}>
                        <Picker
                        selectedValue={ciudad}
                        onValueChange={setCiudad}
                        style={{ height: 57, fontSize: 20 }}
                        itemStyle={{ fontSize: 13 }} 
                        >
                       <Picker.Item label="Selecciona una ciudad" value="" style={{ fontSize: 17 }} />
                        {ciudadesEcuador.map((c) => (
                        <Picker.Item key={c} label={c} value={c} />
                        ))}
                        </Picker>
                    </View>
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
    marginTop: 40, 
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
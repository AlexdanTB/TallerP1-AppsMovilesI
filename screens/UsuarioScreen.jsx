import { StyleSheet, Text, TouchableOpacity, View, TextInput, Alert, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import LogoImagen from '../components/LogoImagen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Pedido from '../components/Pedido';

export default function UsuarioScreen() {
    const [editing, setEditing] = useState(false);
    const [user, setUser] = useState({
        nombre: '',
        correo: '',
        celular: '',
        ciudad: ''
    });

    const [historial, setHistorial] = useState([]);
    const [pedidoSeleccionado, setPedidoSeleccionado] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        const loadUserData = async () => {
            try {
            const storedUserData = await AsyncStorage.getItem('user_data');
            if (storedUserData) {
                const parsedUserData = JSON.parse(storedUserData);
                setUser({
                    nombre: parsedUserData.nombre,
                    correo: parsedUserData.email,
                    celular: parsedUserData.celular,
                    ciudad: parsedUserData.ciudad
                });

                const userKey = `historial_pedidos_${parsedUserData.email}`;
                const h = await AsyncStorage.getItem(userKey);
                if (h) setHistorial(JSON.parse(h));
                else setHistorial([]);
            } else {
                Alert.alert("Aviso", "No se encontró información de usuario. Por favor, inicia sesión.");
            }
        } catch (error) {
            console.error("Error al cargar los datos del usuario:", error);
        }
};

const loadHistorial = async () => {
        try {
            const h = await AsyncStorage.getItem('historial_pedidos');
            if (h) setHistorial(JSON.parse(h));
            else setHistorial([]);
        } catch (e) { }
    };

    loadUserData();
    loadHistorial();
}, []);

    const handleChange = (key, value) => {
        setUser({ ...user, [key]: value });
    };

    const handleSave = async () => {
        try {
            const storedUserData = await AsyncStorage.getItem('user_data');
            if (storedUserData) {
                const parsedUserData = JSON.parse(storedUserData);
                const updatedUserData = {
                    ...parsedUserData,
                    nombre: user.nombre,
                    email: user.email,
                    celular: user.celular,
                    ciudad: user.ciudad
                };
                await AsyncStorage.setItem('user_data', JSON.stringify(updatedUserData));
                Alert.alert("Éxito", "Información actualizada correctamente.");
                setEditing(false);
            }
        } catch (error) {
            Alert.alert("Error", "No se pudo actualizar la información.");
            console.error("Error al guardar los datos del usuario:", error);
        }
    };
    console.log(historial)

    return (
        <View style={styles.container}>
            <LogoImagen txt="INFORMACIÓN DE CUENTA" />
            <View style={styles.card}>
                <Text style={styles.titulo}>Datos personales</Text>
                <View style={styles.infoGroup}>
                    <View style={styles.infoItem}>
                        <Text style={styles.label}>Nombres completos</Text>
                        {editing ? (
                            <TextInput
                                style={styles.input}
                                value={user.nombre}
                                onChangeText={v => handleChange('nombre', v)}
                            />
                        ) : (
                            <Text style={styles.valor}>{user.nombre}</Text>
                        )}
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.label}>Correo electrónico</Text>
                        {editing ? (
                            <TextInput
                                style={styles.input}
                                value={user.correo}
                                onChangeText={v => handleChange('correo', v)}
                                keyboardType="email-address"
                                autoCapitalize="none"
                            />
                        ) : (
                            <Text style={styles.valor}>{user.correo}</Text>
                        )}
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.label}>Número de celular</Text>
                        {editing ? (
                            <TextInput
                                style={styles.input}
                                value={user.celular}
                                onChangeText={v => handleChange('celular', v)}
                                keyboardType="phone-pad"
                            />
                        ) : (
                            <Text style={styles.valor}>{user.celular}</Text>
                        )}
                    </View>
                    <View style={styles.infoItem}>
                        <Text style={styles.label}>Ciudad / País</Text>
                        {editing ? (
                            <TextInput
                                style={styles.input}
                                value={user.ciudad}
                                onChangeText={v => handleChange('ciudad', v)}
                            />
                        ) : (
                            <Text style={styles.valor}>{user.ciudad}</Text>
                        )}
                    </View>
                </View>
                <TouchableOpacity
                    style={styles.editBtn}
                    onPress={editing ? handleSave : () => setEditing(true)}>
                    <Text style={styles.editBtnText}>{editing ? 'Guardar' : 'Editar'}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.card}>
                <Text style={styles.titulo}>Historial de pedidos</Text>
                <FlatList
                data={historial}
                renderItem={({item})=>(
                    <TouchableOpacity style={styles.toped}onPress={()=>{setPedidoSeleccionado(item); setModalVisible(true);}}>
                        <Text style={styles.valor}>Pedido: {new Date(item.fecha).toLocaleString()}</Text>
                        <Text style={styles.label}>Total: ${item.total.toFixed(2)}</Text>
                    </TouchableOpacity>    )}
                ListEmptyComponent={<Text>No hay pedidos</Text>}
                ></FlatList>
                <Pedido visible={modalVisible} pedido={pedidoSeleccionado} cerrar={()=> setModalVisible(false)}></Pedido>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9f9f9',
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        margin: 20,
        borderRadius: 10,
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    titulo: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 12,
        textAlign: 'center',
    },
    infoGroup: {
        marginBottom: 20,
    },
    infoItem: {
        marginBottom: 15,
    },
    label: {
        fontSize: 14,
        color: '#666',
        fontWeight: '500',
    },
    valor: {
        fontSize: 16,
        fontWeight: '500',
        marginTop: 5,
        color: '#333',
    },
    input: {
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        fontSize: 18,
        marginTop: 5,
        paddingVertical: 5,
    },
    editBtn: {
        backgroundColor: '#C6F432',
        padding: 6,
        borderRadius: 5,
        alignItems: 'center',
    },
    editBtnText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
    },
    toped:{
        borderWidth:0.5,
        borderColor:"#C6F432",
        borderRadius:3,
        padding:5,
        margin:2
    }
});
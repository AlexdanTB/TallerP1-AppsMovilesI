import { Button, FlatList, Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Pedido({ visible, pedido, cerrar }) {
    if (!pedido) return null;
    return (
        <Modal visible={visible}>
            <View style={styles.modalv1}>
                <View style={styles.modalc}>
                    <Text style={styles.titulo}>Pedido del {new Date(pedido.fecha).toLocaleString()}</Text>
                    <FlatList
                        data={pedido.productos}
                        renderItem={({ item }) => (
                            <View style={styles.item}>
                                <Text>{item.nombre} ({item.talla}) x{item.cantidad}</Text>
                                <Text>${item.precio}</Text>
                            </View>
                        )}
                    />
                    <Text>Subtotal: ${pedido.subtotal.toFixed(2)}</Text>
                    <Text>IVA: ${pedido.iva.toFixed(2)}</Text>
                    <Text style={styles.total}>Total: ${pedido.total.toFixed(2)}</Text>
                    <Button title="Cerrar" onPress={cerrar} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    modalv1: {
        flex: 1, 
        justifyContent: 'center', 
        alignItems: 'center', 
        backgroundColor: '#0008'
    },
    modalc: {
        backgroundColor: '#fff', 
        padding: 20, 
        borderRadius: 10, 
        width: '90%'
    },
    titulo: {
        fontWeight: 'bold', 
        fontSize: 18, 
        marginBottom: 10        
    },
    item: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        marginBottom: 5
    },
    total: {
        fontWeight: 'bold', 
        marginTop: 10
    }
});
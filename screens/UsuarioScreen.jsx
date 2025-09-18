import { StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import LogoImagen from '../components/LogoImagen'

export default function UsuarioScreen() {
  const [editing, setEditing] = useState(false)
  const [user, setUser] = useState({
    nombre: 'Alex Daniel Toapanta',
    correo: 'alexdanieltb220@gmail.com',
    celular: '+593 63849684',
    ciudad: 'Quito - Ecuador'
  })

  const handleChange = (key, value) => {
    setUser({ ...user, [key]: value })
  }

  return (
    <View style={styles.container}>
      <LogoImagen txt="INFORMACIÓN DE CUENTA"/>
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
          onPress={() => setEditing(!editing)}
        >
          <Text style={styles.editBtnText}>{editing ? 'Guardar' : 'Editar'}</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f8fa',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 2,
    marginTop: 18,
  },
  titulo: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#222',
    textAlign: 'center',
  },
  infoGroup: {
    marginBottom: 18,
  },
  infoItem: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  valor: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 6,
  },
  input: {
    fontSize: 16,
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  editBtn: {
    backgroundColor: '#2563eb',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  editBtnText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
})
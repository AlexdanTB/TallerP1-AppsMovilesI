import { Button, Image, Modal, Share, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import LogoImagen from '../components/LogoImagen'
import { CarritoContx } from '../App'

export default function CascoItem(cascos) {
    const {agregarCarrito} = useContext(CarritoContx)
    const [mostrar, setMostrar] = useState(false)
    const [talla, setTalla] = useState(null) 
  return (
    <TouchableOpacity style={styles.toc} onPress={()=> setMostrar(true)}>
        <Image style={styles.img} source={{uri: cascos.csc.imagen}}/>
        <Text style={styles.tcod}>{cascos.csc.codigo}</Text>
        <Text style={styles.tnom}>{cascos.csc.nombre}</Text>
        <Text style={styles.tprecio}>${cascos.csc.precio}</Text>

        <Modal visible={mostrar}>
            <View>
                <LogoImagen txt = "DETALLES"/>
                <View style={{alignItems:"center", marginTop:10}}>
                    <Image style={styles.imgdet} source={{uri: cascos.csc.imagen}}/>
                </View>
                <View style={{margin:10}}>
                    <View style={{flexDirection:"row" ,justifyContent:"space-between", padding:10}}>
                        <View>
                            <Text style={{fontSize:18, fontWeight:"500"}}>{cascos.csc.nombre}</Text>
                            <Text>{cascos.csc.codigo}</Text>
                        </View>
                        <View>
                            <Text style={{fontSize:22, fontWeight:"bold", marginRight:5}}>${cascos.csc.precio}</Text>
                        </View>
                    </View>

                    <View style={styles.vdet}>
                        <View style={styles.v2det}>
                            <Text>Marca</Text>
                            <Text style={{fontWeight:"bold"}}>{cascos.csc.marca}</Text>
                        </View>
                        <View style={styles.v2det}>
                            <Text>Material</Text>
                            <Text style={{fontWeight:"bold"}}>{cascos.csc.material}</Text>
                        </View>
                        <View style={styles.v2det}>
                            <Text>Tipo</Text>
                            <Text style={{fontWeight:"bold"}}>{cascos.csc.tipo}</Text>
                        </View>
                        <View style={styles.v2det}>
                            <Text>Certificación</Text>
                            <Text style={{fontWeight:"bold"}}>{cascos.csc.hologacion}</Text>
                        </View>
                    </View>

<View>
    <Text>Seleccione la talla:</Text>
    <View style={{flexDirection:"row", marginVertical:5}}>
      {["S","M","L","XL"].map(t => (
        <TouchableOpacity 
          key={t} 
          style={{
            marginHorizontal:8, 
            padding:6, 
            borderWidth:1, 
            borderColor: talla===t ? "#C6F432" : "#ccc", 
            backgroundColor: talla===t ? "#C6F432" : "#fff",
            borderRadius:5
          }}
          onPress={()=> setTalla(t)}
        >
          <Text style={{fontWeight:"bold"}}>{t}</Text>
        </TouchableOpacity>
      ))}
    </View>
    {talla && <Text style={{marginTop:5}}>Talla seleccionada: <Text style={{fontWeight:"bold"}}>{talla}</Text></Text>}
</View>

                </View>
            </View>

            <View style={{flexDirection:"row", justifyContent:"center"}}>
                <View>
                    <Button title='Volver' color="#000000"
                    onPress={()=> setMostrar(false)}/>
                </View>
                <TouchableOpacity style={styles.btnCompra} onPress={()=> {
                    agregarCarrito(cascos.csc)
                    agregarCarrito({...cascos.csc, talla})
                }}>
                    <Text style={{fontWeight:"bold", fontSize:17}}>COMPRAR</Text>
                </TouchableOpacity>
            </View>
            
        </Modal>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    img: {
        width:125,
        height:125,
        marginBottom:8,
        marginHorizontal:5
    },
    toc:{
        width:"auto",
        padding:10,
        margin:6,
        borderRadius:5,
        borderWidth:1,
        borderColor:"#cccbcbff",
        backgroundColor:"#ffffff"
    },
    tprecio:{
        fontSize:17,
        fontWeight:"bold"
    },
    tnom:{
        fontSize:14,
        fontWeight:"500"
    },
    tcod:{
        fontSize:12,
        fontWeight:"medium"
    },
    imgdet:{
        width:185,
        height:185
    },
    vdet:{
        flexDirection:"row",
        borderColor:"#C6F432",
        borderWidth:2,
        borderRadius:5,
        marginVertical:10,
        paddingVertical:10
    },
    v2det:{
        paddingHorizontal:18,
        borderRightWidth:1,
        borderRightColor: "#cdcdcdff",
        alignItems:"center"
    },
    btnCompra:{
        backgroundColor:"#C6F432",
        width:250,
        marginLeft:20,
        alignItems:"center",
        justifyContent:"center"
    }
})
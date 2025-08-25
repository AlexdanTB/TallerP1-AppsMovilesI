import { Button, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function logo(txt) {
  return (
    <View style={styles.view}>
      <Image style={styles.img}source={{uri: "https://i.postimg.cc/pVhj3sHP/logo.png"}}/>
      <View style={styles.tit}>
        <Text style={styles.txt}>{txt.txt}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  img:{
    width:140,
    height:60,
    resizeMode:"contain",
    marginRight:20,
    marginLeft:5
  },
  view:{
    backgroundColor:"#ffffff",
    flexDirection:"row"
  },
  tit:{
    borderBottomWidth:2,
    borderBottomColor:"#C6F432",
    width:"auto",
    justifyContent:"center",
    alignItems:"center"
  },
  txt:{
    fontSize:15,
    fontWeight:"bold"
  }

})
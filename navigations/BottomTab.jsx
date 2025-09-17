import React, { useContext } from "react";  
import { View, Text } from "react-native";  
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import CarritoScreen from "../screens/CarritoScreen";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import UsuarioScreen from "../screens/UsuarioScreen";
import { CarritoContx } from "../App";       


const Tab = createBottomTabNavigator()

function MyTabs(){
    const { carrito } = useContext(CarritoContx); 
    const totalItems = carrito.reduce((suma, item) => suma + (item.cantidad || 1), 0);
    return(
        <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarStyle: {backgroundColor: "#C6F432"}, headerShown: false}}>
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarActiveTintColor:"#000000",
                tabBarInactiveTintColor:"#5c6833ff",
                tabBarIcon: ()=> <Entypo name="home" size={24} color="black" />
            }}
            />
           <Tab.Screen 
  name="Carrito" 
  component={CarritoScreen}
  options={{
    tabBarActiveTintColor:"#000000",
    tabBarInactiveTintColor:"#5c6833ff",
    tabBarIcon: ({ color, size }) => (
      <View>
        <Entypo name="shopping-cart" size={24} color={color} />
        {totalItems > 0 && (
          <View
            style={{
              position: "absolute",
              right: -6,
              top: -3,
              backgroundColor: "red",
              borderRadius: 10,
              width: 18,
              height: 18,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: "white", fontSize: 10, fontWeight: "bold" }}>
              {totalItems}
            </Text>
          </View>
        )}
      </View>
    ),
  }}
/>
            <Tab.Screen name="Usuario" component={UsuarioScreen}
             options={{
                tabBarActiveTintColor:"#000000",
                tabBarInactiveTintColor:"#5c6833ff",
                tabBarIcon: ()=> <FontAwesome5 name="user" size={24} color="black" />
            }}/>
        </Tab.Navigator>
    )
}


export default function NavegadorBottom(){
    return(
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}
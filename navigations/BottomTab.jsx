import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import HomeScreen from "../screens/HomeScreen";
import CarritoScreen from "../screens/CarritoScreen";
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import UsuarioScreen from "../screens/UsuarioScreen";

const Tab = createBottomTabNavigator()

function MyTabs(){
    return(
        <Tab.Navigator initialRouteName="Home" screenOptions={{tabBarStyle: {backgroundColor: "#C6F432"}, headerShown: false}}>
            <Tab.Screen name="Home" component={HomeScreen}
            options={{
                tabBarActiveTintColor:"#000000",
                tabBarInactiveTintColor:"#5c6833ff",
                tabBarIcon: ()=> <Entypo name="home" size={24} color="black" />
            }}
            />
            <Tab.Screen name="Carrito" component={CarritoScreen}
             options={{
                tabBarActiveTintColor:"#000000",
                tabBarInactiveTintColor:"#5c6833ff",
                tabBarIcon: ()=> <Entypo name="shopping-cart" size={24} color="black"
                bar/>
            }}/>
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
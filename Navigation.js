import React from 'react';
import { BottomTabBar, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

//Screens
import HomeScreen from './screens/HomeScreen';
import CatalogoScreen from './screens/CatalogoScreen';
import HistorialScreen from './screens/HistorialScreen';
import PedidosScreen from './screens/PedidosScreen';
import { setStatusBarBackgroundColor } from 'expo-status-bar';



const Tab = createBottomTabNavigator();


function Mtabs() {
	return (
		<Tab.Navigator
		
		initialRouteName='Home'

		screenOptions={{
			tabActivetintColor: 'purple',
			
		}}>
			<Tab.Screen name='Home' component={HomeScreen} options={{tabBarIcon:({}) =>(<Ionicons name="home-sharp" size={24} color="black"  />)}}/>
			<Tab.Screen name='Catalogo' component={CatalogoScreen}  options={{tabBarIcon:({}) =>(<Ionicons name="pricetags" size={24} color="black" />)}}/>
			<Tab.Screen name='Historial' component={HistorialScreen} options={{tabBarIcon:({}) =>(<Ionicons name="ios-newspaper" size={24} color="black" />)}}/>
			<Tab.Screen name='Pedidos' component={PedidosScreen} options={{tabBarIcon:({}) =>(<Ionicons name="cart-sharp" size={24} color="black" />)}}/>
		</Tab.Navigator>
	);
 }

export default function Navigation() {
	return (
		<NavigationContainer>
			<Mtabs />
		</NavigationContainer>
	);
}

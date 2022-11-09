import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
//Screens
import {
	BienvenidaScreen,
	CatalogoScreen,
	HistorialScreen,
	HomeScreen,
	PedidosScreen,
} from '../screens';
import CatalogueStack from './CatalogueStack';

const Tab = createBottomTabNavigator();

function Mtabs() {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={{
				tabBarStyle:{
					backgroundColor:'#00047E'
				},
				tabBarActiveTintColor: '#18FF03',
				tabBarInactiveTintColor: 'white',
				headerShown: false,
			}}
		>
			<Tab.Screen
				name='Home'
				component={BienvenidaScreen}
				options={{
					tabBarIcon: ({color}) => (
						<Ionicons name='home-sharp' size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Catalogo'
				component={CatalogueStack}
				options={{
					tabBarIcon: ({color}) => (
						<Ionicons name='pricetags' size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Historial'
				component={HistorialScreen}
				options={{
					tabBarIcon: ({color}) => (
						<Ionicons name='ios-newspaper' size={24} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Pedidos'
				component={PedidosScreen}
				options={{
					tabBarIcon: ({color}) => (
						<Ionicons name='cart-sharp' size={24} color={color} />
					),
				}}
			/>
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

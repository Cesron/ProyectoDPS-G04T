import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
//Screens
import {
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
				tabBarStyle: {
					backgroundColor: '#00047E',
					height: 100,
				},
				tabBarActiveTintColor: '#18FF03',
				tabBarInactiveTintColor: 'white',
				tabBarLabelStyle:{
					fontSize: 15,
			},
				headerShown: false,
			}}
		>
			<Tab.Screen
				name='Home'
				component={HomeScreen}
				options={{
					tabBarLabel: 'INICIO',
					tabBarIcon: ({color}) => (
							<Ionicons name="home" size={35} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Catalogo'
				component={CatalogueStack}
				options={{
					tabBarIcon: ({color}) => (
						<Ionicons name='pricetags' size={35} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Historial'
				component={HistorialScreen}
				options={{
					tabBarIcon: ({color}) => (
						<Ionicons name='ios-newspaper' size={35} color={color} />
					),
				}}
			/>
			<Tab.Screen
				name='Pedidos'
				component={PedidosScreen}
				options={{
					tabBarIcon: ({color}) => (
						<Ionicons name='cart-sharp' size={35} color={color} />
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

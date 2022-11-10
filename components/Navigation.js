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
import PedidosStack from './PedidosStack';

const Tab = createBottomTabNavigator();

function Mtabs() {
	return (
		<Tab.Navigator
			initialRouteName='Home'
			screenOptions={{
				tabActivetintColor: 'purple',
				headerShown: false,
			}}
		>
			<Tab.Screen
				name='Home'
				component={BienvenidaScreen}
				options={{
					tabBarIcon: ({}) => (
						<Ionicons name='home-sharp' size={24} color='black' />
					),
				}}
			/>
			<Tab.Screen
				name='Catalogo'
				component={CatalogueStack}
				options={{
					tabBarIcon: ({}) => (
						<Ionicons name='pricetags' size={24} color='black' />
					),
				}}
			/>
			<Tab.Screen
				name='Historial'
				component={HistorialScreen}
				options={{
					tabBarIcon: ({}) => (
						<Ionicons name='ios-newspaper' size={24} color='black' />
					),
				}}
			/>
			<Tab.Screen
				name='Pedidos'
				component={PedidosStack}
				options={{
					tabBarIcon: ({}) => (
						<Ionicons name='cart-sharp' size={24} color='black' />
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

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CarritoScreen, PedidosScreen } from '../screens';

const Stack = createNativeStackNavigator();

export default function PedidosStack() {
	return (
		<Stack.Navigator
			initialRouteName='CatalogoScreen'
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name='PedidosScreen' component={PedidosScreen} />
			<Stack.Screen name='CarritoScreen' component={CarritoScreen} />
		</Stack.Navigator>
	);
}

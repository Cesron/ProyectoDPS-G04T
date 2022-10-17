import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CatalogoScreen, ProductoScreen } from '../screens';

const Stack = createNativeStackNavigator();

export default function CatalogueStack() {
	return (
		<Stack.Navigator
			initialRouteName='CatalogoScreen'
			screenOptions={{ headerShown: false }}
		>
			<Stack.Screen name='CatalogoScreen' component={CatalogoScreen} />
			<Stack.Screen name='ProductoScreen' component={ProductoScreen} />
		</Stack.Navigator>
	);
}

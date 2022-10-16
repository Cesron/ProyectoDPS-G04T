import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { BienvenidaScreen } from '../BienvenidaScreen';
import { LoginScreen } from '../LoginScreen';

const Stack = createNativeStackNavigator();

export default function LoginStack() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				initialRouteName='Home'
				screenOptions={{ headerShown: false }}
			>
				<Stack.Screen name='Bienvenida' component={BienvenidaScreen} />
				<Stack.Screen name='Login' component={LoginScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

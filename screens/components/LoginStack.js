import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BienvenidaScreen } from '../BienvenidaScreen';
import { LoginScreen } from '../LoginScreen';
import Navigation from './Navigation';

const Stack = createNativeStackNavigator();

export default function LoginStack() {
	return (
		<ApplicationProvider {...eva} theme={eva.dark}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName='Home'
					screenOptions={{ headerShown: false }}
				>
					<Stack.Screen name='Bienvenida' component={BienvenidaScreen} />
					<Stack.Screen name='Login' component={LoginScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</ApplicationProvider>
	);
}

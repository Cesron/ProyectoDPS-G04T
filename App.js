import React from 'react';
import { ApplicationProvider } from '@ui-kitten/components';
import * as eva from '@eva-design/eva';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { BienvenidaScreen } from './screens/BienvenidaScreen';
import { LoginScreen } from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<ApplicationProvider {...eva} theme={eva.dark}>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='Home'>
					<Stack.Screen name='Bienvenida' component={BienvenidaScreen} />
					<Stack.Screen name='Login' component={LoginScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</ApplicationProvider>
	);
}

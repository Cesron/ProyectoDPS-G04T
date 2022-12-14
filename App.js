import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import React from 'react';
import LoginStack from './components/LoginStack';
import Navigation from './components/Navigation';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import { LoginScreen } from './screens';
import { PerfilScreen } from './screens/PerfilScreen';

export default function App() {
	return (
		<ApplicationProvider {...eva} theme={eva.dark}>
			<AuthContextProvider>
				<AuthContext.Consumer>
					{({ logged }) => (logged ? <LoginScreen /> : <Navigation />)}
				</AuthContext.Consumer>
			</AuthContextProvider>
		</ApplicationProvider>
	);
}

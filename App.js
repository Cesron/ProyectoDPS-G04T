import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import React from 'react';
import Navigation from './components/Navigation';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import { LoginScreen } from './screens';

export default function App() {
	return (
		<ApplicationProvider {...eva} theme={eva.dark}>
			<AuthContextProvider>
				<AuthContext.Consumer>
					{({ logged }) => (!logged ? <LoginScreen /> : <Navigation />)}
				</AuthContext.Consumer>
			</AuthContextProvider>
		</ApplicationProvider>
	);
}

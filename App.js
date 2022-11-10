import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import React from 'react';
import LoginStack from './components/LoginStack';
import Navigation from './components/Navigation';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
<<<<<<< Updated upstream
import { LoginScreen } from './screens';
=======
import { PerfilScreen } from './screens/PerfilScreen';
>>>>>>> Stashed changes

export default function App() {
	return (
		<ApplicationProvider {...eva} theme={eva.dark}>
			<AuthContextProvider>
				<AuthContext.Consumer>
<<<<<<< Updated upstream
					{({ logged }) => (!logged ? <LoginScreen /> : <Navigation />)}
=======
					{({ logged }) => (logged ? <LoginStack /> : <Navigation />)}
>>>>>>> Stashed changes
				</AuthContext.Consumer>
			</AuthContextProvider>
		</ApplicationProvider>
	);
}

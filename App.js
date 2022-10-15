import React from 'react';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import { BienvenidaScreen } from './screens/BienvenidaScreen';
import CatalogoScreen from './screens/CatalogoScreen';
import LoginStack from './screens/components/LoginStack';
import Navigation from './screens/components/Navigation';

export default function App() {
	return (
		<AuthContextProvider>
			<AuthContext.Consumer>
				{({ logged }) => (!logged ? <LoginStack /> : <Navigation />)}
			</AuthContext.Consumer>
		</AuthContextProvider>
	);
}

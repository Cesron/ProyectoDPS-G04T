import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import React from 'react';
import LoginStack from './components/LoginStack';
import Navigation from './components/Navigation';
import { AuthContext, AuthContextProvider } from './context/AuthContext';
import { ProductoScreen } from './screens/ProductoScreen';
import { testScreen } from './screens/testScreen';



export default function App() {
	return (
		<ApplicationProvider {...eva} theme={eva.dark}>
			{/* <AuthContextProvider>
				<AuthContext.Consumer>
					{({ logged }) => (!logged ? <LoginStack /> : <Navigation />)}
				</AuthContext.Consumer>
			</AuthContextProvider> */}

		<ProductoScreen/>
		</ApplicationProvider>
	);
}

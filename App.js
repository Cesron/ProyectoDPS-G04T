import * as eva from '@eva-design/eva';
import { ApplicationProvider } from '@ui-kitten/components';
import React from 'react';
import { AuthContext, AuthContextProvider } from './context/AuthContext';

import LoginStack from './screens/components/LoginStack';
import Navigation from './screens/components/Navigation';

export default function App() {
	return (
		<ApplicationProvider {...eva} theme={eva.dark}>
			<AuthContextProvider>
				<AuthContext.Consumer>
					{({ logged }) => (!logged ? <LoginStack /> : <Navigation />)}
				</AuthContext.Consumer>
			</AuthContextProvider>
		</ApplicationProvider>
	);
}

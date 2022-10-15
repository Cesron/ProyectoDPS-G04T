import React from 'react';
import { BienvenidaScreen } from './screens/BienvenidaScreen';
import CatalogoScreen from './screens/CatalogoScreen';
import LoginStack from './screens/components/LoginStack';
import Navigation from './screens/components/Navigation';

export default function App() {
	return <>{true ? <LoginStack /> : <Navigation />}</>;
}

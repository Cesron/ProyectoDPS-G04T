import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Navigation from './components/Navigation';

const CatalogoScreen = () => {
	return (
		<>
			<View>
				<Text
					style={{
						fontSize: 30,
					}}
				>
					Catalogo
				</Text>
			</View>
			<Navigation />
		</>
	);
};
export default CatalogoScreen;

import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Input } from '@ui-kitten/components';

const CatalogoScreen = () => {
	const styles = StyleSheet.create({
		view: {
			backgroundColor: 'red',
		},
		prueba: {
			backgroundColor: 'blue',
			color: '#fff',
			textAlign: 'center',
		},
	});

	return (
		<View style={styles.view}>
			<View>
				<Text style={styles.prueba}>Hola</Text>
			</View>
			<View></View>
		</View>
	);
};
export default CatalogoScreen;

import { Input, Layout } from '@ui-kitten/components';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Item } from '../components/Catalogue/Item';

export const CatalogoScreen = () => {
	return (
		<Layout style={styles.layout}>
			<View>
				<Input placeholder='Buscar producto' />
			</View>
			<View>
				<Item
					name='Prueba texto'
					image={require('../images/cuidado-personal.png')}
					price='$500'
				/>
			</View>
		</Layout>
	);
};

const styles = StyleSheet.create({
	layout: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
});

import { Input, Layout } from '@ui-kitten/components';
import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from 'react-native';
import { Item } from '../components/Catalogue/Item';

export const ProductoScreen = () => {
	return (
		<Layout style={styles.layout}>
			<View>
				<Input placeholder='INDIVIDUAL' />
			</View>
			<ScrollView>
				<Item
					name='Prueba texto'
					image={require('../images/cuidado-personal.png')}
					price='$500'
				/>
			</ScrollView>
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

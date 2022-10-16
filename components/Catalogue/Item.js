import { Avatar, Text } from '@ui-kitten/components';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { CatalogueData } from '../../data/CatalogueData';

const styles = StyleSheet.create({
	container: {
		margin: 30,
		flexDirection: 'column',
		alignItems: 'center',
	},
	grid: {
		flexDirection: 'row',
		flexWrap: 'wrap',

		justifyContent: 'center',
	},
	image: {
		borderRadius: 100,
	},
});

export const Item = ({ image, name, price }) => {
	return (
		<View style={styles.grid}>
		
				<Text> 
					{CatalogueData[0].name}
				 </Text>

				 
				<Text> 
					{CatalogueData[0].description}
				 </Text>
		</View>
	);
};

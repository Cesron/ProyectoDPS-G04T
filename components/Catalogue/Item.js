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
			{CatalogueData.map(({ image, name, price }, key) => (
				<View key={key} style={styles.container}>
					<Image source={image} style={styles.image} />
					<Text> {name} </Text>
					<Text> {price} </Text>
				</View>
			))}
		</View>
	);
};

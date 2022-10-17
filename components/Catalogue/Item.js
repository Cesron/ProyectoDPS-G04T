import { Avatar, Text } from '@ui-kitten/components';
import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { AutocompleteData } from '../../data/AutocompleteData';
import { CatalogueData } from '../../data/CatalogueData';

const styles = StyleSheet.create({
	container: {
		margin: 30,
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'space-around',
	},
	grid: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		flex: 2,
		justifyContent: 'center',
	},
	image: {
		borderRadius: 500,
		height: 200,
		width: 200,
	},
	name: {
		maxWidth: 200,
		fontWeight: 'bold',
		textAlign: 'center',
		paddingTop: 15,
		paddingBottom: 5,
	},
	price: {
		color: '#3167FD',
		fontWeight: '700',
	},
});

export const Item = ({ image, name, price }) => {
	return (
		<View style={styles.grid}>
			{CatalogueData.map(({ image, name, price }, key) => (
				<View key={key} style={styles.container}>
					<Image source={image} style={styles.image} />
					<Text style={styles.name} category={'h5'}>
						{' '}
						{name}{' '}
					</Text>
					<Text style={styles.price}> $ {price} </Text>
				</View>
			))}
			<Text>{JSON.stringify(AutocompleteData)}</Text>
		</View>
	);
};

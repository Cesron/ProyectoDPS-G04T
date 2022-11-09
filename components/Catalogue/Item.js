import { Avatar, Text } from '@ui-kitten/components';
import React from 'react';
import {
	View,
	Image,
	StyleSheet,
	TouchableWithoutFeedback,
} from 'react-native';
import { useAuthContext } from '../../context/AuthContext';
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
		height: 100,
		width: 100,
	},
	name: {
		maxWidth: 100,
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

export const Item = ({ navigation }) => {
	const { setProductView } = useAuthContext();

	return (
		<View style={styles.grid}>
			{CatalogueData.map(({ image, name, price, description }, key) => (
				<TouchableWithoutFeedback
					key={key}
					onPress={() => {
						setProductView({
							image: image,
							name: name,
							price: price,
							description: description,
						});
						navigation.navigate('ProductoScreen');
					}}
				>
					<View style={styles.container}>
						<Image source={image} style={styles.image} />
						<Text style={styles.name} category={'h5'}>
							{' '}
							{name}{' '}
						</Text>
						<Text style={styles.price}> $ {price} </Text>
					</View>
				</TouchableWithoutFeedback>
			))}
		</View>
	);
};

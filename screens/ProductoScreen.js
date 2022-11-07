import { Button, Layout } from '@ui-kitten/components';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
//import { Item } from '../components/Catalogue/Item';
import { Ionicons } from '@expo/vector-icons';
import { CatalogueData } from '../data/CatalogueData';

const styles = StyleSheet.create({
	name: {
		color: 'white',
		fontSize: 40,
	},

	price: {
		color: 'white',
		fontSize: 25,
		fontWeight: 'bold',
	},

	description: {
		color: '#C8CFE1',
		fontSize: 18,
		lineHeight: 32,
	},
	image: {
		height: 400,
		width: 600,
		position: 'absolute',
	},

	layout: {
		position: 'relative',
		flex: 1,
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		marginTop: 300,
		borderTopLeftRadius: 30,
		borderTopRightRadius: 30,
		paddingHorizontal: 40,
	},
	button: {
		alignSelf: 'center',
		width: '75%',
		height: 65,
		fontSize: 24,
		borderRadius: 15,
	},
	heartButton: {
		backgroundColor: 'white',
		width: '20%',
		marginRight: 20,
		borderRadius: 15,
	},
	buttonsContainer: {
		flexDirection: 'row',
	},
	priceView: {
		flexDirection: 'row',
	},
	pricePieza: {
		color: '#C8CFE1',
		fontSize: 25,
	},
});

export const ProductoScreen = () => {
	return (
		<>
			<Image source={CatalogueData[0].image} style={styles.image} />
			<Layout style={styles.layout}>
				<View>
					<Text style={styles.name}>{CatalogueData[0].name}</Text>

					<View style={styles.priceView}>
						<Text style={styles.price}>{CatalogueData[0].price} </Text>
						<Text style={styles.pricePieza}> $ / pieza</Text>
					</View>
				</View>

				<Text style={styles.description}>{CatalogueData[0].description}</Text>

				<View style={styles.buttonsContainer}>
					<Button
						style={styles.heartButton}
						accessoryLeft={
							<Ionicons name='heart-outline' size={20} color='#C8CFE1' />
						}
					></Button>
					<Button
						style={styles.button}
						accessoryLeft={
							<Ionicons name='cart-outline' size={20} color='white' />
						}
					>
						Agregar al Carrito
					</Button>
				</View>
			</Layout>
		</>
	);
};

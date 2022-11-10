import { Button, Layout } from '@ui-kitten/components';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
//import { Item } from '../components/Catalogue/Item';
import { Ionicons } from '@expo/vector-icons';
import { CatalogueData as productView } from '../data/CatalogueData';
import { useAuthContext } from '../context/AuthContext';

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
	textCounter: {
		color: '#fff',
		fontWeight: 'bold',
	},
});

export const ProductoScreen = () => {
	const { productView, car, setCar } = useAuthContext();
	const [counter = 5, setCounter] = React.useState(0);

	return (
		<>
			<Image source={productView.image} style={styles.image} />
			<Layout style={styles.layout}>
				<View>
					<Text style={styles.name}>{productView.name}</Text>
					<View style={styles.priceView}>
						<Text style={styles.price}>{productView.price} </Text>
						<Text style={styles.pricePieza}> $ / pieza</Text>
						<View
							style={{
								flexDirection: 'row',
								alignItems: 'center',
								backgroundColor: '#3167FD',
								marginLeft: 20,
								borderRadius: 20,
							}}
						>
							<Button
								onPress={() => setCounter(counter - 1)}
								style={{ borderRadius: 20 }}
							>
								-
							</Button>

							<Text style={styles.textCounter}> {counter} </Text>
							<Button
								onPress={() => setCounter(counter + 1)}
								style={{ borderRadius: 20 }}
							>
								+
							</Button>
						</View>
					</View>
				</View>

				<Text style={styles.description}>{productView.description}</Text>

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
						onPress={() => {
							setCar((prev) => [...prev, productView]);
						}}
					>
						Agregar al Carrito
					</Button>
				</View>
			</Layout>
		</>
	);
};

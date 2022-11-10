import { Button, Layout, Text, Icon } from '@ui-kitten/components';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
	title: {
		fontSize: 24,
		textAlign: 'center',
		fontWeight: 'bold',
	},

	titleContainer: {
		backgroundColor: '#2F3B5D',
		justifyContent: 'flex-end',
		marginBottom: 20,
		height: 100,
	},
	icon: {
		width: 32,
		height: 32,
	},
	containerTitle: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		padding: 10,
	},
	containerParts: {
		backgroundColor: '#2F3B5D',
		marginHorizontal: 15,
		marginVertical: 15,
		borderRadius: 15,
	},
	containerInfo: {
		width: '100%',
		padding: 10,
	},
	info: {
		textAlign: 'center',
	},
	titleTypes: {
		fontSize: 22,
	},
	titleChange: {
		fontSize: 16,
		color: '#5280FE',
	},
	button: {
		width: '80%',
	},
});

export const CarritoScreen = () => {
	return (
		<Layout sx={{ height: 1000 }}>
			<View sx={{ backgroundColor: 'red' }}>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>Confirmacion de pedido</Text>
					{/* <Icon style={styles.icon} fill='#8F9BB3' name='star' /> */}
				</View>
				<View style={styles.containerParts}>
					<View style={styles.containerTitle}>
						<Text style={styles.titleTypes}>Direccion de entrega</Text>
						<Text style={styles.titleChange}>CHANGE</Text>
					</View>
					<View style={styles.containerInfo}>
						<Text style={styles.info}>Juan Pacho </Text>
						<Text style={styles.info}>Cesu 31 k-25., SIA CHILL </Text>
						<Text style={styles.info}> Riga</Text>
						<Text style={styles.info}>LV-1012 </Text>
						<Text style={styles.info}> Latvia </Text>
					</View>
				</View>
				<View style={styles.containerParts}>
					<View style={styles.containerTitle}>
						<Text style={styles.titleTypes}>Delivery options</Text>
						<Text style={styles.titleChange}>CHANGE</Text>
					</View>
					<View style={styles.containerInfo}>
						<Text style={styles.info}> Recoger en tienda </Text>
					</View>
				</View>
				<View sx={{ height: 500, alignItems: 'center' }}>
					<View>
						<Text>Este es el total a pagar: </Text>
					</View>
					<View>
						<Text>$22.83</Text>
					</View>
					<Button style={styles.button}>Agregar al Carrito</Button>
				</View>
			</View>
		</Layout>
	);
};

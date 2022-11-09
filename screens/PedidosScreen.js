import { Avatar, Text } from '@ui-kitten/components';
import React from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useAuthContext } from '../context/AuthContext';

export const PedidosScreen = () => {
	const { car } = useAuthContext();

	return (
		<View style={styles.contenedor}>
			<View style={styles.iconoContenedor}>
				<Image
					style={styles.icono}
					source={require('../assets/cart-outline.png')}
				/>
			</View>
			{car.length > 0 ? (
				<>
					<Text style={styles.etiqueta}>Tus pedidos</Text>
					{car.map((value, key) => (
						<View key={key}>
							<View style={{flexDirection:'row'}}>
							<Avatar style={styles.ava} source={value.image} />
							<Text style={styles.producto}>{value.name}</Text>
							</View>
							<View style={{flexDirection:'row'}}>
							<Text style={styles.descri}>{value.description}</Text>
							<Text style={styles.precio}>${value.price}</Text>
							</View>
						</View>
					))}
				</>
			) : (
				<>
					<View style={styles.contenido}>
						<Text style={styles.etiqueta}>No hay pedidos</Text>
					</View>
					<View style={styles.contenedorBtn}>
						<TouchableOpacity style={styles.boton}>
							<Text style={styles.etiquetaBtn}>Realizar pedido</Text>
						</TouchableOpacity>
					</View>
				</>
			)}
		</View>

	);
};

const styles = StyleSheet.create({
	etiqueta: {
		fontSize: 45,
		textAlign: 'center',
		color: '#fff',
	},
	iconoContenedor: {
		padding: 75,
	},
	contenedor: {
		flex: 2,
		color: '#fff',
		alignItems: 'center',
		backgroundColor: '#212B46',
	},
	contenido: {
		flex: 2,
	},
	contenedorBtn: {
		flex: 1,

	},
	boton: {
		backgroundColor: '#3167fd',
		width: 350,
		padding: 25,
	},
	etiquetaBtn: {
		fontSize: 16,
		alignSelf: 'center',
		fontWeight: 'bold',
		color: '#fff',
	},
	ava:{
		marginLeft: 75,
		marginRight: 10,
		marginBottom: 2,
		height: 60,
		width:60
	},
	producto:{
	fontSize: 18,
	marginLeft: 5,
	marginTop: 5,
	color:'white',

	},
	descri: {
		fontSize: 14,
		textAlign: 'justify',
		marginRight: 30,
		marginLeft: 150,
		marginTop: -35,
		marginBottom: 25,
		color: '#C5C5C5',

	},
	precio: {
		textAlign: 'right',
		marginRight: 65,
		marginTop: -35,
		fontSize: 16,
	},
});

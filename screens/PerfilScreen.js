import { Layout, Text, Button } from '@ui-kitten/components';
import React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
	title: { fontWeight: 'bold', fontSize: 45 },
	container: {
		marginHorizontal: 70,
		marginTop: 90,
	},
	titleChange: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginTop: 20,
		alignItems: 'center',
	},
	titleDetails: {
		fontSize: 21,
	},
	titleCambiar: {
		color: '#507CF9',
	},
	containerInformation: {
		backgroundColor: '#2F3B5D',
		borderRadius: 18,
		padding: 25,
		flexDirection: 'row',
		alignItems: 'center',
		marginTop: 20,
	},
	perfilImage: {
		width: 100,
		height: 100,
	},
	personalInformation: {
		marginLeft: 20,
	},
	information: {
		color: '#979dae',
		borderBottomWidth: 2,
		paddingBottom: 8,
		borderColor: '#979dae',
		fontSize: 15,
		marginBottom: 10,
		width: '100%',
		textAlign: 'left',
	},
	buttonsContainer: {
		marginTop: 35,
	},
	button: {
		borderRadius: 20,
		height: 70,
		borderColor: '#2F3B5D',
		marginVertical: 15,
	},
	buttonChange: {
		borderRadius: 50,
		height: 70,
		borderColor: '#2F3B5D',
		marginVertical: 15,
	},
});

export const PerfilScreen = () => {
	const [counter, setCounter] = React.useState(0);

	return (
		<Layout style={{ height: '100%' }}>
			<ScrollView style={styles.container}>
				<View>
					<Text style={styles.title}>Mi Perfil</Text>
				</View>
				<View style={styles.titleChange}>
					<Text style={styles.titleDetails}>Detalles personales</Text>
					<Button appearance='ghost'>Cambiar</Button>
				</View>
				<View style={styles.containerInformation}>
					<Image
						source={require('../images/perfil.png')}
						style={styles.perfilImage}
					/>
					<View style={styles.personalInformation}>
						<Text style={{ fontSize: 20, marginBottom: 10 }}>Juan Belloso</Text>
						<Text style={styles.information}>Juan@ejemplo.com</Text>
						<Text style={styles.information}>(+503) 2323-6262</Text>
						<Text style={styles.information}>
							Av ejemplo Res. ejemplo Casa #14
						</Text>
					</View>
				</View>
				<View style={styles.buttonsContainer}>
					<Button style={styles.button} status='primary' appearance='outline'>
						Pedidos
					</Button>
					<Button style={styles.button} status='primary' appearance='outline'>
						Pedidos pendientes
					</Button>
					<Button style={styles.button} status='primary' appearance='outline'>
						<Text>Preguntas frecuentes</Text>
					</Button>
					<Button style={styles.button} status='primary' appearance='outline'>
						Pedidos
					</Button>
					<Button style={styles.buttonChange} status='primary'>
						Cambiar
					</Button>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<Button onPress={() => setCounter(counter - 1)}>-</Button>

						<Text style={styles.text}> {counter} </Text>
						<Button onPress={() => setCounter(counter + 1)}>+</Button>
					</View>
				</View>
			</ScrollView>
		</Layout>
	);
};

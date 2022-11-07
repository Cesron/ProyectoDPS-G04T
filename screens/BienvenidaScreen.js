import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';
import AnimatedLottieView from 'lottie-react-native';

export const BienvenidaScreen = ({ navigation }) => {
	return (
		<Layout style={styles.layout}>
			<Text category='h1' style={styles.title}>
				La Tienda De La Abuela
			</Text>
			<AnimatedLottieView
				autoPlay
				style={{
					width: 400,
				}}
				source={require('../animations/bienvenida.json')}
			/>
			<Button
				style={styles.button}
				onPress={() => navigation.navigate('Login')}
			>
				¡Empezar!
			</Button>
		</Layout>
	);
};

const styles = StyleSheet.create({
	layout: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 10,
	},

	title: {
		textAlign: 'center',
	},

	button: {
		marginTop: 30,
	},
});


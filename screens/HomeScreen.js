import { Button, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet, View, Image } from 'react-native';

export const HomeScreen = () => {
	return (
		<Layout style={styles.layout}>
			<View style ={ styles.centerContent }>
			<Text style = { styles.textStyle}>LA TIENDA DE LA ABUELA</Text>
			<Image
				style = { styles.imgStyle }
				source = { require('../images/tiendabu.jpg')}
			/>
			<Text category='h3' style={{textAlign:'center'}}>La mejor tienda para tu abuela</Text>
			</View>
		</Layout>
	);
};

const styles = StyleSheet.create({
	layout: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	textStyle: {
		fontSize: 45,
		fontFamily: 'Arial Rounded MT Bold',
		paddingTop: 10,
		marginTop: 25,
		paddingLeft: 10,
		paddingRight: 20,
		paddingBottom: 30,
		textAlign: 'center',
	},

	imgStyle: {
		width: 400,
		height: 400,
		margin:'auto',
		borderWidth: 20,
		borderColor: 'white',
	}
});

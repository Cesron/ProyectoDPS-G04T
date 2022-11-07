import { Layout, Text } from '@ui-kitten/components';
import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Animated, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


export const HomeScreen = () => {
	const [fadeIn] = React.useState(new Animated.Value(0));
	const [FadeInSlow] = React.useState(new Animated.Value(0));
	React.useEffect(() => {
		Animated.timing(fadeIn,	{
				toValue: 1,
				duration: 4000
			}).start();

			Animated.timing(FadeInSlow, {
				toValue: 1,
				duration: 5500
			}).start();
	});
	return (
		<Layout style={styles.layout}>
			<View style={styles.centerContent}>
				<Animated.Text style={{ opacity:fadeIn,
						fontSize: 35,
						paddingTop: 10,
						marginTop: -95,
						paddingLeft: 10,
						paddingRight: 20,
						paddingBottom: 30,
						textAlign: 'left',
						color: 'white',
				}}>LA TIENDA DE LA ABUELA</Animated.Text>
				<Animated.Text category='h3' style={{
					opacity:FadeInSlow,
					fontSize: 25,
						paddingTop: 10,
						marginTop: 5,
						paddingLeft: 10,
						paddingRight: 20,
						paddingBottom: 30,
						textAlign: 'center',
						color: 'white',

				}}>
					La mejor tienda para tu abuela
				</Animated.Text>
			</View>
		</Layout>
	);
};

const styles = StyleSheet.create({
	layout: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	textStyle: {
		fontSize: 45,
		paddingTop: 10,
		marginTop: 25,
		paddingLeft: 10,
		paddingRight: 20,
		paddingBottom: 30,
		textAlign: 'center',
	},
});

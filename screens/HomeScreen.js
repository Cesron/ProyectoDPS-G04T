import { Button, Layout, Text } from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

export const HomeScreen = () => {
	return (
		<Layout style={styles.layout}>
			<Text category='h1'>La Tienda De La Abuela</Text>
			<Button color='white'>¡Empezar!</Button>
		</Layout>
	);
};

const styles = StyleSheet.create({
	layout: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

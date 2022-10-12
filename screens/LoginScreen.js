import React from 'react';
import { StyleSheet } from 'react-native';
import { Button, Layout, Text } from '@ui-kitten/components';

export function LoginScreen({ navigation }) {
	return (
		<Layout style={styles.layout}>
			<Text category='h1'>Login</Text>
			<Button onPress={() => navigation.navigate('Home')}>¡Empezar!</Button>
		</Layout>
	);
}

const styles = StyleSheet.create({
	layout: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

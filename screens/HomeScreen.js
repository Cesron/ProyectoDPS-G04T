import * as eva from '@eva-design/eva';
import {
	ApplicationProvider,
	Button,
	Layout,
	Text,
} from '@ui-kitten/components';
import React from 'react';
import { StyleSheet } from 'react-native';

export default function App() {
	return (
		<ApplicationProvider {...eva} theme={eva.dark}>
			<Layout style={styles.layout}>
				<Text category='h1'>La Tienda De La Abuela</Text>
				<Button color='white'>¡Empezar!</Button>
			</Layout>
		</ApplicationProvider>
	);
}

const styles = StyleSheet.create({
	layout: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

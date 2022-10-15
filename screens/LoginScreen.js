import React, { useState } from 'react';
import * as eva from '@eva-design/eva';
import { StyleSheet } from 'react-native';
import {
	ApplicationProvider,
	Button,
	Input,
	Layout,
	Text,
} from '@ui-kitten/components';
import { Ionicons } from '@expo/vector-icons';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';

export function LoginScreen({ navigation }) {
	const [secureTextEntry, setsecureTextEntry] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const renderIcon = () => (
		<TouchableWithoutFeedback
			onPress={() => setsecureTextEntry(!secureTextEntry)}
		>
			<Ionicons
				name={secureTextEntry ? 'eye-off' : 'eye'}
				size={24}
				color='gray'
			/>
		</TouchableWithoutFeedback>
	);

	return (
		<ApplicationProvider {...eva} theme={eva.dark}>
			<Layout style={styles.layout}>
				<Text category='h1'>Login</Text>
				<Input
					style={styles.m}
					label='Correo Eléctronico'
					placeholder='email@ejemplo.com'
					value={email}
					onChangeText={(nextValue) => setEmail(nextValue)}
				/>
				<Input
					style={styles.m}
					label='Contraseña'
					placeholder='Digite su contraseña'
					secureTextEntry={secureTextEntry}
					accessoryRight={renderIcon}
					value={password}
					onChangeText={(nextValue) => setPassword(nextValue)}
				/>
				<Button style={styles.m} onPress={() => navigation.navigate('Home')}>
					¡Empezar!
				</Button>
			</Layout>
		</ApplicationProvider>
	);
}

const styles = StyleSheet.create({
	layout: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	m: {
		marginTop: 20,
	},
});

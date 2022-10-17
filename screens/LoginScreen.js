import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { Button, Input, Layout, Text } from '@ui-kitten/components';
import { TouchableWithoutFeedback } from '@ui-kitten/components/devsupport';
import { StyleSheet, View } from 'react-native';
import { useAuthContext } from '../context/AuthContext';
import { auth } from '../firebase';
import {
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from 'firebase/auth';

export const LoginScreen = () => {
	const [secureTextEntry, setsecureTextEntry] = useState(true);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const { setLogged } = useAuthContext();

	const handleSingUp = () => {
		signInWithEmailAndPassword(auth, email, password)
			.then(() => {
				setLogged(true);
			})
			.catch(console.log);
	};

	const handleRegister = () => {
		createUserWithEmailAndPassword(auth, email, password)
			.then(() => {
				setLogged(true);
			})
			.catch(console.log);
	};

	const renderIcon = () => (
		<TouchableWithoutFeedback
			onPress={() => setsecureTextEntry(!secureTextEntry)}
		>
			<Ionicons
				name={secureTextEntry ? 'eye' : 'eye-off'}
				size={24}
				color='gray'
			/>
		</TouchableWithoutFeedback>
	);

	return (
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
			<View style={styles.buttons}>
				<Button style={styles.m} onPress={handleSingUp}>
					¡Ingresar!
				</Button>
				<Button appearance='outline' style={styles.m} onPress={handleRegister}>
					¡Registrar!
				</Button>
			</View>
		</Layout>
	);
};

const styles = StyleSheet.create({
	layout: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	m: {
		marginTop: 20,
		marginHorizontal: 10,
	},
	buttons: {
		flexDirection: 'row',
	},
});

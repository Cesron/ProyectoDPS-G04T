import {
	Autocomplete,
	AutocompleteItem,
	Button,
	Layout,
} from '@ui-kitten/components';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Item } from '../components/Catalogue/Item';
import { AutocompleteData } from '../data/AutocompleteData';

const filter = (item, query) =>
	item.title.toLowerCase().includes(query.toLowerCase());

export const CatalogoScreen = ({ navigation }) => {
	const [value, setValue] = useState(null);
	const [data, setData] = useState(AutocompleteData);

	const onSelect = (index) => {
		setValue(AutocompleteData[index].title);
	};

	const onChangeText = (query) => {
		setValue(query);
		setData(AutocompleteData.filter((item) => filter(item, query)));
	};

	const renderOption = (item, index) => (
		<AutocompleteItem key={index} title={item.title} />
	);
	return (
		<Layout style={styles.layout}>
			<Autocomplete
				placeholder='Buscar producto'
				style={styles.input}
				value={value}
				onSelect={onSelect}
				onChangeText={onChangeText}
			>
				{data.map(renderOption)}
			</Autocomplete>

			<ScrollView>
				<Item navigation={navigation} />
			</ScrollView>
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
	input: {
		marginTop: 40,
		marginBottom: 30,
		width: '100%',
	},
});

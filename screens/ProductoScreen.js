import { Input, Layout , Card,TopNavigation,TopNavigationAction, Button , Icon } from '@ui-kitten/components';
import { reload } from 'firebase/auth';
import React from 'react';
import {
	View,
	Text,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
	ViewPager ,
	Avatar,
} from 'react-native';
//import { Item } from '../components/Catalogue/Item';
import { CatalogueData } from '../data/CatalogueData';


  
const styles = StyleSheet.create({
	details: {
		flexDirection: 'row',
		alignItems: 'center',
		marginVertical: 4,
	  },
	  title: {
		marginHorizontal: 8,
	  },
	name: {
		color: "white",
		fontSize: 40,
		fontStyle: 'italic',
   		 fontWeight: 'bold'
	},

	price: {
		color: "white",
		fontSize: 25,
	},

	descricion: {
		color: "white",
	},
	image: {
		borderRadius: 100,
	},
	card: {
		margin: 2,
	  },
	layout: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
	},
	container: {
		minHeight: 128,
	  },

});

export const ProductoScreen = () => {
	return (


			<Layout style={styles.layout}>

					


				<Card style={styles.card}
				image={require('../images/carnes.png')}
				status='primary'>
					<Text>
					The Maldives
					</Text>

				</Card>

					<View style={styles.grid}>
							<Text style={styles.name}> 
								{CatalogueData[0].name}
							</Text>

							<Text style={styles.price}> 
								{CatalogueData[0].price} USD/Pieza
							</Text>
					
							<Text style={styles.descricion}> 
								{CatalogueData[0].description}
							</Text>
					</View>


					<Button>Agregar al Carrito</Button>
					

			</Layout>
	);
};


import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

const ConexionScreen = () => {

	return (
		<View style={styles.contenedor}>
			<View style={styles.iconoContenedor}>
				<Image style={styles.icono} source={require('../assets/cart-outline.png')}/>
			</View>
			
			<View style={styles.contenido}>
			<Text style={styles.etiqueta}>No hay pedidos</Text>
			</View>
			<View style={styles.contenedorBtn}>
			<TouchableOpacity style={styles.boton} >
				<Text style={styles.etiquetaBtn}>Realizar pedido</Text>
			</TouchableOpacity>
			</View>
		</View>
	);

	const styles = StyleSheet.create({
		etiqueta:{
			fontSize:45,
			textAlign:'center',color:'#fff'
		},iconoContenedor:{
			padding:75
		},
		contenedor:{
			flex:2,
			color: '#fff',
			alignItems:'center',
			backgroundColor: "#212B46",
		},contenido:{
			flex:2
		},contenedorBtn:{
			flex:1,
		}
		,
		boton:
		{
			backgroundColor:'#3167fd',
			width:350,
			padding:25,
			
		},
		etiquetaBtn:{
			fontSize:16,
			alignSelf:'center',
			fontWeight:'bold',
			color: '#fff'
		}
	});
}
export default ConexionScreen;

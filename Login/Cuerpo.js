import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Button, Alert, TouchableOpacity, Image } from 'react-native'

export default class Cuerpo extends Component {
    constructor(){
        super();
        this.state = {

            nombre : "",
            contrasena : "",
        };
    }
    presionarBoton(){

        if(this.state.nombre == "Samuel" && this.state.contrasena == "123"){

            Alert.alert("Bienvenido")
        }
        else{

            Alert.alert("Usuario no registrado")
        }
    }
  render() {
    return (
      <View style={styles.container}>
        <Text>Introduce tu nombre: </Text>
        <TextInput
          style={{height: 40, padding:10, backgroundColor: '#E6E6E6', padding:10, borderRadius: 4, borderWidth: 0.5, borderColor: '#000000', width: 300}}
          placeholder="Introduce tu nombre"
          onChangeText={(text) => {this.state.nombre = text}}/>
        <Text style={{marginTop: 10}}>Introduce tu contraseña: </Text>
          <TextInput
          style={{height: 40, backgroundColor: '#E6E6E6', padding:10, borderRadius: 4, borderWidth: 0.5, borderColor: '#000000', width: 300}}
          placeholder="introduce tu contraseña"
          onChangeText={(text) => {this.state.contrasena = text}}
          />
          <View style={{marginTop: 15}}>
          <Button  
            title="Entrar"
            color="#841584"
            onPress={() => {this.presionarBoton()}}
            />
          </View>
    {/*
    <TouchableOpacity>
        <Image
        source={require('../assets/boton.jpg')}
        />
    </TouchableOpacity>

    */}     
      </View>

    )
  }
}
const styles = StyleSheet.create({
    container: {

    flex: 5,
    backgroundColor: '#FFFFFF',
    alignItems: 'flex-start',
    justifyContent: 'center',
    paddingLeft: 15,
    },
  });
  
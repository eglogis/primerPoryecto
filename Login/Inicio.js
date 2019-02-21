import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';
import Cabecera from './Cabecera'
import Cuerpo from './Cuerpo'

export default class Inicio extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Cabecera></Cabecera>
        <Cuerpo></Cuerpo>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

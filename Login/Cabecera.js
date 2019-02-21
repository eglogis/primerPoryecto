import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default class Cabecera extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text></Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


import React from 'react';
import { StyleSheet, View } from 'react-native';
import Inicio from './Login/Inicio';



export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Inicio></Inicio>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

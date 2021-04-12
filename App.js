import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from "./screens/search"
import Transactions from "./screens/transactions"
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

export default function App() {
  return (
    <View style={styles.container}>
 <AppContainer/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

});

const AppNavigator=createBottomTabNavigator({
  Search:Search,
  Transactions:Transactions
})

const AppContainer=createAppContainer(AppNavigator)

import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MainStack from './src/navigations/MainStack';
import { colorConstants } from './src/utils/constants';

const App = () => {
  return (
    <NavigationContainer>
    <StatusBar backgroundColor={colorConstants.blue} />
      <MainStack/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
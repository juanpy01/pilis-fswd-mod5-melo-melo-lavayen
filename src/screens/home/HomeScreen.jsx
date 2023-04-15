import React from 'react'
import { ImageBackground, SafeAreaView, Text } from 'react-native'
import { styles } from './HomeScreen.styles'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../../../assets/home.webp')}>
        <Text style={styles.title}>
          Busca tu evento!!
        </Text>
      </ImageBackground>
    </SafeAreaView>
  )
}

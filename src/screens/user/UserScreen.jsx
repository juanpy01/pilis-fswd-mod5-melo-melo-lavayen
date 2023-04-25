import React, { useContext } from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import { styles } from './UserScreen.styles'
import { UserContext } from '../../user-context/userContext'
import * as AuthSession from 'expo-auth-session'

export const UserScreen = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { token } = currentUser

  const logOut = async () => {
    try {
      if (currentUser.token) {
        await AuthSession.revokeAsync({ token }, { revocationEndpoint: 'https://oauth2.googleapis.com/revoke' })
        setCurrentUser(null)
      }
      setCurrentUser(null)
    } catch (error) {
      throw error
    }
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.profileImage}
          source={{ uri: currentUser.image }}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{currentUser.name}</Text>
          <Text style={styles.profileName}>{currentUser.lastname}</Text>
          <Text style={styles.profileLocation}>{currentUser.city}</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.button} onPress={logOut}>
            <Text style={styles.buttonText}>Salir</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.content}>
        <Text style={styles.sectionTitle}>Acerca de mi...</Text>
        <Text style={styles.sectionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut
          tellus eu nisi tincidunt ultrices. Morbi id dictum ipsum. Nunc nec
          lacus massa. Integer eget elit non elit sodales maximus.
        </Text>
        <Text style={styles.sectionTitle}>Datos de la Cuenta</Text>
        <Text style={styles.sectionText}>Email: {currentUser.email}</Text>
        <Text style={styles.sectionText}>Nombre: {currentUser.name}</Text>
        <Text style={styles.sectionText}>Apellido: {currentUser.lastname}</Text>
        <Text style={styles.sectionText}>Telefono/Cel: {currentUser.telephone}</Text>
        <Text style={styles.sectionText}>Ciudad: {currentUser.city}</Text>
      </View>
    </ScrollView>
  )
}

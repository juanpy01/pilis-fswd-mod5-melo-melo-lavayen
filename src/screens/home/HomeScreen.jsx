import React, { useContext } from 'react'
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { styles } from './HomeScreen.styles'
import { UserContext } from '../../user-context/userContext'
import { useNavigation } from '@react-navigation/native'


export const HomeScreen = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext)

  const navigation = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      {!currentUser
        ? <ImageBackground style={styles.bgImage} source={require('../../../assets/home.webp')}>
          <View style={styles.header}>
            <Image
              style={styles.profileImage}
              source={{ uri: "https://m.media-amazon.com/images/I/71kH3wPiGQL.png" }}
            />
            <View>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("Profile")} >
                <Text style={styles.buttonText}>Iniciar sesion</Text>
              </TouchableOpacity>
            </View>
            <View>
              <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("userRegister")} >
                <Text style={styles.buttonText}>Registrarse</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.title}>
            Busca tu evento!!
          </Text>
        </ImageBackground>
        : <ImageBackground style={styles.bgImage} source={require('../../../assets/camello.jpg')}>
          <View style={styles.header}>
            <Image
              style={styles.profileImage}
              source={{ uri: currentUser.image }}
            />
            <View>
              <TouchableOpacity style={styles.button} onPress={() => setCurrentUser(null)} >
                <Text style={styles.buttonText}>Salir</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text style={styles.title}>
            Busca tu evento!!
          </Text>
        </ImageBackground>
      }
    </SafeAreaView >
  );
};

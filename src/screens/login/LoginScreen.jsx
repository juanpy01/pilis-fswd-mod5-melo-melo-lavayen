import React, { useContext, useEffect, useState } from 'react'
import * as WebBrowser from 'expo-web-browser'
import * as Google from 'expo-auth-session/providers/google'
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { UserContext } from '../../user-context/userContext'
import { View, Text, TextInput, TouchableOpacity, Alert, Image, SafeAreaView } from 'react-native'
import { styles } from './LoginScreen.styles'
import { getUserList } from '../../api/user.service'

WebBrowser.maybeCompleteAuthSession()

export const LoginScreen = () => {
  const { setCurrentUser } = useContext(UserContext)
  const [token, setToken] = useState('')
  const navigation = useNavigation()
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const handleLoginAPI = async ({ email, password }) => {
    const userDataApi = await getUserList()

    const userValidate = userDataApi.find(item => item.email.toLowerCase() === email && item.password === password)
    if (userValidate) {
      setCurrentUser(userValidate)
      navigation.navigate('Home')
    } else {
      Alert.alert(
        'No se encontro el usuario en la base de datos',
        'Vuelva a intentar'
      )
    }
  }

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: '109688182930-222tob7mlbvo8ugo8mualmuube13vgj6.apps.googleusercontent.com',
    androidClientId: '109688182930-j174opm1g9i1q8m7rskdqc0cagjh38cl.apps.googleusercontent.com'
  })

  useEffect(() => {
    if (response?.type === 'success') {
      setToken(response.authentication.accessToken)
      token && getUserGoogleInfo()
    }
  }, [response, token])

  const getUserGoogleInfo = async () => {
    try {
      const response = await fetch('https://www.googleapis.com/userinfo/v2/me/',
        {
          headers:
            { Authorization: `Bearer ${token}` }
        }
      )

      const userGoogleData = await response.json()
      setCurrentUser({
        id: userGoogleData.id,
        name: userGoogleData.given_name,
        lastname: userGoogleData.family_name,
        email: userGoogleData.email,
        image: userGoogleData.picture,
        telephone: +5493885022454545,
        city: 'Jujuy, Argentina',
        token
      })

      navigation.navigate('Home')
    } catch (error) {
      throw error
    }
  }

  const handleRegister = () => {
    navigation.navigate('userRegister')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.title}>Inicio de Sesión</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder='E-mail'
              placeholderTextColor='#fff'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize='none'
            />
          )}
          name='email'
          rules={{ required: 'El email de usuario es requerido' }}
        />
        {errors.username && <Text style={styles.errorText}>{errors.username.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder='Contraseña'
              placeholderTextColor='#fff'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              secureTextEntry
            />
          )}
          name='password'
          rules={{ required: 'La constraseña es requerida' }}
        />
        {errors.password && <Text style={styles.errorText}>{errors.password.message}</Text>}
        <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLoginAPI)}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <Text style={styles.titleGoogle}>Inicia Sesión con Google</Text>
        <TouchableOpacity
          style={styles.containerButtonGoogle}
          disabled={!request}
          onPress={() => {
            promptAsync()
          }}
        >
          <Image style={styles.imageGoogleBtn} source={require('../../../assets/btn_google.png')} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonRegitro} onPress={handleRegister}>
          <Text style={styles.buttonRegText}>REGISTRARSE</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

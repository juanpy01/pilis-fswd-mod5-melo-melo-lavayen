import React, { useContext, useEffect, useState } from 'react'
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';
import { useNavigation } from '@react-navigation/native'
import { useForm, Controller } from 'react-hook-form'
import { UserContext } from "../../user-context/userContext"
import { View, Text, TextInput, TouchableOpacity, Alert, Button } from 'react-native'
import { dataUser } from "../../api/dataUser"
import { styles } from './LoginScreen.styles'

WebBrowser.maybeCompleteAuthSession();

export const LoginScreen = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext)
  const [token, setToken] = useState("");
  const navigation = useNavigation()
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const handleLogin = ({ email, password }) => {

    const userValidate = dataUser.find(item => item.email.toLowerCase() === email && item.password === password)
    if (userValidate) {
      setCurrentUser(userValidate)
      navigation.navigate('Home')
    }
    else {
      Alert.alert(
        'No se encontro el usuario en la base de datos',
        'Vuelva a intentar',
      );
    }
  };

  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: "109688182930-222tob7mlbvo8ugo8mualmuube13vgj6.apps.googleusercontent.com",
    androidClientId: "109688182930-j174opm1g9i1q8m7rskdqc0cagjh38cl.apps.googleusercontent.com",
  });

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response.authentication.accessToken);
      token && getUserInfo();
    }
  }, [response, token]);

  const getUserInfo = async () => {
    try {
      const response = await fetch("https://www.googleapis.com/userinfo/v2/me/",
        {
          headers:
            { Authorization: `Bearer ${token}` },
        }
      );

      const user = await response.json();
      setCurrentUser({
        id: user.id,
        name: user.given_name,
        lastname: user.family_name,
        email: user.email,
        image: user.picture,
        telephone: +5493885022454545,
        city: "Jujuy, Argentina",
        token
      });
    } catch (error) {
      throw error
    }
  };

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Iniciar de Sesión</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.input}
            placeholder='Nombre de usuario'
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
      <TouchableOpacity style={styles.button} onPress={handleSubmit(handleLogin)}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.titleGoogle}>Inicia Sesion con Google</Text>
      <TouchableOpacity
        style={styles.containerButtonGoogle}
        disabled={!request}
        onPress={() => {
          promptAsync();
        }}
      >
        <Text style={styles.textButtonGoole}>
          Sign in with Google"
        </Text>
      </TouchableOpacity>

      <Text>
        Registrarse
      </Text>

    </View>
  )
};

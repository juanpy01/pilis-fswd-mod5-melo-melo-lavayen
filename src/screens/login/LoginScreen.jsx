import React, { useContext } from 'react'
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { styles } from './LoginScreen.styles'
import { useForm, Controller } from 'react-hook-form'
import { UserContext } from "../../user-context/userContext"
import { useNavigation } from '@react-navigation/native'
import { dataUser } from "../../api/dataUser"


export const LoginScreen = () => {

  const navigation = useNavigation()
  const { currentUser, setCurrentUser } = useContext(UserContext)
  const { control, handleSubmit, formState: { errors } } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })

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
    </View>
  )
};

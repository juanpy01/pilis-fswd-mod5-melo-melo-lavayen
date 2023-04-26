import React, { useContext, useRef, useState } from 'react'
import { SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './userRegister.styles'
import { Controller, useForm } from 'react-hook-form'
import { UserContext } from '../../user-context/userContext'
import { useNavigation } from '@react-navigation/core'
import { ImageProfile } from '../../components/image-picker/ImagePicker'
import SelectDropdown from 'react-native-select-dropdown'
import { cities } from '../../utils/cities'

export const UserRegister = () => {
  const [image, setImage] = useState(null)
  const [city, setCity] = useState('')
  const { setCurrentUser } = useContext(UserContext)
  const navigation = useNavigation()
  const { control, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      email: '',
      name: '',
      lastname: '',
      telephone: null,
      city: ''
    }
  })

  const dropdownRef = useRef({})

  const selectItem = (item) => {
    setCity(item)
  }

  const handleRegister = (data) => {
    const dataUserNew = {
      id: '546435484321',
      email: data.email,
      name: data.name,
      lastname: data.lastname,
      image,
      telephone: data.telephone,
      city
    }

    setCurrentUser(dataUserNew)
    navigation.navigate('Home')
  }

  const clear = () => {
    reset()
    dropdownRef.current.reset()
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.regContainer}>
        <Text style={styles.title}>Registrarse</Text>
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder='Ingrese Email'
              placeholderTextColor='#fff'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              autoCapitalize='none'
            />
          )}
          name='email'
          rules={{ required: 'El email es requerido' }}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder='Nombre'
              placeholderTextColor='#fff'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='name'
          rules={{ required: 'El nombre es requerido' }}
        />
        {errors.name && <Text style={styles.errorText}>{errors.name.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder='Apellido'
              placeholderTextColor='#fff'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='lastname'
          rules={{ required: 'El apellido es requerido' }}
        />
        {errors.lastname && <Text style={styles.errorText}>{errors.lastname.message}</Text>}
        <Controller
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder='Telefono'
              placeholderTextColor='#fff'
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name='telephone'
          rules={{ required: 'El telefono es requerido' }}
        />
        {errors.telephone && <Text style={styles.errorText}>{errors.telephone.message}</Text>}
        <SelectDropdown
          data={cities}
          onSelect={selectItem}
          defaultButtonText='Selecciona una ciudad'
          buttonStyle={styles.buttonCities}
          buttonTextStyle={styles.buttonCitiesText}
          rowStyle={styles.buttonCitiesRowStyle}
          rowTextStyle={styles.buttonCitiesRowTextStyle}
          ref={dropdownRef}
        />
        <ImageProfile
          image={image}
          setImage={setImage}
        />

        <TouchableOpacity style={styles.buttonReset} onPress={clear}>
          <Text style={styles.buttonText}>Reiniciar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.buttonSave} onPress={handleSubmit(handleRegister)}>
          <Text style={styles.buttonText}>Guardar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

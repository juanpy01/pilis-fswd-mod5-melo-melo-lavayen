import React from 'react'
import { TextInput, View } from 'react-native'
import { styles } from './SearchBar.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../../utils/theme'

export const SearchBar = ({ handleSearch, searchQuery }) => {
  return (
    <View style={styles.searchContainer}>
      <Ionicons name='search' size={20} color={COLORS.textSecondary} />
      <TextInput
        placeholder='¿Buscá un Evento?'
        placeholderTextColor='#fff'
        style={styles.searchInput}
        onChangeText={handleSearch}
        value={searchQuery}
      />
    </View>
  )
}

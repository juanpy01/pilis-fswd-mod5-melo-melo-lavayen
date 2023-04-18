import { StyleSheet, StatusBar } from 'react-native'
import { FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  bgImage: {
    resizeMode: 'cover',
    width: '100%',
    height: 750,
    justifyContent: 'center',
    top: -5
  },
  title: {
    fontSize: FONT_SIZE.xxxl,
    fontWeight: 'bold',
    color: '#03001C',
    width: '75%',
    marginLeft: 25,
    top: -150
  }
})

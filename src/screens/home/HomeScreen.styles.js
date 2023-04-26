import { StyleSheet, StatusBar } from 'react-native'
import { FONT_SIZE, COLORS } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight
  },
  bgImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    top: 0
  },
  title: {
    fontSize: FONT_SIZE.xxxl,
    fontWeight: 'bold',
    color: COLORS.text,
    width: '75%',
    marginLeft: 25,
    top: 100,
    textShadowColor: 'rgba(0, 0, 0, 0.9)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    paddingVertical: 5,
    top: -240
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 5
  },
  profileInfo: {
    justifyContent: 'center'
  },

  profileName: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.text,
    fontWeight: 'bold',
    marginLeft: 5
  },
  profileLocation: {
    fontSize: FONT_SIZE.md,
    color: COLORS.textWhite
  },
  button: {
    justifyContent: 'center',
    backgroundColor: COLORS.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 15,
    marginLeft: 10,
    height: 50,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  buttonText: {
    color: COLORS.white,
    fontSize: FONT_SIZE.md,
    fontWeight: 'bold'
  }
})

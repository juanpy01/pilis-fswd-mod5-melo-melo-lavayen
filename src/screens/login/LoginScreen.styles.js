import { StatusBar, StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.primary
  },
  loginContainer: {
    flex: 1,
    margin: 10,
    padding: 10
  },
  title: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.text,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 30
  },
  input: {
    color: COLORS.textWhite,
    height: 40,
    borderColor: COLORS.secondary,
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 5
  },
  errorText: {
    color: 'red',
    marginBottom: 8
  },
  button: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 8,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  buttonText: {
    color: COLORS.textWhite,
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold'
  },
  titleGoogle: {
    color: COLORS.text,
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginBottom: 16,
    textAlign: 'center',
    marginTop: 70
  },
  containerButtonGoogle: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  imageGoogleBtn: {
    height: 70,
    objectFit: 'scale-down'
  },
  buttonRegitro: {
    marginTop: 80,
    backgroundColor: COLORS.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  buttonRegText: {
    color: COLORS.text,
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold'
  }
})

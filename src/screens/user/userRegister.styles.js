import { StatusBar, StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.primary
  },
  regContainer: {
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
    height: 50,
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
  buttonCities: {
    color: COLORS.textWhite,
    width: '80%',
    backgroundColor: COLORS.secondary,
    borderRadius: 20,
    marginRight: 35,
    alignItems: 'center',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  buttonCitiesText: {
    color: COLORS.textWhite
  },
  buttonCitiesRowStyle: {
    backgroundColor: COLORS.secondary,
    borderBottomColor: COLORS.primary
  },
  buttonCitiesRowTextStyle: {
    color: COLORS.textWhite,
    textAlign: 'center'
  },
  buttonReset: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 8,
    alignItems: 'center'
  },
  buttonSave: {
    backgroundColor: COLORS.white,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
    marginTop: 8,
    alignItems: 'center'
  },
  buttonText: {
    color: COLORS.textBlack,
    fontSize: FONT_SIZE.lg,
    fontWeight: 'bold'
  }
})

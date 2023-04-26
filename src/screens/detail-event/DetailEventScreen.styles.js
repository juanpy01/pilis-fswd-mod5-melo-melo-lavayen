import { StyleSheet, StatusBar, Dimensions } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
    marginTop: StatusBar.currentHeight
  },
  imageContainer: {
    height: 300
  },
  image: {
    width: Dimensions.get('screen').width,
    height: 300
  },
  textContainer: {
    padding: 20
  },
  title: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.text,
    fontWeight: 'bold',
    marginBottom: 10
  },
  location: {
    fontSize: FONT_SIZE.md,
    color: COLORS.textSecondary,
    marginBottom: 5
  },
  price: {
    fontSize: FONT_SIZE.md,
    color: COLORS.textSecondary,
    marginBottom: 5
  },
  description: {
    fontSize: FONT_SIZE.md,
    color: COLORS.textWhite,
    lineHeight: 26,
    marginTop: 10
  },
  map: {
    height: 250,
    width: Dimensions.get('screen').width - 20,
    marginVertical: 20,
    marginHorizontal: 10,
    borderRadius: 10
  },
  webButton: {
    textAlign: 'center',
    backgroundColor: COLORS.secondary,
    color: COLORS.white,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: 100,
    marginTop: 10
  }
})

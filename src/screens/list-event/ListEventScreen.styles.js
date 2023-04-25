import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.secondary
  },
  itemContainer: {
    flex: 1,
    width: Dimensions.get('screen').width,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 10,
    backgroundColor: COLORS.primary,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  itemList: {
    padding: 1
  },
  viewLoading: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  loading: {
    marginLeft: -30
  },
  itemImage: {
    height: '50%',
    width: '100%',
    objectFit: 'scale-down'
  },
  itemTitle: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.text,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10
  },
  itemPrice: {
    fontSize: FONT_SIZE.md,
    color: COLORS.textSecondary,
    marginTop: 5,
    marginBottom: 10,
    marginHorizontal: 10
  },
  description: {
    color: COLORS.textWhite,
    fontSize: FONT_SIZE.md,
    textAlign: 'justify',
    padding: 10
  }
})

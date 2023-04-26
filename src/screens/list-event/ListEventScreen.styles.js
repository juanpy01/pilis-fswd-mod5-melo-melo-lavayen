import { Dimensions, StyleSheet, StatusBar } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.secondary
  },
  itemContainer: {
    flex: 1,
    width: Dimensions.get('screen').width - 15,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
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
    height: 200,
    width: '100%',
    resizeMode: 'cover'
  },
  itemTitle: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.text,
    fontWeight: 'bold',
    marginTop: 10,
    marginHorizontal: 10
  },
  infoContainer: {
    alignItems: 'center'
  },
  itemInfo: {
    margin: 20,
    color: COLORS.textWhite,
    fontSize: FONT_SIZE.md
  }
})

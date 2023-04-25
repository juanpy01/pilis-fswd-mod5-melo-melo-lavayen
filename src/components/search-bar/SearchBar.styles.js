import { StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: COLORS.white,
    margin: 10,
    paddingVertical: 5,
    paddingHorizontal: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2
  },
  searchInput: {
    flex: 1,
    marginLeft: 10,
    fontSize: FONT_SIZE.md,
    color: COLORS.textWhite
  }
}
)

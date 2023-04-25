import { StatusBar, StyleSheet } from 'react-native'
import { COLORS, FONT_SIZE } from '../../utils/theme'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.secondary,
    marginTop: StatusBar.currentHeight
  },
  header: {
    backgroundColor: COLORS.primary,
    flexDirection: 'row',
    padding: 20,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 2
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
  content: {
    flex: 1,
    padding: 20
  },
  sectionTitle: {
    fontSize: FONT_SIZE.lg,
    color: COLORS.textSecondary,
    fontWeight: 'bold',
    marginBottom: 10
  },
  sectionText: {
    fontSize: FONT_SIZE.md,
    color: COLORS.textWhite,
    marginBottom: 20,
    lineHeight: 24
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

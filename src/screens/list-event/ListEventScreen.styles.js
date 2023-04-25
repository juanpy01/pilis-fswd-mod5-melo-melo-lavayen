import { Dimensions, StyleSheet, StatusBar } from "react-native";
import { COLORS } from "../../utils/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: COLORS.grey,
  },
  itemContainer: {
    flex: 1,
    width: Dimensions.get("screen").width,
    /* marginRight: 15, */
    borderRadius: 20,
    overflow: "hidden",
    marginBottom: 10,
    backgroundColor: COLORS.white,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  itemList: {
    padding: 1,
  },
  itemImage: {
    height: "50%",
    width: "100%",
    objectFit: "scale-down",
  },
  itemTitle: {
    fontWeight: "bold",
    marginTop: 10,
    marginHorizontal: 10,
  },
  itemPrice: {
    marginTop: 5,
    marginBottom: 10,
    marginHorizontal: 10,
  },
  description: {
    padding: 10,
  },
  viewLoading: { position: "absolute", top: "50%", left: "50%" },
  loading: {
    marginLeft: -30,
  },
});

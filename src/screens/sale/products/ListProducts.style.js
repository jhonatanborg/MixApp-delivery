import { StyleSheet } from "react-native";
import { Typography, Colors, Spacing } from "../../../styles";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.BACKGROUND_APP,
  },
  card: {
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
    backgroundColor: Colors.GRAY_LIGHT,
  },
  header: {
    paddingVertical: 15,
  },
  headerTitle: {},
  titleScreen: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  heading1: {
    color: Colors.THEMECOLOR,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
  },
  content: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  contain: {
    padding: 5,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  cardBody: {
    flex: 4,
    marginLeft: 8,
  },
  title: {
    color: Colors.BLACK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    marginTop: 8,
    textTransform: "capitalize",
    flex: 1,
  },
  text: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  price: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    flex: 1,
  },
  actions: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  bottomBarActions: {
    paddingVertical: 2,
    marginRight: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    shadowColor: "#000",
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
  },
  quantity: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 16,
    textAlign: "center",
    color: Colors.THEMECOLOR,
  },
  buttomAction: {
    padding: 5,
  },
  delete: {
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: 16,
    color: Colors.ALERT,
  },
  buttonLogin: {
    backgroundColor: Colors.THEMECOLOR,
  },
});

export default styles;

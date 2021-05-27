import { StyleSheet } from "react-native";
import { Typography, Colors, Spacing } from "../../../styles";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_LIGHT,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.20)",
    height: 180,
  },
  image: {
    resizeMode: "cover",
  },
  tinyLogo: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  headerTop: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  text: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginLeft: 5,
  },
  section: {
    borderRadius: 16,
    backgroundColor: Colors.BACKGROUND_APP,
    bottom: 20,
    padding: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  sectionItem: {
    flex: 1,
    paddingHorizontal: 20,
  },
  content: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  item: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingRight: 20,
  },
  icon: {
    color: Colors.GRAY_DARK,
  },
  title: {
    color: Colors.BLACK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_BOLD,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginTop: 10,
  },
  menu: {
    marginLeft: 20,
  },
  menuItem: {
    paddingHorizontal: 20,
  },
  menuItemSelected: {
    paddingHorizontal: 35,
    backgroundColor: Colors.THEMECOLOR,
    borderRadius: 10,
    paddingVertical: 10,
  },
  menuItemText: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    paddingVertical: 10,
  },
  menuItemTextSelected: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
});

export default styles;

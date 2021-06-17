import { StyleSheet } from "react-native";
import { Typography, Colors, Spacing } from "../../../../styles";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    backgroundColor: Colors.THEMECOLOR,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
  },
  icon: {
    backgroundColor: Colors.WHITE,
  },
  titleScreen: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    textAlign: "center",
  },
  subTitle: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  heading: {
    paddingVertical: 10,
  },
  heading1: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  list: {
    padding: 20,
    backgroundColor: Colors.GRAY_LIGHT,
    bottom: 20,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
  },
});

export default styles;

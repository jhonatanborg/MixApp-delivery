import { StyleSheet } from "react-native";
import { Typography, Colors, Spacing } from "../../../styles";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_LIGHT,
    padding: 20,
  },
  header: {
    paddingVertical: 15,
  },
  titleScreen: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  text: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    textTransform: "capitalize",
  },
  button: {
    backgroundColor: Colors.THEMECOLOR,
  },
  card: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },

  cardHeader: {
    borderBottomColor: Colors.GRAY_DARK,
    borderBottomWidth: 0.5,
  },
  cardTitle: {
    paddingVertical: 5,
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  content: {
    borderRadius: 8,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    backgroundColor: Colors.GRAY_DARK,
    padding: 5,
  },
  btnIconColor: {
    color: Colors.GRAY_DARK,
  },
});

export default styles;

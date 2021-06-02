import { StyleSheet } from "react-native";
import { Typography, Colors, Spacing } from "../../../styles";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 50,
    backgroundColor: Colors.BACKGROUND_APP,
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: 100,
    width: 100,
  },
  heading1: {
    color: Colors.BLACK,
    fontSize: Typography.FONT_SIZE_32,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    marginTop: 10,
    textAlign: "center",
  },
  text: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginTop: 10,
    textAlign: "center",
  },
});

export default styles;

import { StyleSheet } from "react-native";
import { Typography, Colors, Spacing } from "../../../styles";

const styles = StyleSheet.create({
  button: {
    height: 63,
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  buttonText: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_22,
    marginHorizontal: 5,
    textAlign: "center",
  },
});
export default styles;

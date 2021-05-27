import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../../styles";

const styles = StyleSheet.create({
  section: {
    marginTop: 15,
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  heading2: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
});
export default styles;

import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../../styles";

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.GRAY_LIGHT,
    padding: 5,
  },
  contain: {
    marginHorizontal: 3,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
    borderRadius: 8,
  },
  title: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    marginTop: 8,
    paddingHorizontal: 15,
  },
});
export default styles;

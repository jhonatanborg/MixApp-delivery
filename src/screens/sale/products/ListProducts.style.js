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
    width: 80,
    height: 80,
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
  },
  text: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  price: {
    color: Colors.THEMECOLOR,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
});

export default styles;

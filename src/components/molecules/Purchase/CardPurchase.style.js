import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../../styles";

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 15,
    flex: 1,
  },
  title: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  id: {
    color: Colors.THEMECOLOR,
    fontSize: Typography.FONT_SIZE_22,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  text: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    textTransform: "capitalize",
  },
  card: {
    backgroundColor: Colors.BACKGROUND_APP,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
  },
  cardFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
  },
  contain: {
    padding: 5,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
  },
  tinyLogo: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  chip: {
    borderRadius: 18,
    paddingHorizontal: 20,
    paddingVertical: 5,
  },
  textChip: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_16,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    textTransform: "capitalize",
  },
});
export default styles;

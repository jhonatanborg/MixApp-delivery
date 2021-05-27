import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../../styles";

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.GRAY_LIGHT,
    padding: 10,
    marginVertical: 10,
    borderRadius: 8,
  },
  content: {
    flexDirection: "row",
  },
  contain: {
    padding: 5,
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    alignSelf: "center",
  },
  cardBody: {
    paddingHorizontal: 15,
  },
  cardDetails: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  cardItem: {
    justifyContent: "flex-start",
    flexDirection: "row",
    alignItems: "baseline",
  },
  icon: {
    color: Colors.GRAY_DARK,
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
});
export default styles;

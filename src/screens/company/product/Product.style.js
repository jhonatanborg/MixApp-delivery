import { StyleSheet } from "react-native";
import { Typography, Colors, Spacing } from "../../../styles";
const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    height: 350,
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,0.20)",
    height: 350,
  },
  headerTop: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginTop: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  backButton: {
    borderRadius: 50,
    padding: 8,
    opacity: 50,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 15,
    alignItems: "center",
  },
  details: {
    padding: 20,
    backgroundColor: Colors.BACKGROUND_APP,
    borderTopRightRadius: 16,
    borderTopLeftRadius: 16,
  },
  title: {
    flex: 3,
    color: Colors.BLACK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    textTransform: "capitalize",
  },
  text: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  price: {
    flex: 1,
    color: Colors.DARK_BLUE,
    fontSize: Typography.FONT_SIZE_22,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
});
export default styles;

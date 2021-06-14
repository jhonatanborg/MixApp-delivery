import { StyleSheet } from "react-native";
import { Typography, Colors, Spacing } from "../../../../styles";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY_LIGHT,
    padding: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 5,
  },
  headerTitle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  titleScreen: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    textAlign: "center",
  },
});

export default styles;

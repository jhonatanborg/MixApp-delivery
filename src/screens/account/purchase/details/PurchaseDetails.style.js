import { StyleSheet } from "react-native";
import { Typography, Colors, Spacing } from "../../../../styles";
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  section: {
    backgroundColor: Colors.BACKGROUND_APP,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  section2: {
    paddingVertical: 10,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
  },
  icon: {
    backgroundColor: Colors.GRAY_DARK,
  },
  titleScreen: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    textAlign: "center",
  },

  subTitle: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  heading: {
    paddingVertical: 10,
  },
  section2: {
    marginTop: 10,
  },
  card: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  heading1: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
  },
  content: {
    backgroundColor: Colors.GRAY_LIGHT,
    bottom: 20,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    flex: 1,
  },
  content2: {
    borderRadius: 8,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  chip: {
    paddingHorizontal: 20,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  textChip: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    textTransform: "capitalize",
  },
  text: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    textTransform: "capitalize",
  },
  price: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    textTransform: "capitalize",
  },
  price2: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    textTransform: "capitalize",
  },
  list: {
    padding: 20,
  },
  listItem: {
    justifyContent: "space-between",
  },
  listItemSub: {
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  listItemContent: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default styles;

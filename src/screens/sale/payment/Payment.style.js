import { StyleSheet } from "react-native";
import { Typography, Colors, Spacing } from "../../../styles";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: Colors.BACKGROUND_APP,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 15,
  },
  section2: {
    marginTop: 20,
  },
  heading1: {
    color: Colors.BLACK,
    fontSize: Typography.FONT_SIZE_22,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  heading2: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  text: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    flex: 3,
    textTransform: "capitalize",
    marginLeft: 8,
  },
  textSelected: {
    color: Colors.WHITE,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    flex: 3,
    textTransform: "capitalize",
    marginLeft: 8,
  },

  btn: {
    flex: 1,
    height: 40,
    marginLeft: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor: Colors.THEME_LIGHT,
    borderWidth: 0.5,
    borderColor: Colors.THEMECOLOR,
  },
  btnText: {
    color: Colors.THEMECOLOR,
    fontSize: Typography.FONT_SIZE_22,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  listPayment: {
    flexDirection: "row",
  },
  card: {
    marginHorizontal: 5,
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderRadius: 8,
    width: "50%",
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  cardSelected: {
    marginHorizontal: 5,
    backgroundColor: Colors.THEMECOLOR,
    padding: 15,
    borderRadius: 8,
    width: "50%",
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  footer: {
    position: "absolute",
    height: 100,
    bottom: 0,
    width: "100%",
    borderRadius: 8,
    backgroundColor: Colors.WHITE,
    elevation: 5,
    paddingHorizontal: 15,
  },
  icon: {
    backgroundColor: Colors.THEMECOLOR,
  },
  btnIconColor: {
    color: Colors.GRAY_DARK,
  },
});

export default styles;

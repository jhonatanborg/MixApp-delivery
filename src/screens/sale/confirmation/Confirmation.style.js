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
  card: {
    backgroundColor: Colors.WHITE,
    padding: 15,
    borderRadius: 8,
    marginVertical: 5,
  },
  cardPay: {
    marginHorizontal: 5,
    backgroundColor: Colors.GRAY_LIGHT,
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  textPay: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    textTransform: "capitalize",
    marginLeft: 8,
  },
  cardHeader: {
    borderBottomColor: Colors.GRAY_DARK,
    borderBottomWidth: 0.5,
  },
  cardTitle: {
    paddingVertical: 5,
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  content: {
    borderRadius: 8,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icon: {
    backgroundColor: Colors.GRAY_DARK,
    padding: 5,
  },
  formGroup: {
    flex: 3,
    paddingVertical: 20,
  },
  input: {
    height: 40,
    borderWidth: 0,
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  divider: {
    marginTop: 5,
    borderColor: Colors.GRAY_DARK,
    borderTopWidth: 0.5,
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

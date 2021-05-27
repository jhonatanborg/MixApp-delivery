import { StyleSheet } from "react-native";
import { Typography, Colors, Spacing } from "../../../styles";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.BACKGROUND_APP,
    justifyContent: "center",
  },
  tinyLogo: {
    width: 70,
    height: 70,
  },
  headerLogo: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 35,
    paddingVertical: 30,
    marginVertical: Spacing.SCALE_12,
  },
  title: {
    fontSize: Typography.FONT_SIZE_40,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.THEMECOLOR,
    marginHorizontal: Spacing.SCALE_18,
  },
  headerContent: {
    flex: 1,
    justifyContent: "center",
  },
  description: {
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    color: Colors.GRAY_DARK,
  },
  formGroup: {
    marginVertical: 8,
  },
  form: {
    paddingVertical: 20,
  },
  label: {
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.GRAY_DARK,
    marginVertical: 5,
  },
  input: {
    height: 60,
    borderWidth: 0,
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: 12,
    paddingHorizontal: 15,
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  buttonLogin: {
    backgroundColor: Colors.THEMECOLOR,
  },
  buttonText: {
    color: Colors.WHITE,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_22,
  },
  buttonLoginFacebook: {
    backgroundColor: "#246BFD",
  },
  footer: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  linkText: {
    color: Colors.THEMECOLOR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    fontSize: Typography.FONT_SIZE_22,
    marginHorizontal: Spacing.SCALE_8,
  },
});

export default styles;

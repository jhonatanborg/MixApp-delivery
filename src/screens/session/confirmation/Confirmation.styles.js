import { StyleSheet } from "react-native";
import { Typography, Colors, Spacing } from "../../../styles";
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.THEMECOLOR,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  headerTitle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  titleScreen: {
    color: Colors.BACKGROUND_APP,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    textAlign: "center",
  },

  section: {
    paddingHorizontal: 30,
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  heading1: {
    color: Colors.GRAY_LIGHT,
    fontSize: Typography.FONT_SIZE_32,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    marginTop: 10,
    textAlign: "center",
  },
  text: {
    color: Colors.GRAY_LIGHT,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginTop: 10,
    textAlign: "center",
  },
  textBold: {
    color: Colors.GRAY_LIGHT,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    textAlign: "center",
    marginTop: 10,
  },

  formGroup: {
    marginVertical: 20,
  },
  form: {
    paddingVertical: 20,
  },
  label: {
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    color: Colors.TEXT_LABEL,
    textAlign: "center",
  },
  input: {
    height: 60,
    borderWidth: 0,
    backgroundColor: Colors.GRAY_LIGHT,
    borderRadius: 8,
    paddingHorizontal: 15,
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    marginTop: 5,
    textAlign: "center",
  },
  btnSecondary: {
    alignItems: "center",
    justifyContent: "center",
  },
  btnSecondaryText: {
    color: Colors.GRAY_LIGHT,
    fontSize: Typography.FONT_SIZE_22,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    textAlign: "center",
  },

  footer: {
    backgroundColor: Colors.BACKGROUND_APP,
    paddingHorizontal: 50,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    paddingVertical: 20,
    flex: 1,
  },
  button: {
    backgroundColor: Colors.THEMECOLOR,
  },
  buttonSecondary: {
    marginVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
  },
  btnText: {
    color: Colors.THEMECOLOR,
    fontSize: Typography.FONT_SIZE_22,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  icon: {
    width: 100,
    height: 100,
  },
});

export default styles;

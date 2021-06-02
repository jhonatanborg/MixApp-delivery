import { StyleSheet } from "react-native";
import { Typography, Colors, Spacing } from "../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: Colors.BACKGROUND_APP,
  },
  header: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: 10,
  },
  tinyLogo: {
    width: 30,
    height: 40,
    marginRight: 10,
  },
  headerTitle: {
    flex: 3,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  icon: {
    color: Colors.GRAY_DARK,
  },
  borderIcon: {
    borderWidth: 2,
    borderColor: Colors.GRAY_LIGHT,
    borderRadius: 10,
    padding: 10,
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
  section: {
    marginVertical: 10,
  },
  heading: {
    color: Colors.THEMECOLOR,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
  },
  heading2: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    marginBottom: 10,
  },
  content: {
    justifyContent: "flex-start",
    flexDirection: "row",
  },
  text: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    flex: 1,
  },
});

export default styles;

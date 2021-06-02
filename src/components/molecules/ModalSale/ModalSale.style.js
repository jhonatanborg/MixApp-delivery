import { StyleSheet } from "react-native";
import { Typography, Colors } from "../../../styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-end",
    paddingTop: 10,
    backgroundColor: "#ecf0f1",
  },
  modalView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 100,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  innerContainerTransparentStyle: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width: "100%",
  },
  modalBackgroundStyle: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  heading1: {
    color: Colors.BLACK,
    fontSize: Typography.FONT_SIZE_32,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    marginTop: 10,
    textAlign: "center",
  },
  text: {
    color: Colors.GRAY_DARK,
    fontSize: Typography.FONT_SIZE_22,
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontFamily: Typography.FONT_FAMILY_REGULAR,
    marginTop: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: Colors.THEMECOLOR,
    paddingHorizontal: 30,
  },
  btnText: {
    color: Colors.THEMECOLOR,
    fontSize: Typography.FONT_SIZE_22,
    fontFamily: Typography.FONT_FAMILY_BOLD,
    marginTop: 10,
    textAlign: "center",
  },
});
export default styles;

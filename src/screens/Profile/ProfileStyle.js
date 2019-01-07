import { StyleSheet, Dimensions } from "react-native";

const win = Dimensions.get("window");
const w = win.width;
const h = win.height;

export default (styles = StyleSheet.create({
  headline: {
    fontFamily: "GothamPro-Bold",

    margin: 0,
    paddingTop: 24,
    opacity: 0.8,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "normal",
    color: "#262626"
  },
  button_profile: {
    width: 154
  },
  img: {
    width: 86,
    height: 86,
    borderRadius: 100,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#979797"
  }
}));

import {
  StyleSheet,
  Dimensions
} from "react-native";

const win = Dimensions.get("window");
const w = win.width;
const h = win.height;

export default (styles = StyleSheet.create({
  headline: {
    fontWeight: "bold",
    margin: 0,
    opacity: 0.8,
    textAlign: "center",
    fontSize: 20,
    fontStyle: "normal",
    color: "#262626"
  },

  input_password: {
    marginTop: 26
  },

  error: {
    marginTop: 24,
    backgroundColor: "rgba(237, 65, 89, 0.25)",
    height: 40,
    width: w / 1.3,
    borderRadius: 4,
    paddingTop: 12,
    paddingRight: 6,
    paddingBottom: 8,
    paddingLeft: 14,
    textAlign: "left"
  },

  error_text: {
    fontFamily: "GothamPro-Bold",
    fontSize: 12,
    fontStyle: "normal",
    color: "#ed4159"
  }
}));

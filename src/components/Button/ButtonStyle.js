import { StyleSheet, Dimensions } from "react-native";

const win = Dimensions.get("window");
const w = win.width;
const h = win.height;

export default (styles = StyleSheet.create({
  button: {
    width: 145,
    height: 48,
    borderRadius: 100,
    backgroundColor: "#ed4159",
    marginTop: 40,
    padding: 0,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    color: "#ffffff",
    elevation: 3
  },

  buttonText: {
    fontFamily: "GothamPro",
    fontSize: 14,
    fontStyle: "normal",
    textAlign: "center",
    color: "#ffffff"
  },

  buttonPress: {
    elevation: 4,
    backgroundColor: "#ffffff"
  },

  buttonTextPress: {
    color: "#ed4159"
  }
}));

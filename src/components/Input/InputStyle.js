import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions
} from "react-native";

const win = Dimensions.get("window");
const w = win.width;
const h = win.height;

export default (styles = StyleSheet.create({
  input: {
    fontFamily: "GothamPro",

    fontWeight: "500",

    marginTop: 32,
    width: w / 1.3,
    fontSize: 16,
    fontStyle: "normal",
    height: 48,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#f1f1f1",
    borderRadius: 4,
    backgroundColor: "#f1f1f1",
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 16,
    paddingRight: 16,
    opacity: 0.8,
    fontSize: 16,
    color: "#262626"
  },

  inputPress: {
    borderColor: "rgba(151, 151, 151, 0.25)"
  },

  errorChange: {
    borderColor: "#ed4159",
    color: "#ed4159"
  }
}));

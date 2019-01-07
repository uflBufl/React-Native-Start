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
  panel: {
    width: w / 1.111111111,
    paddingTop: 32,
    paddingBottom: 48,
    paddingLeft: 24,
    paddingRight: 24,
    borderRadius: 8,

    shadowColor: "rgba(0, 0, 0, 0.15)",
    shadowOffset: {
      width: 2,
      height: 16
    },
    elevation: 3,

    backgroundColor: "#ffffff",
    marginTop: 120
  }
}));

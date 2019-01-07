import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image } from "react-native";
import styles from "./PanelStyle.js";

export default class Panel extends Component {
  render() {
    return <View style={styles.panel}>{this.props.children}</View>;
  }
}

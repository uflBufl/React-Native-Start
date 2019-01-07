import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Form,
  TouchableHighlight
} from "react-native";
import styles from "./ButtonStyle.js";

import classNames from "classnames-react-native";

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }
  _onHideUnderlay() {
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay() {
    this.setState({ pressStatus: true });
  }

  render() {
    const { style, ...otherProps } = this.props;

    const buttonClass = classNames(styles.button, style, [
      styles.buttonPress,
      this.state.pressStatus
    ]);

    const buttonTextClass = classNames(styles.buttonText, [
      styles.buttonTextPress,
      this.state.pressStatus
    ]);

    return (
      <View style={{ alignItems: "center" }}>
        <TouchableHighlight
          style={buttonClass}
          activeOpacity={0.8}
          onPress={this.props.onPress}
          disabled={this.props.disabled}
          onHideUnderlay={this._onHideUnderlay.bind(this)}
          onShowUnderlay={this._onShowUnderlay.bind(this)}
          underlayColor={"#ffffff"}
        >
          <Text style={buttonTextClass}>{this.props.value}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

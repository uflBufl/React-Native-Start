import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Image,
  Form,
  TextInput
} from "react-native";
import styles from "./InputStyle.js";

import classNames from "classnames-react-native";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { pressStatus: false };
  }

  _onFocus() {
    if (this.props.isInvalid != undefined) {
      this.props.onFocus();
    }
    this.setState({ pressStatus: true });
  }
  _onBlur() {
    this.setState({ pressStatus: false });
  }

  render() {
    const { style, onFocus, ...otherProps } = this.props;

    const inputClass = classNames(
      styles.input,
      style,
      [styles.inputPress, this.state.pressStatus],
      [styles.errorChange, this.props.isInvalid]
    );

    return (
      <TextInput
        disable={this.props.disable}
        style={inputClass}
        onFocus={this._onFocus.bind(this)}
        onBlur={this._onBlur.bind(this)}
        {...otherProps}
      />
    );
  }
}

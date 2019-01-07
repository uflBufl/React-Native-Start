import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, Form } from "react-native";
import styles from "./LoginStyle.js";

import Panel from "../../components/Panel/Panel.js";
import Input from "../../components/Input/Input.js";
import Button from "../../components/Button/Button.js";
import UserContext from "../../store/user-context.js";
import withUserContext from "../../store/withUserContext.js";
import http from "../../services/http.js";

class LogIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "user@example.com",
      password: "mercdev",
      isSending: false,
      isInvalid: false,
      error: ""
    };

    this.removeHighlightRed = this.removeHighlightRed.bind(this);
    this.submitForm = this.submitForm.bind(this);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
  }

  async submitForm(e) {
    e.preventDefault();
    this.setState({
      isSending: true,
      error: ""
    });
    try {
      const url =
        "https://us-central1-mercdev-academy.cloudfunctions.net/login";
      const params = JSON.stringify({
        email: this.state.email,
        password: this.state.password
      });
      const response = await http.post(url, params);
      const user = response;

      this.props.submitLogin(user);
    } catch (response) {
      if (response.status == 400) {
        this.setState({
          password: "",
          isInvalid: true
        });
      }

      this.setState({
        error: response.error
      });
    }
    this.setState({
      isSending: false
    });
  }

  removeHighlightRed() {
    this.setState({
      isInvalid: false
    });
  }

  handleChangeEmail(text) {
    this.setState({ email: text });
  }

  handleChangePassword(text) {
    this.setState({ password: text });
  }

  render() {
    return (
      <View>
        <Panel>
          <Text style={styles.headline}>Log In</Text>
          <Input
            // type="email"
            onFocus={this.removeHighlightRed}
            value={this.state.email}
            isInvalid={this.state.isInvalid}
            disabled={this.state.isSending}
            editable={!this.state.isSending}
            selectTextOnFocus={!this.state.isSending}
            onChangeText={this.handleChangeEmail}
            placeholder="E-Mail"
          />

          <Input
            secureTextEntry={true}
            value={this.state.password}
            disabled={this.state.isSending}
            editable={!this.state.isSending}
            selectTextOnFocus={!this.state.isSending}
            onChangeText={this.handleChangePassword}
            placeholder="Password"
            style={styles.input_password}
          />

          <View
            style={[styles.error, !this.state.error && { display: "none" }]}
          >
            <Text style={styles.error_text}>{this.state.error}</Text>
          </View>

          <Button
            value="Login"
            onPress={this.submitForm}
            disabled={this.state.isSending}
          />
        </Panel>
      </View>
    );
  }
}

const LogInWithUserContext = withUserContext(LogIn);
export default LogInWithUserContext;

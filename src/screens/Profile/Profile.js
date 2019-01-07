import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, Image, Form } from "react-native";
import styles from "./ProfileStyle.js";

import Button from "../../components/Button/Button.js";
import Panel from "../../components/Panel/Panel.js";
import withUserContext from "../../store/withUserContext.js";

class Profile extends React.Component {
  render() {
    return (
      <View>
        <Panel>
          <View
            style={{
              alignItems: "center"
            }}
          >
            <Image
              source={{ uri: this.props.user.photoUrl }}
              style={styles.img}
            />
          </View>

          <Text style={styles.headline}>{this.props.user.name}</Text>

          <Button
            value="Logout"
            onPress={this.props.submitLogout}
            style={styles.button_profile}
          />
        </Panel>
      </View>
    );
  }
}

const ProfileWithUserContext = withUserContext(Profile);
export default ProfileWithUserContext;

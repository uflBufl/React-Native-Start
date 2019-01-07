import React, { Component } from "react";
import { StyleSheet } from "react-native";

export default (styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center"
  },
  background: {
    position: "absolute"
  },
  logo: {
    position: "absolute",
    marginTop: 43
  }
}));

import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

function MaterialButtonShare(props) {
  
  return (
    <TouchableOpacity style={[styles.container, props.style]} onPress={props.onPress} onPressIn={props.onPressIn}
      onPressOut={props.onPressOut} >
      <Icon name="microphone" style={styles.icon}></Icon>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(255,255,255,1)",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 28,
    shadowColor: "#111",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.2,
    elevation: 2,
    minWidth: 40,
    minHeight: 40
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 24,
    alignSelf: "center"
  }
});

export default MaterialButtonShare;

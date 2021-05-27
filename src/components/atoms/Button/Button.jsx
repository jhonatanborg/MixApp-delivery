import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./Button.style";
import { FontAwesome5 } from "@expo/vector-icons";

const Button = (props) => (
  <TouchableOpacity
    onPress={props.onPress}
    style={[styles.button, props.buttonColor]}
  >
    {props.icon ? (
      <FontAwesome5 name={props.icon} size={24} color="white" />
    ) : null}

    <Text style={styles.buttonText}>{props.name}</Text>
  </TouchableOpacity>
);
export default Button;

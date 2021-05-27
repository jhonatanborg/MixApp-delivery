import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./BottomBar.style";
import getEnvVars from "../../../../environment";
import { AntDesign } from "@expo/vector-icons";
import { convertMoney } from "../../../utils";

const { BASE_URL } = getEnvVars();

const BottomBar = (props) => {
  return (
    <View style={styles.bottomBar}>
      <View style={styles.bottomBarActions}>
        <TouchableOpacity
          onPress={props.DecraseQuantity}
          style={styles.buttomAction}
        >
          <AntDesign name="minus" size={24} color="black" />
        </TouchableOpacity>
        <View>
          <Text style={styles.quantity}>{props.quantity}</Text>
        </View>
        <TouchableOpacity
          onPress={props.AddQuantity}
          style={styles.buttomAction}
        >
          <AntDesign name="plus" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={{ flex: 3 }}>
        <TouchableOpacity style={styles.button} onPress={props.onPress}>
          <Text style={styles.buttonText}>
            Adicionar {convertMoney(props.total)}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;

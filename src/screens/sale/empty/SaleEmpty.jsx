import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";

import styles from "./SaleEmpty.style";
import image from "../../../assets/images/sale/sale-empty.png";

const SaleEmpty = (props) => {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.heading1}>Sua cesta esta vazia</Text>
      <Text style={styles.text}>
        Retorne as nossas lojas e adicione produtos a sua cesta.
      </Text>
    </View>
  );
};

export default SaleEmpty;

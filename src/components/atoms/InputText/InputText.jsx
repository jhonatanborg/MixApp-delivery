import React from "react";
import { View, TextInput } from "react-native";
import styles from "./InputText.style";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import productRepository from "src/services/repositories/productRepository";

const InputText = () => (
  <View style={styles.sectionInput}>
    <MaterialCommunityIcons
      name="magnify"
      size={24}
      color={styles.icon.color}
    />
    <TextInput
      style={styles.input}
      onChangeText={handleInput}
      placeholder="Buscar"
    />
  </View>
);
export default InputText;

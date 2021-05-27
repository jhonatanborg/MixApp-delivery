import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Categorie.style";
import getEnvVars from "../../../../environment";

const { BASE_URL } = getEnvVars();

const Categorie = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.contain}>
        <View style={styles.card}>
          <Image
            source={{ uri: `${BASE_URL + props.categorie.img}` }}
            style={styles.image}
            resizeMode="cover"
          ></Image>
        </View>
        <Text style={styles.title}>{props.categorie.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Categorie;

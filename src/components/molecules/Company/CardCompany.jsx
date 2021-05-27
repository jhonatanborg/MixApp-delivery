import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./CardCompany.style";
import getEnvVars from "../../../../environment";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";

const { BASE_URL } = getEnvVars();

const CardCompany = (props) => {
  const company = props.company;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.contain}>
            <Image
              style={styles.image}
              source={{ uri: `${BASE_URL + company.logo}` }}
            />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.title}>{company.name}</Text>
            <Text style={styles.text}>Lanches</Text>
            <View style={styles.cardDetails}>
              <View style={{ ...styles.cardItem, marginRight: 10 }}>
                <MaterialCommunityIcons
                  name="map-marker-outline"
                  size={22}
                  color={styles.icon.color}
                />
                <Text style={styles.text}>3.2 km</Text>
              </View>
              <View style={styles.cardItem}>
                <MaterialIcons
                  name="timer"
                  size={22}
                  color={styles.icon.color}
                />
                <Text style={styles.text}>50min - 60min</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardCompany;

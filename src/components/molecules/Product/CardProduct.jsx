import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./CardProduct.style";
import getEnvVars from "../../../../environment";
import { convertMoney } from "../../../utils";

const { BASE_URL } = getEnvVars();
const image = {
  uri: "https://images.pexels.com/photos/4109132/pexels-photo-4109132.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
};
const CardCompany = (props) => {
  const product = props.product;
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={styles.card}>
        <View style={styles.content}>
          <View style={styles.contain}>
            <Image
              style={styles.image}
              source={{ uri: `${BASE_URL + product.img}` }}
            />
          </View>
          <View style={styles.cardBody}>
            <Text style={styles.title}>{product.name}</Text>
            <Text numberOfLines={2} style={styles.text}>
              {product.description}
            </Text>
            <Text style={styles.price}>{convertMoney(product.sale_value)}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default CardCompany;

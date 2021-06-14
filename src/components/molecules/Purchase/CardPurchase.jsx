import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./CardPurchase.style";
import getEnvVars from "../../../../environment";
import { convertMoney } from "../../../utils";

const { BASE_URL } = getEnvVars();
const image = {
  uri: "https://images.pexels.com/photos/4109132/pexels-photo-4109132.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
};
const CardPurchase = (props) => {
  console.log(props);

  return (
    <View style={styles.card}>
      <View style={styles.contain}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: BASE_URL + props.purchase.company.logo,
          }}
        />
      </View>

      <View style={styles.content}>
        <View>
          <Text style={styles.id}>#{props.purchase.id}</Text>
          <Text style={styles.title}>{props.purchase.company.name}</Text>
          <View style={styles.cardFooter}>
            <Text style={styles.text}>
              {props.purchase.quantity > 1
                ? props.purchase.quantity + " itens"
                : props.purchase.quantity + " item"}
            </Text>
            <View
              style={[
                styles.chip,
                { backgroundColor: props.purchase.color.secondary },
              ]}
            >
              <Text
                style={[
                  styles.textChip,
                  { color: props.purchase.color.primary },
                ]}
              >
                {props.purchase.status}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardPurchase;

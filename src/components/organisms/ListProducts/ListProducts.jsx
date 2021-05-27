import React from "react";
import { View, Text, FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./ListProducts.style";
import getEnvVars from "../../../../environment";
import CardProduct from "../../molecules/Product/CardProduct";
const { BASE_URL } = getEnvVars();

const ListProducts = (props) => {
  const navigation = useNavigation();
  const groupProducts = props.groupProducts;
  return (
    <View style={styles.section}>
      <View style={styles.header}>
        <Text style={styles.heading2}>{groupProducts.name}</Text>
      </View>
      <FlatList
        data={groupProducts.products}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index, separators }) => (
          <CardProduct
            key={index.toString()}
            onPress={() =>
              navigation.navigate("Product", {
                product: item,
                categorie: groupProducts.name,
              })
            }
            product={item}
          ></CardProduct>
        )}
      />
    </View>
  );
};

export default ListProducts;

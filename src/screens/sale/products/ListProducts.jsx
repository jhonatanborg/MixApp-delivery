import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { connect } from "react-redux";
import * as saleActions from "../../../store/actions/saleActions";
import { bindActionCreators } from "redux";
import styles from "./ListProducts.style";
import getEnvVars from "../../../../environment";
import { convertMoney } from "../../../utils";
const { BASE_URL } = getEnvVars();
const ListProducts = (props) => {
  console.log("aqui", props);
  return (
    <View style={styles.container}>
      <Text>Aqui</Text>
      <FlatList
        data={props.sale}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index, separators }) => (
          <TouchableOpacity onPress={props.onPress}>
            <View style={styles.card}>
              <View style={styles.content}>
                <View style={styles.contain}>
                  <Image
                    style={styles.image}
                    source={{ uri: `${BASE_URL + item.img}` }}
                  />
                </View>
                <View style={styles.cardBody}>
                  <Text style={styles.title}>{item.product_name}</Text>
                  <Text numberOfLines={2} style={styles.text}>
                    {item.description}
                  </Text>
                  <Text style={styles.price}>
                    {convertMoney(item.sale_value)}
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    sale: state.sale,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(saleActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(ListProducts);

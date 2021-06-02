import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";

import { connect } from "react-redux";
import * as saleActions from "../../../store/actions/saleActions";
import { bindActionCreators } from "redux";
import styles from "./ListProducts.style";
import getEnvVars from "../../../../environment";
import { convertMoney } from "../../../utils";
import Button from "../../../components/atoms/Button/Button";
const { BASE_URL } = getEnvVars();
const ListProducts = (props) => {
  const navigation = useNavigation();

  console.log(props);
  const sale = useSelector((state) => state.sale);
  const company_name = sale[0].company_name;
  function Total(index) {
    return sale[index].product_qtd * Number(sale[index].total);
  }
  function subTotal() {
    const subtotal = sale
      .map((item) => Number(item.total) * item.product_qtd)
      .reduce((prev, next) => prev + next);
    return convertMoney(subtotal);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.titleScreen}>Minha sacola</Text>
          <Text style={styles.heading1}>{company_name}</Text>
        </View>
      </View>
      <FlatList
        data={sale}
        keyExtractor={(item, index) => Number(item.product_id) + index}
        renderItem={({ item, index }) => (
          <View onPress={props.onPress}>
            <View style={styles.card}>
              <View style={styles.content}>
                <View style={styles.contain}>
                  <Image
                    style={styles.image}
                    source={{ uri: `${BASE_URL + item.img}` }}
                  />
                </View>
                <View style={styles.cardBody}>
                  <View>
                    <Text numberOfLines={1} style={styles.title}>
                      {item.product_name}
                    </Text>
                    <TouchableOpacity onPress={() => props.removeItem(index)}>
                      <Text style={styles.delete}>Remover</Text>
                    </TouchableOpacity>
                  </View>

                  <View style={styles.actions}>
                    <Text style={styles.price}>
                      {convertMoney(Total(index))}
                    </Text>
                    <View style={styles.bottomBarActions}>
                      <TouchableOpacity
                        style={styles.buttomAction}
                        onPress={() => props.SubQtdItem(item)}
                      >
                        <AntDesign name="minus" size={24} color="#8a8a8a" />
                      </TouchableOpacity>
                      <View>
                        <Text style={styles.quantity}>{item.product_qtd}</Text>
                      </View>
                      <TouchableOpacity
                        style={styles.buttomAction}
                        onPress={() => props.AddQtdItem(item)}
                      >
                        <AntDesign name="plus" size={24} color="#8a8a8a" />
                      </TouchableOpacity>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        )}
      />
      <Button
        name={` Confirmar ${subTotal()}`}
        buttonColor={styles.buttonLogin}
        onPress={() => navigation.navigate("ConfirmationSale")}
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

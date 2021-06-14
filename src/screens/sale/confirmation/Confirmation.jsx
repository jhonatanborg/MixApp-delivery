import React, { useContext } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";
const { BASE_URL } = getEnvVars();
import getEnvVars from "../../../../environment";
import styles from "./Confirmation.style";
import Button from "../../../components/atoms/Button/Button";
import { SvgUri } from "react-native-svg";
import { PURCHASE } from "../../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AuthContext from "../../../contexts/index";

const ConfirmationSale = (props) => {
  const { signed, signOut, user } = useContext(AuthContext);
  console.log(user);
  const address = useSelector((state) => state.location.address);
  const payment = useSelector((state) => state.sale.payment);
  const saleItems = useSelector((state) => state.sale);
  const company = useSelector((state) => state.company);
  async function handlePurchase() {
    const newSale = [];
    saleItems.forEach((item) => {
      console.log(item);
      const childs = [];
      if (item.childs.length > 0) {
        item.childs.forEach((child) => {
          childs.push({ product_id: child.product_id });
        });
      }
      newSale.push({
        product_id: item.product_id,
        comment: item.comment,
        product_qtd: item.product_qtd,
        childs: childs,
      });
    });

    let paymentsArray = [];
    payment.forEach((element) => {
      paymentsArray.push(element.id);
    });
    let sale = {
      address: address,
      saleItems: newSale,
      type: "online",
      change_for: null,
      cupom: null,
      payment_available_id: paymentsArray,
      company_id: company.id,
      ispromotion: false,
    };
    console.log(sale);
    const response = await PURCHASE.sendPurchase(sale, user.token);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Feather
            name="chevron-left"
            size={26}
            color={styles.btnIconColor.color}
          />
        </TouchableOpacity>
        <Text style={styles.heading2}>Itens na sacola</Text>
      </View>
      <ScrollView style={styles.section}>
        <View>
          <Text style={styles.heading1}>Finalizar seu pedido</Text>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Endereço de entrega:</Text>
          </View>
          <View style={styles.content}>
            <Text numberOfLines={2} style={styles.text}>
              {address && address.street
                ? `${address.street}, ${address.number} - ${address.district}`
                : "Buscar endereço"}
            </Text>
            <TouchableOpacity
              onPress={() =>
                props.navigation.navigate("Map", { confirmation: true })
              }
            >
              <Feather
                name="edit"
                size={24}
                color={styles.btnIconColor.color}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Forma de pagamento:</Text>
          </View>
          <View style={styles.content}>
            <View style={{ flexDirection: "row" }}>
              {payment.map((item, index) => {
                return (
                  <TouchableOpacity key={index} style={styles.cardPay}>
                    <View style={styles.image}>
                      <SvgUri uri={BASE_URL + item.img} />
                    </View>
                    <View>
                      <Text style={styles.textPay}>{item.title}</Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
            <TouchableOpacity
              onPress={() => props.navigation.navigate("Payment")}
            >
              <Text numberOfLines={2} style={styles.btnText}>
                Alterar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Cupom de desconto:</Text>
          </View>
          <View style={styles.content}>
            <View style={styles.formGroup}>
              <TextInput style={styles.input} placeholder="Digite seu cupom" />
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={styles.btnText}>Adicionar</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.section2}>
          <View>
            <Text style={styles.heading1}>Resumo</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.content}>
              <Text numberOfLines={2} style={styles.text}>
                Subtotal
              </Text>
              <View>
                <Text numberOfLines={2} style={styles.text}>
                  R$ 15,00
                </Text>
              </View>
            </View>
            <View style={styles.content}>
              <Text numberOfLines={2} style={styles.text}>
                Taxa de entrega
              </Text>
              <View>
                <Text numberOfLines={2} style={styles.text}>
                  R$ 5,00
                </Text>
              </View>
            </View>
            <View style={styles.divider}></View>
            <View style={styles.content}>
              <Text numberOfLines={2} style={styles.heading1}>
                Total
              </Text>
              <View>
                <Text numberOfLines={2} style={styles.heading1}>
                  R$ 20,00
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button
          name="Fazer Pedido"
          onPress={handlePurchase}
          buttonColor={styles.icon}
        />
      </View>
    </View>
  );
};

export default ConfirmationSale;

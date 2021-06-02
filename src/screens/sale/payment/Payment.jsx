import React from "react";
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
import { SvgUri } from "react-native-svg";

import styles from "./Payment.style";
import Button from "../../../components/atoms/Button/Button";

const Payment = (props) => {
  const company = useSelector((state) => state.company);
  console.log(company.payment);
  function payments() {
    const groups = [];
    const payments = company.payment;
    payments.map((payment) => {
      if (!groups.find((item) => item.id === payment.payment.group.id)) {
        groups.push(payment.payment.group);
      }
      groups.map((group) => {
        group.payments = [];
      });
    });

    groups.map((group) => {
      payments.map((payment) => {
        if (group.id === payment.payment.payment_group_available_id) {
          group.payments.push({
            id: payment.payment.id,
            title: payment.payment.title,
            img: payment.payment.img,
          });
        }
      });
    });

    return groups;
  }
  console.log(`${BASE_URL + "/uploads/payments/elo.svg"}`);
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
        <Text style={styles.heading2}>Selecione a forma de pagamento</Text>
      </View>
      <ScrollView style={styles.section}>
        <View>
          <View>
            <Text style={styles.heading1}>Cartão de crédito</Text>
          </View>
          <View style={styles.listPayment}>
            <TouchableOpacity style={styles.card}>
              <SvgUri uri={`${BASE_URL + "/uploads/payments/elo.svg"}`} />
              <View>
                <Text style={styles.text}>MasterCard</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.card}>
              <SvgUri uri={`${BASE_URL + "/uploads/payments/elo.svg"}`} />
              <View>
                <Text style={styles.text}>MasterCard</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button name="Confirmar" buttonColor={styles.icon} />
      </View>
    </View>
  );
};

export default Payment;

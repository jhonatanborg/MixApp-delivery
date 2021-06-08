import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  SafeAreaView,
  FlatList,
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
  const [payments, setPayments] = useState([]);
  const [paySelected, setPaySelected] = useState([]);
  useEffect(() => {
    const groups = [];
    const newPayments = company.payment;
    newPayments.map((payment) => {
      if (!groups.find((item) => item.id === payment.payment.group.id)) {
        groups.push(payment.payment.group);
      }
      groups.map((group) => {
        group.payments = [];
      });
    });

    groups.map((group) => {
      newPayments.map((payment) => {
        if (group.id === payment.payment.payment_group_available_id) {
          group.payments.push({
            id: payment.payment.id,
            title: payment.payment.title,
            img: payment.payment.img,
          });
        }
      });
    });

    setPayments(groups);
  }, []);
  function selectPay(value) {
    const pay = paySelected;
    if (
      pay.length > 0 &&
      pay.filter((item) => item.id === value.id).length === 0
    ) {
      pay.push(value);
    } else if (pay.length === 0) {
      pay.push(value);
    } else if (
      pay.length > 0 &&
      pay.filter((item) => item.id === value.id).length > 0
    ) {
      pay.forEach((item, index) => {
        if (item.id === value.id) {
          pay.splice(index, 1);
        }
      });
    }
    if (pay.length > 2) {
      pay.splice(1, 1);
    }
    setPaySelected(pay);
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
        <Text style={styles.heading2}>Selecione a forma de pagamento</Text>
      </View>
      <View style={styles.section}>
        {payments.map((item) => {
          return (
            <View>
              <View>
                <Text style={styles.heading1}>{item.title}</Text>
              </View>
              <View>
                {item.payments.map((pay) => {
                  return (
                    <TouchableOpacity
                      key={pay.index}
                      onPress={() => selectPay(pay)}
                      style={styles.card}
                    >
                      <View style={styles.image}>
                        <SvgUri uri={BASE_URL + pay.img} />
                      </View>
                      <View>
                        <Text style={styles.text}>{pay.title}</Text>
                      </View>
                    </TouchableOpacity>
                  );
                })}
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.footer}>
        <Button name="Confirmar" buttonColor={styles.icon} />
      </View>
    </View>
  );
};

export default Payment;

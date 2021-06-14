import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
const { BASE_URL } = getEnvVars();
import getEnvVars from "../../../../environment";
import { SvgUri } from "react-native-svg";

import styles from "./Payment.style";
import Button from "../../../components/atoms/Button/Button";
import * as saleActions from "../../../store/actions/saleActions";

const Payment = (props) => {
  console.log(props);
  const company = useSelector((state) => state.company);
  const dispatch = useDispatch();
  console.log(dispatch);
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
            select: false,
          });
        }
      });
    });

    setPayments(groups);
  }, []);
  function selectPay(value, indexGroup, indexItem) {
    const newPayments = [...payments];
    let lastItemSelected;
    let lastGroupSelected;
    let totalSelected = 0;
    let alreadyExists = false;
    payments.forEach((group, indexGroup) => {
      group.payments.forEach((pay, indexPay) => {
        if (pay.select) {
          lastGroupSelected = indexGroup;
          lastItemSelected = indexPay;
          totalSelected += 1;
          if (pay.id === value.id) alreadyExists = true;
        }
      });
    });
    if (totalSelected < 2) {
      if (alreadyExists) {
        newPayments[indexGroup].payments[indexItem].select = false;
        totalSelected -= 1;
      } else {
        newPayments[indexGroup].payments[indexItem].select = true;
        totalSelected += 1;
      }
    } else if (totalSelected === 2) {
      totalSelected -= 1;
      if (alreadyExists) {
        newPayments[indexGroup].payments[indexItem].select = false;
      } else {
        newPayments[indexGroup].payments[indexItem].select = true;
        newPayments[lastGroupSelected].payments[
          lastItemSelected
        ].select = false;
      }
    }
    setPayments(newPayments);
  }
  function handleSendPurchase() {
    const payment_available_id = [];
    payments.forEach((group) => {
      group.payments.forEach((pay) => {
        if (pay.select) {
          payment_available_id.push(pay);
        }
      });
    });
    dispatch(saleActions.AddPay(payment_available_id));
    props.navigation.goBack();
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
        {payments.map((group, indexGroup) => {
          return (
            <View key={indexGroup}>
              <View>
                <Text style={styles.heading1}>{group.title}</Text>
              </View>
              <View style={styles.listPayment}>
                <FlatList
                  data={group.payments}
                  numColumns={2}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item, index }) => {
                    return (
                      <TouchableOpacity
                        key={item.id}
                        onPress={() => selectPay(item, indexGroup, index)}
                        style={item.select ? styles.cardSelected : styles.card}
                      >
                        <View style={styles.image}>
                          <SvgUri uri={BASE_URL + item.img} />
                        </View>
                        <View>
                          <Text
                            style={
                              item.select ? styles.textSelected : styles.text
                            }
                          >
                            {item.title}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </View>
          );
        })}
      </View>
      <View style={styles.footer}>
        <Button
          name="Confirmar"
          buttonColor={styles.icon}
          onPress={() => handleSendPurchase()}
        />
      </View>
    </View>
  );
};

export default Payment;

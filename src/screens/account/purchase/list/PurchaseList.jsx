import React, { useEffect, useContext, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  FlatList,
  SafeAreaView,
} from "react-native";
import styles from "./PurchaseList.style";
import { Feather } from "@expo/vector-icons";
import CardPurchase from "../../../../components/molecules/Purchase/CardPurchase";
import { PURCHASE } from "../../../../services/api";
import AuthContext from "../../../../contexts/index";

const PurchaseList = (props) => {
  const { signed, signOut, user } = useContext(AuthContext);
  const [purchases, setPurchases] = useState([]);
  useEffect(() => {
    async function fetchPurchase() {
      const response = await PURCHASE.getPurchases(user.token);
      const purchases = [];
      response.data.forEach((item) => {
        purchases.push({
          id: item.id,
          quantity: item.itens.length,
          company: item.company,
          status: item.status,
          color: statusPurchase(item.status),
        });
      });
      setPurchases(purchases);
    }
    fetchPurchase();
  }, []);
  function statusPurchase(status) {
    let statusColor;
    switch (status) {
      case "Pendente":
        statusColor = { primary: "#fb8c00", secondary: "#FFFDE7" };
        break;
      case "Confirmado":
        statusColor = { primary: "#9c27b0", secondary: "#F3E5F5" };
        break;
      case "Saiu para Entrega":
        statusColor = { primary: "#03a9f4", secondary: "#E3F2FD" };
        break;
      case "Pronto":
        statusColor = { primary: "#03a9f4", secondary: "#E3F2FD" };
        break;
      case "Entregue":
        statusColor = { primary: "#4caf50", secondary: "#E8F5E9" };
        break;
      case "Cancelado":
        statusColor = { primary: "#f44336", secondary: "#FFEBEE" };
        break;
      case "Finalizado":
        statusColor = { primary: "#8BC34A", secondary: "#E0F2F1" };
        break;
      default:
        break;
    }
    return statusColor;
  }
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              props.navigation.goBack();
            }}
          >
            <Feather name="chevron-left" size={24} color={"black"} />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.titleScreen}>Meus pedidos</Text>
        </View>
      </View>
      <View>
        <SafeAreaView>
          <FlatList
            data={purchases}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => <CardPurchase purchase={item} />}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};
export default PurchaseList;

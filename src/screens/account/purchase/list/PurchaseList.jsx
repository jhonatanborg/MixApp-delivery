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
  const { user } = useContext(AuthContext);
  const [purchasesData, setPurchases] = useState([]);
  const [pendings, setPendings] = useState([]);
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
      setPendings(
        purchases.filter(
          (item) =>
            item.status !== "Entregue" &&
            item.status !== "Cancelado" &&
            item.status !== "Finalizado" &&
            item.status !== "Pronto"
        )
      );
      setPurchases(
        purchases.filter(
          (item) =>
            (item.status === "Pronto") |
            (item.status === "Entregue") |
            (item.status === "Cancelado")
        )
      );
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
      <View style={styles.section}>
        <View style={styles.header}>
          <View>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => {
                props.navigation.goBack();
              }}
            >
              <Feather
                name="chevron-left"
                size={24}
                color={styles.icon.backgroundColor}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.headerTitle}>
            <Text style={styles.titleScreen}>Meus pedidos</Text>
          </View>
        </View>
        {pendings.length > 0 && (
          <View>
            <Text style={styles.subTitle}>Em produção</Text>
            {pendings.map((item) => {
              return (
                <CardPurchase
                  purchase={item}
                  onPress={() =>
                    props.navigation.navigate("PurchaseDetails", item)
                  }
                />
              );
            })}
          </View>
        )}
      </View>
      <View style={styles.list}>
        <SafeAreaView>
          <View style={styles.heading}>
            <Text style={styles.heading1}>Todos os pedidos</Text>
          </View>
          <FlatList
            data={purchasesData}
            keyExtractor={(item) => Number(item.id)}
            renderItem={({ item }) => (
              <CardPurchase
                onPress={() =>
                  props.navigation.navigate("PurchaseDetails", item)
                }
                purchase={item}
              />
            )}
          />
        </SafeAreaView>
      </View>
    </ScrollView>
  );
};
export default PurchaseList;

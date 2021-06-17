import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import { Feather } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";
import { PURCHASE } from "../../../../services/api";
import AuthContext from "../../../../contexts/index";
import styles from "./PurchaseDetails.style";
const PurchaseDetails = (props) => {
  const { signed, signOut, user } = useContext(AuthContext);
  const [purchase, setPurchase] = useState({});
  useEffect(() => {
    async function fetchPurchase() {
      const response = await PURCHASE.getPurchase(
        props.route.params.id,
        user.token
      );
      setPurchase(response.data);
    }
    fetchPurchase();
  }, []);

  function statusPurchase(statePurchase) {
    let status;
    switch (statePurchase) {
      case "Pendente":
        status = {
          title: "Pendente",
          subtitle: "Seu pedido foi enviado até a empresa",
          color: { primary: "#fb8c00", secondary: "#FFFDE7" },
          progress: true,
          progressValue: 0.25,
        };
        break;
      case "Confirmado":
        status = {
          title: "Confirmado",
          subtitle: "Seu pedido está sendo preparado",
          color: { primary: "#9c27b0", secondary: "#F3E5F5" },
          progress: true,
          progressValue: 0.5,
        };

        break;
      case "Saiu para Entrega":
        status = {
          title: "Saiu para Entrega",
          subtitle: "Atenção! seu pedido está indo até você",
          color: { primary: "#03a9f4", secondary: "#E3F2FD" },
          progress: true,
          progressValue: 0.7,
        };
        break;
      case "Pronto":
        status = {
          title: "Pronto",
          subtitle: "Atenção! seu pedido está pronto",
          color: { primary: "#03a9f4", secondary: "#E3F2FD" },
          progress: false,
          progressValue: 1,
        };
        break;
      case "Entregue":
        status = {
          title: "Entregue",
          subtitle: "Seu pedido foi entregue",
          color: { primary: "#4caf50", secondary: "#E8F5E9" },
          progress: false,
          progressValue: 1,
        };
        break;
      case "Cancelado":
        status = {
          title: "Pedido Cancelado",
          subtitle: "Ops! seu pedido foi cancelado pelo restaurante",
          color: { primary: "#f44336", secondary: "#FFEBEE" },
          progress: false,
          progressValue: 0.1,
        };
        break;
      case "Finalizado":
        status = {
          title: "Finalizado",
          subtitle: "Seu pedido foi fechado",
          color: { primary: "#8BC34A", secondary: "#E0F2F1" },
          progress: false,
          progressValue: 1,
        };
        break;
      default:
        status = {
          title: "Finalizado",
          subtitle: "Seu pedido foi fechado",
          color: { primary: "#8BC34A", secondary: "#E0F2F1" },
          progress: false,
          progressValue: 1,
        };
        break;
    }
    return status;
  }

  return (
    <View style={styles.container}>
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
            <Text style={styles.titleScreen}>Pedido #{purchase.id}</Text>
          </View>
        </View>
      </View>
      <View style={styles.content}>
        <ProgressBar
          progress={statusPurchase(purchase.status).progressValue}
          unfilledColor={statusPurchase(purchase.status).color.secondary}
          color={statusPurchase(purchase.status).color.primary}
          borderWidth={0}
          useNativeDriver={true}
          animated={true}
          indeterminate={statusPurchase(purchase.status).progress}
          width={null}
          borderRadius={0}
        />

        <View
          style={[
            styles.chip,
            {
              backgroundColor: statusPurchase(purchase.status).color.secondary,
            },
          ]}
        >
          <Text
            style={[
              styles.textChip,
              { color: statusPurchase(purchase.status).color.primary },
            ]}
          >
            {statusPurchase(purchase.status).title}
          </Text>
          <View>
            <Text style={styles.text}>
              {statusPurchase(purchase.status).subtitle}
            </Text>
          </View>
        </View>
        <View style={styles.list}>
          <View style={styles.section2}>
            <Text style={styles.heading1}>Itens do pedido</Text>
          </View>
          <View style={styles.card}>
            <View style={styles.listItem}>
              <View style={styles.listItemContent}>
                <Text style={styles.text}>1x Caldo 500ML</Text>
                <Text style={styles.price}>R$ 15,00</Text>
              </View>
              <View style={styles.listItemSub}>
                <View style={styles.listItemContent}>
                  <Text style={styles.text}> + Pão</Text>
                  <Text style={styles.price2}>R$ 2,00</Text>
                </View>
              </View>
            </View>
            <View style={styles.listItem}>
              <View style={styles.listItemContent}>
                <Text style={styles.text}>1x Caldo 500ML</Text>
                <Text style={styles.price}>R$ 15,00</Text>
              </View>
              <View style={styles.listItemSub}>
                <View style={styles.listItemContent}>
                  <Text style={styles.text}> + Pão</Text>
                  <Text style={styles.price2}>R$ 2,00</Text>
                </View>
              </View>
            </View>
            <View style={styles.listItem}>
              <View style={styles.listItemContent}>
                <Text style={styles.text}>1x Caldo 500ML</Text>
                <Text style={styles.price}>R$ 15,00</Text>
              </View>
              <View style={styles.listItemSub}>
                <View style={styles.listItemContent}>
                  <Text style={styles.text}> + Pão</Text>
                  <Text style={styles.price2}>R$ 2,00</Text>
                </View>
              </View>
            </View>
            <View style={styles.listItem}>
              <View style={styles.listItemContent}>
                <Text style={styles.text}>1x Caldo 500ML</Text>
                <Text style={styles.price}>R$ 15,00</Text>
              </View>
              <View style={styles.listItemSub}>
                <View style={styles.listItemContent}>
                  <Text style={styles.text}> + Pão</Text>
                  <Text style={styles.price2}>R$ 2,00</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.section2}>
            <View>
              <Text style={styles.heading1}>Endereço</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.content2}>
                <Text numberOfLines={2} style={styles.text}>
                  Rua amendoeiras, 49 - Setor Comercial
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.section2}>
            <View>
              <Text style={styles.heading1}>Resumo</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.content2}>
                <Text numberOfLines={2} style={styles.text}>
                  Subtotal
                </Text>
                <View>
                  <Text numberOfLines={2} style={styles.text}>
                    R$ 15,00
                  </Text>
                </View>
              </View>
              <View style={styles.content2}>
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
              <View style={styles.content2}>
                <Text numberOfLines={2} style={styles.heading1}>
                  Total
                </Text>
                <View>
                  <Text numberOfLines={2} style={styles.price}>
                    R$ 20,00
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
export default PurchaseDetails;

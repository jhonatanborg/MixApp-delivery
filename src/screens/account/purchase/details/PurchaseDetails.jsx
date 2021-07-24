import React, { useContext, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import ProgressBar from "react-native-progress/Bar";
import { PURCHASE } from "../../../../services/api";
import AuthContext from "../../../../contexts/index";
import { convertMoney } from "../../../../utils/index";
import styles from "./PurchaseDetails.style";
const PurchaseDetails = (props) => {
  const { signed, signOut, user } = useContext(AuthContext);
  const [purchase, setPurchase] = useState(props.route.params);
  const [address, setAddress] = useState(props.route.params.address);
  const [itemsPurchase, setItemsPurchase] = useState(
    groupSubcategories(props.route.params.itens)
  );
  useEffect(() => {
    async function fetchPurchase() {
      const response = await PURCHASE.getPurchase(purchase.id, user.token);
      setItemsPurchase(groupSubcategories(response.data.itens));
      setPurchase(response.data);
    }
    const timeout = setTimeout(() => {
      fetchPurchase();
    }, 20000);

    return () => clearTimeout(timeout);
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
  function groupSubcategories(items) {
    const childItems = [];
    items.map((item) => {
      childItems.push(...item.childItem);
    });

    const subcategories = [];

    childItems.map((item) => {
      item.product.subcategory.sale_item_id = item.parent_sale_item;
      if (
        !subcategories.find(
          (item2) =>
            item.product.subcategory.id === item2.id &&
            item.parent_sale_item === item2.sale_item_id
        )
      ) {
        subcategories.push(item.product.subcategory);
      }
    });
    subcategories.map((sub) => {
      sub.products = [];
      childItems.map((item) => {
        if (
          item.product.subcategory.id === sub.id &&
          sub.sale_item_id === item.parent_sale_item
        ) {
          item.product.qtd = item.product_qtd;
          sub.products.push(item.product);
        }
      });
    });
    return subcategories;
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
        <ScrollView style={styles.list}>
          <View style={styles.section2}>
            <Text style={styles.heading1}>Itens do pedido</Text>
          </View>
          {console.log(itemsPurchase)}
          <View style={styles.card}>
            {purchase &&
              purchase.itens.map((item) => {
                return (
                  <View style={styles.listItem}>
                    <View style={styles.listItemContent}>
                      <Text style={styles.text2}>{item.product.name}</Text>
                      <Text style={styles.price}>
                        {convertMoney(item.subtotal)}
                      </Text>
                    </View>
                    {item.childItem.length > 0 &&
                      itemsPurchase.map((subcategory) => {
                        return (
                          item.id === subcategory.sale_item_id && (
                            <View>
                              <View>
                                <Text style={styles.heading1}>
                                  {subcategory.name}
                                </Text>
                              </View>
                              {subcategory.products.map((child) => {
                                return (
                                  <View style={styles.listItemSub}>
                                    <View style={styles.listItemContent}>
                                      <Text
                                        style={styles.text}
                                      >{` ${child.qtd}x ${child.name}`}</Text>
                                      <Text style={styles.price2}>
                                        {convertMoney(
                                          parseFloat(
                                            child.sale_value * child.qtd
                                          ).toFixed(2)
                                        )}
                                      </Text>
                                    </View>
                                  </View>
                                );
                              })}
                            </View>
                          )
                        );
                      })}
                  </View>
                );
              })}
          </View>
          <View style={styles.section2}>
            <View>
              <Text style={styles.heading1}>Endereço</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.content2}>
                <Text numberOfLines={2} style={styles.text}>
                  {address && address.street
                    ? `${address.street},${address.number} - ${address.district} `
                    : "Retirada"}
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
                    {convertMoney(purchase.subtotal)}
                  </Text>
                </View>
              </View>
              <View style={styles.content2}>
                <Text numberOfLines={2} style={styles.text}>
                  Taxa de entrega
                </Text>
                <View>
                  <Text numberOfLines={2} style={styles.text}>
                    {convertMoney(purchase.delivery_value)}
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
                    {convertMoney(purchase.total)}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
export default PurchaseDetails;

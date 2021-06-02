import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from "react-native";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import styles from "./Confirmation.style";
import Button from "../../../components/atoms/Button/Button";

const ConfirmationSale = (props) => {
  const address = useSelector((state) => state.location.address);
  console.log(props);
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

            <Feather name="edit" size={24} color={styles.btnIconColor.color} />
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardHeader}>
            <Text style={styles.cardTitle}>Forma de pagamento:</Text>
          </View>
          <View style={styles.content}>
            <Text numberOfLines={2} style={styles.text}>
              Dinheiro
            </Text>
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
        <Button name="Fazer Pedido" buttonColor={styles.icon} />
      </View>
    </View>
  );
};

export default ConfirmationSale;

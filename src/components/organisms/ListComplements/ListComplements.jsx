import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../ListComplements/ListComplements.style";
import { AntDesign } from "@expo/vector-icons";
import { convertMoney } from "../../../utils";

const ListComplements = (props) =>
  props.complements.map((category, index) => (
    <View style={styles.listContainer} key={index}>
      <View style={styles.headerList}>
        <View>
          <Text style={styles.headerItemTitle}>
            {category.name} limite {category.limit}
          </Text>
        </View>
        <View style={styles.headerItemAction}>
          <Text style={styles.headerItemActionText}>Obrigatorio</Text>
        </View>
      </View>
      {category.products.map((item, index) => {
        return (
          <View key={index} style={styles.listItem}>
            <View>
              <Text style={styles.listItemText}>{item.name}</Text>
              <Text style={styles.listItemSubtitle}>
                {convertMoney(item.sale_value)}
              </Text>
            </View>
            <View style={styles.listItemActions}>
              {item.qtd > 0 && (
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <TouchableOpacity
                    onPress={() => {
                      props.removeComplements(item, category.name);
                    }}
                    style={styles.listItemActionButton}
                  >
                    <AntDesign name="minus" size={28} color="#5530E5" />
                  </TouchableOpacity>
                  <View>
                    <Text style={styles.quantity}>{item.qtd}</Text>
                  </View>
                </View>
              )}
              <View>
                <TouchableOpacity
                  onPress={() => {
                    props.onPress(item, category.name, category.limit);
                  }}
                  style={styles.listItemActionButton}
                >
                  <AntDesign name="plus" size={24} color="#5530E5" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  ));

export default ListComplements;

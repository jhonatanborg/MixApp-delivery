import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "./Profile.style";
import AuthContext from "../../../contexts/index";
import { Feather } from "@expo/vector-icons";

import Button from "../../../components/atoms/Button/Button";
const Profile = (props) => {
  console.log(props);
  const { signed, signOut, user } = useContext(AuthContext);
  async function handleSignOut() {
    await signOut();
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.titleScreen}>Minha conta</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardTitle}>Perfil:</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.text}> {user.name}</Text>
          <TouchableOpacity>
            <Feather name="edit" size={24} color={styles.btnIconColor.color} />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity>
        <View style={styles.card}>
          <View style={styles.content}>
            <Text style={styles.text}>Meus endereços</Text>
            <Feather
              name="chevron-right"
              size={24}
              color={styles.btnIconColor.color}
            />
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("PurchaseList")}
      >
        <View style={styles.card}>
          <View style={styles.content}>
            <Text style={styles.text}>Meus Pedidos</Text>
            <Feather
              name="chevron-right"
              size={24}
              color={styles.btnIconColor.color}
            />
          </View>
        </View>
      </TouchableOpacity>
      <Button name="Sair" buttonColor={styles.button} onPress={handleSignOut} />
    </View>
  );
};

export default Profile;

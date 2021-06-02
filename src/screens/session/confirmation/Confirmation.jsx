import React, { useState } from "react";
import { View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import styles from "./Confirmation.styles";
import image from "../../../assets/images/code.png";
import Button from "../../../components/atoms/Button/Button";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { AUTH } from "../../../services/api";

const Confirmation = (props) => {
  const [code, setCode] = useState(null);

  async function fetchCode() {
    const response = await AUTH.codeVerify(code);
  }
  const phone = props.route.params;
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            style={styles.btn}
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons name="keyboard-arrow-left" size={28} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.headerTitle}>
          <Text style={styles.titleScreen}>Verificação de identidade</Text>
        </View>
      </View>
      <View style={styles.section}>
        <Image source={image} style={styles.icon} />
        <Text style={styles.heading1}>Confirmação</Text>
        <Text style={styles.text}>
          Enviamos um código de verificação para esse telefone:
          <Text style={styles.textBold}>+55 {phone} </Text>
        </Text>
      </View>
      <View style={styles.footer}>
        <View style={styles.formGroup}>
          <Text style={styles.label}>Digite o código abaixo:</Text>
          <TextInput
            onChangeText={(value) => setCode(value)}
            style={styles.input}
          />
        </View>
        <TouchableOpacity style={styles.buttonSecondary}>
          <Text style={styles.btnText}>REENVIAR CÓDIGO</Text>
        </TouchableOpacity>
        <Button
          name="Confirmar"
          onPress={fetchCode}
          buttonColor={styles.button}
        />
      </View>
    </View>
  );
};

export default Confirmation;

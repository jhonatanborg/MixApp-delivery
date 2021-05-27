import React, { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Platform,
  Keyboard,
} from "react-native";

import AuthContext from "../../../contexts/index";
import Button from "../../../components/atoms/Button/Button";
import { AUTH } from "../../../services/api";

import styles from "./Login.styles";
import logo from "../../../assets/images/logo-app.png";
export default function SignIn({ navigation }) {
  const [login, setLogin] = useState("jhonatanborgesdj@gmail.com");
  const [password, setPassword] = useState("001001");
  const { signed, signIn } = useContext(AuthContext);
  async function handleSignIn() {
    await signIn(login, password);
  }
  function register() {
    navigation.navigate("RegisterScreen");
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Image source={logo} style={styles.tinyLogo}></Image>
          <Text style={styles.title}>Mix - delivery</Text>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.description}>
            Faça login ou crie uma conta no mix para começar {(login, password)}
          </Text>
        </View>
        <View style={styles.form}>
          <View style={styles.formGroup}>
            <Text style={styles.label}>E-mail</Text>
            <TextInput
              style={styles.input}
              defaultValue="jhonatanborgesdj@gmail.com"
              onChangeText={(value) => setLogin(value)}
            />
          </View>
          <View style={styles.formGroup}>
            <Text style={styles.label}>Senha</Text>
            <TextInput
              style={styles.input}
              defaultValue="001001"
              onChangeText={(value) => setPassword(value)}
            />
          </View>

          <Button
            name="Login"
            buttonColor={styles.buttonLogin}
            onPress={handleSignIn}
          />
          <View style={styles.footer}>
            <Text style={styles.description}>
              É a primeira vez que usa o Mix?
            </Text>
            <TouchableOpacity onPress={register}>
              <Text style={styles.linkText}>Criar conta</Text>
            </TouchableOpacity>
          </View>
          {/* <Button
            name="Continuar com o Facebook"
            icon="facebook"
            buttonColor={styles.buttonLoginFacebook}
          /> */}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

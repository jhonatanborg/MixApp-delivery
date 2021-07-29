import React, { useContext, useState } from 'react';
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
} from 'react-native';

import AuthContext from '../../../contexts/index';
import Button from '../../../components/atoms/Button/Button';
import { AUTH } from '../../../services/api';
import InputText from '../../../components/atoms/InputText/InputText';
import styles from './Login.styles';
import logo from '../../../assets/images/logo-app.png';
import { useLoginFormState } from '../../../hooks/useForm';
export default function SignIn({ navigation }) {
  const { email, password, submit } = useLoginFormState();

  const { signed, signIn } = useContext(AuthContext);
  async function handleSignIn() {
    await signIn(email, password);
  }
  function register() {
    navigation.navigate('RegisterScreen');
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <View style={styles.header}>
        <View style={styles.headerLogo}>
          <Image source={logo} style={styles.tinyLogo}></Image>
          <Text style={styles.title}>Mix - delivery</Text>
        </View>
        <View style={styles.headerContent}>
          <Text style={styles.description}>
            Faça login ou crie uma conta no mix para começar
          </Text>
        </View>
      </View>
      <View style={styles.form}>
        <InputText
          numberOfLines={1}
          multiline={false}
          placeholder="E-mail"
          onChangeText={(value) => email.set(value)}
          error={submit.value && !email.valid}
        />
        <InputText
          numberOfLines={1}
          multiline={false}
          placeholder="Senha"
          onChangeText={(value) => password.set(value)}
          secureTextEntry
          error={submit.value && !password.valid}
        />

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
    </KeyboardAvoidingView>
  );
}

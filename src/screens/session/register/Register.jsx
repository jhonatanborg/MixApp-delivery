import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
} from 'react-native';

import InputPhone from '../../../components/atoms/InputPhone/InputPhone';

import Button from '../../../components/atoms/Button/Button';
import { AUTH } from '../../../services/api';
import styles from './Register.styles';
import logo from '../../../assets/images/logo-app.png';
import InputText from '../../../components/atoms/InputText/InputText';
import { useRegisterFormState } from '../../../hooks/useForm';
export default function SignIn({ navigation }) {
  const { email, name, phone, password, submit } = useRegisterFormState();

  function signIn() {
    navigation.navigate('LoginScreen');
  }
  async function userRegister(data) {
    if ((name, phone, password)) {
      let user = {
        name,
        login: phone,
        password,
      };

      const response = await AUTH.signUp(user);
      if (response.data) {
        navigation.navigate('Confirmation', phone);
      }
    }
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : null}
    >
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
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
                placeholder="Nome completo"
                onChangeText={(value) => name.set(value)}
                error={submit.value && !name.valid}
              />
              <InputText
                numberOfLines={1}
                multiline={false}
                placeholder="Telefone"
                onChangeText={(value) => phone.set(value)}
                secureTextEntry
                error={submit.value && !phone.valid}
              />
              <InputPhone
                numberOfLines={1}
                multiline={false}
                placeholder="Celular"
                onChangeText={(value) => phone.set(value)}
                error={submit.value && !phone.valid}
                phone={phone}
              />
              <InputText
                numberOfLines={1}
                multiline={false}
                placeholder="Senha"
                onChangeText={(value) => password.set(value)}
                secureTextEntry
                error={submit.value && !password.valid}
              />
              {/* <View style={styles.formGroup}>
                <Text style={styles.label}>Nome Completo</Text>
                <TextInput
                  onChangeText={(value) => setName(value)}
                  style={styles.input}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Telefone</Text>
                <TextInputMask
                  type={'cel-phone'}
                  options={{
                    maskType: 'BRL',
                    withDDD: true,
                    dddMask: '(99) ',
                  }}
                  value={phone}
                  onChangeText={(value) => setPhone(value)}
                  style={styles.input}
                />
              </View>
              <View style={styles.formGroup}>
                <Text style={styles.label}>Senha</Text>
                <TextInput
                  onChangeText={(value) => setPassword(value)}
                  style={styles.input}
                />
              </View> */}
              <Button
                name="Criar Conta"
                onPress={userRegister}
                buttonColor={styles.buttonLogin}
              />
              <View style={styles.footer}>
                <Text style={styles.description}>Já possui uma conta?</Text>
                <TouchableOpacity onPress={signIn}>
                  <Text style={styles.linkText}>Fazer login</Text>
                </TouchableOpacity>
              </View>
              {/* <Button
                name="Continuar com o Facebook"
                icon="facebook"
                buttonColor={styles.buttonLoginFacebook}
              /> */}
            </View>
          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

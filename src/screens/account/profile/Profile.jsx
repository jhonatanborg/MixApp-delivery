import React, { useContext } from "react";
import { View, Text } from "react-native";
import styles from "./Profile.style";
import AuthContext from "../../../contexts/index";

import Button from "../../../components/atoms/Button/Button";
const Profile = (props) => {
  const { signed, signOut, user } = useContext(AuthContext);
  async function handleSignOut() {
    await signOut();
  }
  return (
    <View style={styles.container}>
      <Text>Perfil : {user.name}</Text>
      <Button name="Sair" buttonColor={styles.button} onPress={handleSignOut} />
    </View>
  );
};

export default Profile;

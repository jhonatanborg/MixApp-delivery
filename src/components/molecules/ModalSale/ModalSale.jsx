import React from "react";
import { Modal, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Button from "../../../components/atoms/Button/Button";
import styles from "./ModalSale.style";
const ModalSale = (props) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={props.modalVisible}
        onRequestClose={() => props.closeModal()}
      >
        <View style={[styles.container, styles.modalBackgroundStyle]}>
          <View style={styles.innerContainerTransparentStyle}>
            <Text style={styles.heading1}>
              Você só pode adicionar itens de um restaurante por vez!
            </Text>
            <Text style={styles.text}>
              Deseja esvaziar a sacola e adicionar este item?
            </Text>
            <Button
              name="Esvaziar sacola e adicionar"
              buttonColor={styles.button}
              onPress={() => props.resetSale()}
            />
            <TouchableOpacity>
              <Text style={styles.btnText}>Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
export default ModalSale;

import React from 'react';
import { View, TextInput } from 'react-native';
import styles from './InputText.style';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const InputText = ({ placeholder, numberOfLines, multiline }) => (
  <View style={styles.sectionInput}>
    <TextInput
      style={styles.input}
      underlineColorAndroid="transparent"
      placeholder={placeholder}
      placeholderTextColor="grey"
      numberOfLines={numberOfLines}
      multiline={multiline}
    />
  </View>
);
export default InputText;

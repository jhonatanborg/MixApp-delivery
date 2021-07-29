import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import InputMask from 'react-input-mask';

import styles from './InputPhone.style';
export default function InputPhone({
  placeholder,
  numberOfLines,
  multiline,
  onChangeText,
  secureTextEntry,
  error,
  phone,
}) {
  const [inputRef, setInputRef] = useState(useRef(null));
  const [cell, setCell] = useState('');
  function setRef(ref) {
    setInputRef(ref);
    console.log('aqui', inputRef);
  }
  function onChange(value) {
    setCell(value);
    onChangeText(value);
  }
  return (
    <TouchableOpacity
      style={styles.sectionInput}
      onPress={() => {
        inputRef._inputElement.focus();
      }}
    >
      <Text style={styles.text}>{placeholder}</Text>
      <View style={styles.row}>
        <TextInputMask
          ref={(ref) => setRef(ref)}
          type={'cel-phone'}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(**) ',
            obfuscated: true,
          }}
          value={cell}
          onChangeText={(value) => onChange(value)}
          style={styles.input}
        />
        {error && (
          <View style={styles.error}>
            <Text style={styles.errorText}>X</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
}

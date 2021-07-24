import React from 'react';

import { View, TouchableOpacity, ImageBackground, Text } from 'react-native';
import getEnvVars from '../../../../environment';

const { BASE_URL } = getEnvVars();

import styles from './HeaderProduct.style';
import { AntDesign } from '@expo/vector-icons';
import Icon from '@expo/vector-icons/Entypo';
import { convertMoney } from '../../../utils';

const HeaderProduct = (props) => {
  return (
    <>
      <ImageBackground
        style={styles.image}
        source={{ uri: `${BASE_URL + props.img}` }}
      >
        <View style={styles.overlay}>
          <View style={styles.headerTop}>
            <TouchableOpacity style={styles.backButton} onPress={props.onPress}>
              <AntDesign name="left" size={24} color="#FFFFFF" />
            </TouchableOpacity>
            <View style={{ width: '80%', alignItems: 'center' }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  alignSelf: 'center',
                }}
              ></View>
            </View>
            <View>
              <Icon name="heart" color="#f9dd7a" size={30} />
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.details}>
        <View style={styles.content}>
          <Text numberOfLines={2} style={styles.title}>
            {props.name}
          </Text>
          <Text style={styles.price}>{convertMoney(props.sale_value)}</Text>
        </View>
        <View>
          <Text style={styles.text}>{props.description}</Text>
        </View>
      </View>
    </>
  );
};
export default HeaderProduct;

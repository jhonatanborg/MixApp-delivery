import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Image,
  SafeAreaView,
  FlatList,
} from 'react-native';
import { Feather, FontAwesome } from '@expo/vector-icons';
import CardProduct from '../../../components/molecules/Product/CardProduct';
import { COMPANY } from '../../../services/api';
import getEnvVars from '../../../../environment';

const { BASE_URL } = getEnvVars();
import styles from './Shop.style';
import ListProducts from '../../../components/organisms/ListProducts/ListProducts';

const image = {
  uri: 'https://images.pexels.com/photos/4109132/pexels-photo-4109132.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
};
const logo = {
  uri: 'https://i0.wp.com/gkpb.com.br/wp-content/uploads/2021/01/novo-logo-burger-king-2021.png',
};

const Shop = (props) => {
  const navigation = useNavigation();
  const [company, setCompany] = useState({});
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchCompany() {
      const response = await COMPANY.getCompany(props.route.params.id);
      setProducts(response.data.prodCategories);
      setCompany(response.data);
    }
    fetchCompany();
  }, []);

  return (
    <>
      <ScrollView style={styles.container}>
        <ImageBackground
          source={{ uri: `${BASE_URL + company.capa}` }}
          style={styles.image}
        >
          <View style={styles.overlay}>
            <View style={styles.headerTop}>
              <TouchableOpacity
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <Feather name="chevron-left" size={24} color="white" />
              </TouchableOpacity>
              <Feather name="star" size={24} color="white" />
            </View>
          </View>
        </ImageBackground>
        <View style={styles.section}>
          <View>
            <Image
              style={styles.tinyLogo}
              source={{ uri: `${BASE_URL + company.logo}` }}
            ></Image>
          </View>
          <View style={styles.sectionItem}>
            <Text style={styles.title}>{company.name}</Text>
            <View style={styles.content}>
              <View style={styles.item}>
                <Feather name="map-pin" size={18} color={styles.icon.color} />
                <Text style={styles.text}>3.2 km</Text>
              </View>
              <View style={styles.item}>
                <Feather name="clock" size={18} color={styles.icon.color} />
                <Text style={styles.text}>50min - 60min</Text>
              </View>
            </View>
          </View>
        </View>
        <View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollIndicatorInsets={false}
            style={styles.menu}
          >
            <TouchableOpacity style={styles.menuItemSelected}>
              <Text style={styles.menuItemTextSelected}>Inicio</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Lanches</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Pizzas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Hamburgues</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Sobremesas</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem}>
              <Text style={styles.menuItemText}>Bebidas</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        <SafeAreaView>
          {products.map((item) => {
            return (
              <ListProducts
                groupProducts={item}
                company={{
                  id: company.id,
                  name: company.name,
                  payment: company.payments,
                }}
              />
            );
          })}
        </SafeAreaView>
      </ScrollView>
    </>
  );
};

export default Shop;

import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import AuthContext from "../../contexts/index";
import { MaterialIcons } from "@expo/vector-icons";
import profile from "../../assets/images/profile.jpg";
import Categorie from "../../components/molecules/Categorie/Categorie";
import CardCompany from "../../components/molecules/Company/CardCompany";

import styles from "./styles";
import { COMPANY } from "../../services/api";
import logo from "../../assets/images/logo-app.png";

export default function Home({ navigation }) {
  const { signed, user, signOut } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    async function fetchCategories() {
      const response = await COMPANY.getCategories();
      setCategories(response.data);
    }
    async function fetchCompanies() {
      const response = await COMPANY.getCompanies();
      setCompanies(response.data);
    }
    fetchCompanies();
    fetchCategories();
  }, []);
  function handleSignout() {
    signOut();
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.header}>
          <View style={styles.headerAddress}>
            <View>
              <Image source={logo} style={styles.tinyLogo}></Image>
            </View>
            <View>
              <Text style={styles.heading}>Entregar em:</Text>
              <View style={styles.content}>
                <Text style={styles.text}>Rua das Gérberas, 722</Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color={styles.icon.color}
                />
              </View>
            </View>
          </View>
          <View>
            <Image style={styles.image} source={profile}></Image>
          </View>
        </View>
      </View>

      {/* <View style={styles.section}>
        <InputText />
      </View> */}
      <SafeAreaView>
        <View style={{ paddingTop: 15 }}>
          <Text style={styles.heading2}>Categorias</Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={categories}
          horizontal={true}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index, separators }) => (
            <Categorie key={index.toString()} categorie={item}></Categorie>
          )}
        />
      </SafeAreaView>
      <View>
        <View style={{ paddingTop: 15 }}>
          <Text style={styles.heading2}>Lojas proximas</Text>
        </View>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={companies}
          horizontal={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index, separators }) => (
            <CardCompany
              onPress={() => navigation.navigate("Shop", item)}
              company={item}
            />
          )}
        />
      </View>
    </ScrollView>
  );
}

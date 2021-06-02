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
import { COMPANY, ADDRESS } from "../../services/api";
import logo from "../../assets/images/logo-app.png";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Location from "expo-location";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as addressActions from "../../store/actions/addressActions";
const Home = (props) => {
  const { signed, user, signOut } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [address, setAddress] = useState(null);

  async function getCoordsMobile() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(location);
    const response = await ADDRESS.getAddress({
      lat: location.coords.latitude,
      long: location.coords.longitude,
    });
    setAddress(response.data);
    props.setCoords(location.coords);
    props.setAddress(response.data);
  }
  useEffect(() => {
    async function fetchCategories() {
      const response = await COMPANY.getCategories();
      setCategories(response.data);
    }
    async function fetchCompanies() {
      const response = await COMPANY.getCompanies();
      setCompanies(response.data);
    }
    if (!props.location) {
      getCoordsMobile();
    }
    setAddress(props.location.address);
    fetchCompanies();
    fetchCategories();
  }, []);

  function handleSignout() {
    signOut();
  }
  console.log(props);
  return (
    <ScrollView style={styles.container}>
      <View style={styles.section}>
        <View style={styles.header}>
          <View style={styles.flexItemLogo}>
            <Image source={logo} style={styles.tinyLogo}></Image>
          </View>
          <View style={styles.headerTitle}>
            <Text style={styles.heading}>Entregar em:</Text>
            <TouchableOpacity onPress={() => props.navigation.navigate("Map")}>
              <View style={styles.content}>
                <Text style={styles.text} numberOfLines={2}>
                  {address && address.street
                    ? `${address.street},${address.number} - ${address.district}`
                    : "Buscar endereço"}
                </Text>
                <MaterialIcons
                  name="keyboard-arrow-down"
                  size={24}
                  color={styles.icon.color}
                />
              </View>
            </TouchableOpacity>
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
              onPress={() => props.navigation.navigate("Shop", item)}
              company={item}
            />
          )}
        />
      </View>
    </ScrollView>
  );
};
const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(addressActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Home);

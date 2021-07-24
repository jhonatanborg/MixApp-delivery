import React, { useState, useEffect } from "react";
import { View, Image, SafeAreaView, Text } from "react-native";
import MapView from "react-native-maps";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as addressActions from "../../../store/actions/addressActions";
import styles from "./Map.style";
import marker from "../../../assets/images/logo-app.png";
import { ADDRESS } from "../../../services/api";
import Button from "../../../components/atoms/Button/Button";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const latitudeDelta = 0.01;
const longitudeDelta = 0.01;
const Map = (props) => {
  async function fetchAddress(coords) {
    const response = await ADDRESS.getAddress({
      lat: coords.latitude,
      long: coords.longitude,
    });
    setAddress(response.data);
    setRegion(coords);
    props.setAddress(response.data);
  }
  const [address, setAddress] = useState(props.address);
  const [region, setRegion] = useState({
    latitudeDelta,
    longitudeDelta,
    latitude: props.location.coords.latitude || -55.505736116319895,
    longitude: props.location.coords.longitude || 0.009999610483646393,
  });
  function routeScreen() {
    if (props.route.params) {
      if (props.route.params.confirmation) {
        props.navigation.navigate("ConfirmationSale");
      }
    } else {
      props.navigation.goBack();
    }
  }
  return (
    <View style={styles.container}>
      <MapView
        initialRegion={region}
        onRegionChangeComplete={(region) => fetchAddress(region)}
        style={styles.map}
      ></MapView>
      <View style={styles.markerFixed}>
        <Image style={styles.marker} source={marker} />
      </View>
      <SafeAreaView style={styles.footer}>
        <Text style={styles.heading1}>Endereço para entrega:</Text>
        <View style={styles.content}>
          <View >
            <MaterialCommunityIcons
            name="map-marker-outline"
            size={28}
            color={styles.icon.backgroundColor}
          />
          </View>
          <Text numberOfLines={3} style={styles.text}>
            {address && address.street
              ? `${address.street},${address.number} - ${address.district}`
              : "Buscar endereço"}
          </Text>
        </View>

        <Button
          name="Confirmar endereço"
          buttonColor={styles.button}
          onPress={routeScreen}
        />
      </SafeAreaView>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    location: state.location,
  };
};
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(addressActions, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Map);

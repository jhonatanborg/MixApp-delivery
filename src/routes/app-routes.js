import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { StyleSheet } from "react-native";
import { Colors } from "../styles";
import HomeScreen from "../screens/home/index";
import Sale from "../screens/sale/products/ListProducts";
import Account from "../screens/account/profile/Profile";
import Search from "../screens/search/Search";
import Shop from "../screens/company/shop/Shop";
import Product from "../screens/company/product/Product";
const Tab = createMaterialBottomTabNavigator();

const Stack = createStackNavigator();

const TabsScreens = () => (
  <Tab.Navigator activeColor={Colors.THEMECOLOR} barStyle={styles.bar}>
    <Tab.Screen
      name="Home"
      options={{
        tabBarLabel: "Inicio",
        tabBarIcon: ({ color }) => (
          <Feather name="home" size={24} color={color} size={26} />
        ),
      }}
      component={HomeScreen}
    />
    <Tab.Screen
      name="Search"
      options={{
        tabBarLabel: "Buscar",
        tabBarIcon: ({ color }) => (
          <Feather name="search" size={24} color={color} size={26} />
        ),
      }}
      component={Search}
    />
    <Tab.Screen
      name="Sale"
      options={{
        tabBarLabel: "Sacola",
        tabBarIcon: ({ color }) => (
          <Feather name="shopping-bag" color={color} size={26} />
        ),
      }}
      component={Sale}
    />
    <Tab.Screen
      name="Account"
      options={{
        tabBarLabel: "Conta",
        tabBarIcon: ({ color }) => (
          <Feather name="user" color={color} size={26} />
        ),
      }}
      component={Account}
    />
  </Tab.Navigator>
);
const AppRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="TabsScreens"
        component={TabsScreens}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Shop"
        component={Shop}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Product"
        component={Product}
      />
    </Stack.Navigator>
  );
};
const styles = StyleSheet.create({
  bar: {
    borderRadius: 8,
    backgroundColor: Colors.WHITE,
    paddingVertical: 10,
  },
});
export { AppRoutes };

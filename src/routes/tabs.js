import * as React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/home/index";
import Shop from "../screens/company/shop/Shop";
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
    </Tab.Navigator>
  );
}

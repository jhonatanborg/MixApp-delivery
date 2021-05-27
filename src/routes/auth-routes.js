import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/session/login/Login";
import RegisterScreen from "../screens/session/register/Register";

const AuthStack = createStackNavigator();

const AuthRoutes = () => (
  <AuthStack.Navigator>
    <AuthStack.Screen
      options={{ headerMode: "none", headerShown: false }}
      name="LoginScreen"
      component={LoginScreen}
    />
    <AuthStack.Screen
      options={{ headerMode: "none", headerShown: false }}
      name="RegisterScreen"
      component={RegisterScreen}
    />
  </AuthStack.Navigator>
);

export default AuthRoutes;

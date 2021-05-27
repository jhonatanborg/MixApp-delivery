import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AUTH } from "../services/api";

const AuthContext = createContext({});
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await AsyncStorage.getItem("@MIXAPP:user");
      const storageToken = await AsyncStorage.getItem("@MIXAPP:token");

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      } else if (!storageUser && !storageToken) {
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  async function signIn(login, password) {
    const response = await AUTH.Signin(login, password);
    setUser(response.data);
    console.log(response);
    await AsyncStorage.setItem("@MIXAPP:user", JSON.stringify(response.data));
    await AsyncStorage.setItem("@MIXAPP:token", response.token);
  }

  function signOut() {
    AsyncStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        signIn: signIn,
        signOut: signOut,
        loading: loading,
        user: user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}
export default AuthContext;

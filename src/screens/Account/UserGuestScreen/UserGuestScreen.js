import React from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import { Text, Button, Image } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { screen } from "../../../utils";
import { styles } from "./UserGuestScreen.styles";

export function UserGuestScreen() {
  const navigation = useNavigation();
  const goToLogin = () => {
    navigation.navigate(screen.account.login);
  };

  const goToRegister = () => {
    navigation.navigate(screen.account.register);
  };
  return (
    <ScrollView centerContent={true} style={styles.content}>
      <Image
        source={require("../../../../assets/img/carpool-app-mobile.jpg")}
        style={styles.image}
      ></Image>
      <Text style={styles.title}>Registrate y comenza a viajar</Text>
      <Text style={styles.description}>
        ¡Nunca ha sido tan fácil encontrar compañeros de viaje! Nuestra
        plataforma te conecta con pasajeros y conductores confiables. Reduce tu
        huella de carbono y ahorra dinero mientras haces nuevos amigos.
      </Text>

      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, styles.registerLogin]}
          onPress={goToRegister}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={goToLogin}
        >
          <Text style={styles.buttonTextLogin}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

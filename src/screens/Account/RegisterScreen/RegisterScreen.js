import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Image } from "react-native-elements";
import { RegisterForm } from "../../../components/Auth";
import { styles } from "./RegisterScreen.styles";

export function RegisterScreen() {
  return (
    <KeyboardAwareScrollView
      enableOnAndroid={true}
      extraHeight={75}
      extraScrollHeight={50}
    >
      <Image
        source={require("../../../../assets/img/carpool.png")}
        style={styles.image}
      />
      <View style={styles.content}>
        <RegisterForm />
      </View>
    </KeyboardAwareScrollView>
  );
}

import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import { LoadingModal } from "../../../components";
import { styles } from "./UserLoggedScreen.styles";
import { InfoUser, AccountOptions } from "../../../components/Account";

export function UserLoggedScreen() {
  const [loading, setLoading] = useState(false);
  const [loadingText, setLoadingText] = useState("");

  return (
    <View style={styles.container}>
      <InfoUser setLoading={setLoading} setLoadingText={setLoadingText} />
      <AccountOptions />
      <LoadingModal show={loading} text={loadingText} />
    </View>
  );
}

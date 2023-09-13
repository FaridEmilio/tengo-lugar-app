import React from "react";
import { View } from "react-native";
import { InfoForm } from "../../../components/Viajes/AddViaje";
import { Button, Image } from "react-native-elements";
import { db } from "../../../utils";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid";
import { doc, setDoc } from "firebase/firestore";
import { ScrollView } from "react-native-virtualized-view";
import { useNavigation } from "@react-navigation/native";
import { initialValues, validationSchema } from "./AddViajeScreen.data";
import { styles } from "./AddViajeScreen.styles";

export function AddViajeScreen() {
  const navigation = useNavigation();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    //Cuando queremos modificar datos de una variable, NUNCA hay que utilizar lo que te llega por parametro
    onSubmit: async (formValue) => {
      try {
        const newData = formValue;
        newData.id = uuid();
        newData.createdAt = new Date();

        // Lo que hacemos aca es primero obtener la base de datos, lo que queremos hacer y en la segunda linea lo guardamos
        // const myDB = doc(db, "viajes", newData.id);
        // await setDoc(myDB, newData);

        //de la misma manera se resume en:

        await setDoc(doc(db, "viajes", newData.id), newData);

        navigation.goBack();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <View style={styles.container}>
      <Image
        source={require("../../../../assets/img/carpool.png")}
        style={styles.image}
      />

      <InfoForm formik={formik} />
      <Button
        title="Crear Viaje"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.button}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}

import React from "react";
import { View } from "react-native";
import { ListItem, Icon } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";
import { map } from "lodash";

export function AccountOptions() {
  const menuOption = getMenuOptions();

  return (
    <View>
      {map(menuOption, (menu, index) => (
        <ListItem key={index} bottomDivider onPress={menu.onPress}>
          <Icon
            type={menu.iconType}
            name={menu.iconNameLeft}
            color={menu.iconColorLeft}
          />
          <ListItem.Content>
            <ListItem.Title>{menu.title}</ListItem.Title>
          </ListItem.Content>
          <Icon
            type={menu.iconType}
            name={menu.iconNameRight}
            color={menu.iconColorRight}
          />
        </ListItem>
      ))}
    </View>
  );
}

function getMenuOptions() {
  return [
    {
      title: "Mis datos",
      iconType: "material-community",
      iconNameLeft: "card-account-details-outline",
      iconColorLeft: "",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
    },

    {
      title: "Mis calificaciones",
      iiconType: "material-community",
      iconNameLeft: "star-outline",
      iconColorLeft: "",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
    },
    {
      title: "Mis viajes",
      iconType: "material-community",
      iconNameLeft: "transit-detour",
      iconColorLeft: "",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
    },
    {
      title: "Seguridad",
      iconType: "material",
      iconNameLeft: "lock-outline",
      iconColorLeft: "",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
    },

    {
      title: "Términos y condiciones de uso",
      iconType: "material-community",
      iconNameLeft: "note-text-outline",
      iconColorLeft: "",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
    },
    {
      title: "Preguntas frecuentes",
      iconType: "material-community",
      iconNameLeft: "help-circle-outline",
      iconColorLeft: "",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
    },
    {
      title: "Contactate con nosotros",
      iconType: "material-community",
      iconNameLeft: "message-processing-outline",
      iconColorLeft: "",
      iconNameRight: "chevron-right",
      iconColorRight: "#ccc",
    },
    {
      title: "Cerrar sesión",
      iconType: "material-community",
      iconNameLeft: "logout",
      iconColorLeft: "red",
      iconNameRight: "",
      iconColorRight: "",
      //Logica para cerrar sesion
      onPress: async () => {
        try {
          const auth = getAuth();
          await signOut(auth);
          // Aquí podrías redirigir a la pantalla de inicio de sesión u otra acción
        } catch (error) {
          console.error("Error al cerrar sesión:", error);
          // Aquí podrías mostrar un mensaje de error al usuario si lo deseas
        }
      },
    },
  ];
}

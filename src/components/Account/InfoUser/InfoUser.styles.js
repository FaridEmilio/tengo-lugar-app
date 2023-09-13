import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    alignContent: "center",
    flexDirection: "row",
    paddingVertical: 30,
    marginHorizontal: 70,
  },
  avatar: {
    marginRight: 20,
    backgroundColor: "black",
  },

  displayName: {
    fontWeight: "bold",
    paddingBottom: 5,
  },

  accessoryStyle: {
    backgroundColor: "black", // Color de fondo del accesorio
    borderColor: "white", // Color del borde del accesorio
    borderWidth: 1, // Grosor del borde
  },
});

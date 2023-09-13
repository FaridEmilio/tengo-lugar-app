import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    alignContent: "center",
    //alignItems: "center",
  },

  btnStyles: {
    paddingVertical: 10,
    marginTop: 30,
    borderRadius: 50,
    backgroundColor: "purple",
    borderTopWidth: 1,
    borderTopColor: "black",
    borderBottomWidth: 1,
  },

  footer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    backgroundColor: "lightgray",
    padding: 10,
    alignItems: "center",
  },
});

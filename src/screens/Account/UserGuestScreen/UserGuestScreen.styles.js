import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  content: {
    marginHorizontal: 30,
  },

  image: {
    resizeMode: "contain",
    height: 400,
    width: "100%",
    marginBottom: 0,
  },

  title: {
    fontWeight: "bold",
    fontSize: 25,
    marginBottom: 10,
    textAlign: "center",
  },

  description: {
    textAlign: "center",
    marginBottom: 10,
    fontSize: 18,
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  button: {
    width: 300,
    padding: 10,
    borderRadius: 100,
    marginVertical: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  buttonTextLogin: {
    color: "blue",
    fontSize: 16,
    textAlign: "center",
  },
  loginButton: {
    backgroundColor: "white",
  },
  registerLogin: {
    backgroundColor: "blue",
  },
});

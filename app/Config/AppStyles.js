import { StyleSheet } from "react-native";
import Colors from "./Colors";

const AppStyles = StyleSheet.create({
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
  logo: {
    width: 100,
    height: 100,
  },

  appInputBackground: {
    backgroundColor: Colors.Light,
    borderRadius: 25,
    height: 50,
    flexDirection: "row",
    padding: 15,
    marginBottom: 20,
    alignItems: "center",
  },
  appInputText: {
    fontSize: 18,
    width: "100%",
    paddingRight: 30,
  },
  appInputIcon: {
    marginRight: 10,
  },
});

export default AppStyles;

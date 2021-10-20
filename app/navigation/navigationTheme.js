import { DefaultTheme } from "@react-navigation/native";
import Colors from "../config/Colors";

export default {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.White,
    primary: Colors.PrimaryColor,
  },
};

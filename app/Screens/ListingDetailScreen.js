import React from "react";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import AppText from "../components/AppText";
import Screen from "../components/Screen";
import Colors from "../config/Colors";
import ListItem from "../components/ListItem";
import AppTextInput from "../components/AppTextInput";
import AppButton from "../components/AppButton";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListingDetailScreen({ navigation }) {
  return (
    <Screen>
      <Image style={styles.image} source={require("../assets/jacket.jpg")} />
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => navigation.pop()}
      >
        <MaterialCommunityIcons
          name="close-circle"
          size={32}
          color={Colors.Medium}
        />
      </TouchableOpacity>
      <View style={styles.textContainer}>
        <AppText style={styles.title}>Red Jacket</AppText>
        <AppText style={styles.price}>$100</AppText>
      </View>

      <View style={styles.sellerContainer}>
        <ListItem
          title="Matt"
          subTitle="5 Listings(s)"
          image="http://lorempixel.com/400/400/people/6/"
        />

        <AppTextInput value="Is this still available?" style={styles.text} />
        <AppButton title="Contact Seller" color={Colors.PrimaryColor} />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  closeButton: {
    position: "absolute",
    top: 30,
    left: 10,
  },
  container: {},
  image: {
    width: "100%",
    height: 250,
  },
  price: {
    color: Colors.PrimaryColor,
    fontWeight: "bold",
    fontSize: 17,
    marginVertical: 6,
  },
  sellerContainer: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  text: {
    marginTop: 40,
    marginBottom: 25,
  },
  textContainer: {
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ListingDetailScreen;

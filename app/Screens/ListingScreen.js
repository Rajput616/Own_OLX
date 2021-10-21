import React from "react";
import { FlatList, StyleSheet } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import Colors from "../config/Colors";
import routes from "../navigation/routes";

const initialListings = [
  {
    id: "1",
    title: "Red Jacket",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: "2",
    title: "Grey couch in a great condition",
    price: 1200,
    image: require("../assets/couch.jpg"),
  },
  {
    id: "3",
    title: "Red Jacket",
    price: 100,
    image: require("../assets/jacket.jpg"),
  },
  {
    id: "4",
    title: "Grey couch in a great condition",
    price: 1200,
    image: require("../assets/couch.jpg"),
  },
];

function ListingScreen({ navigation }) {
  return (
    <Screen style={styles.container}>
      <FlatList
        style={styles.list}
        data={initialListings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Card
            title={item.title}
            price={"$" + item.price}
            image={item.image}
            onPress={() => navigation.navigate(routes.LISTING_DETAIL_SCREEN)}
          />
        )}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Light,
  },
  list: {
    padding: 20,
  },
});

export default ListingScreen;

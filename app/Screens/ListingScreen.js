import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, View } from "react-native";
import Card from "../components/Card";
import Screen from "../components/Screen";
import Colors from "../config/Colors";
import routes from "../navigation/routes";
import listingsApi from "../api/listings";
import AppStyles from "../config/AppStyles";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";

function ListingScreen({ navigation }) {
  const [listings, setListings] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const loadListings = async () => {
    setLoading(true);
    const response = await listingsApi.getListings();
    setLoading(false);
    if (!response.ok) {
      return setError(true);
    }
    setError(false);
    setListings(response.data);
  };

  useEffect(() => {
    loadListings();
  }, []);

  return (
    <Screen style={styles.container}>
      <ActivityIndicator
        animating={loading}
        color={Colors.PrimaryColor}
        size="large"
        style={AppStyles.loader}
      />
      {error ? (
        <View style={styles.errorContainer}>
          <AppText>Couldn't retrieve the the listings</AppText>
          <AppButton title="Retry" onPress={loadListings} />
        </View>
      ) : (
        <FlatList
          style={styles.list}
          data={listings}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              price={"$" + item.price}
              image={item.images[0].url}
              onPress={() =>
                navigation.navigate(routes.LISTING_DETAIL_SCREEN, item)
              }
            />
          )}
        />
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.Light,
  },
  errorContainer: {
    width: "100%",
    padding: 60,
    alignItems: "center",
    alignSelf: "flex-start",
  },
  list: {
    padding: 20,
  },
});

export default ListingScreen;

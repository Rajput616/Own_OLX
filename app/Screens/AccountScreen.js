import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";
import ListItem from "../components/ListItem";
import ListItemSeparator from "../components/ListItemSeparator";
import Colors from "../config/Colors";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: Colors.PrimaryColor,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: Colors.SecondaryColor,
    },
  },
];

function AccountScreen(props) {
  return (
    <View style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Saurabh Rajput"
          subTitle="saurabh@tcs.com"
          image="http://lorempixel.com/400/400/people/4"
        />
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={menuItems}
          keyExtractor={(item) => item.title}
          ItemSeparatorComponent={() => <ListItemSeparator />}
          renderItem={({ item }) => (
            <View>
              <ListItem
                title={item.title}
                hasDetail={true}
                IconComponent={
                  <Icon
                    name={item.icon.name}
                    backgroundColor={item.icon.backgroundColor}
                    size={30}
                  />
                }
              />
            </View>
          )}
        />
      </View>
      <View style={styles.container}>
        <ListItem
          title="Log Out"
          IconComponent={
            <Icon name="logout" backgroundColor="#FDE46E" size={30} />
          }
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: Colors.White,
    marginVertical: 30,
  },
  listContainer: {
    padding: 15,
    backgroundColor: Colors.White,
  },
  screen: {
    backgroundColor: Colors.Light,
    flex: 1,
  },
});

export default AccountScreen;

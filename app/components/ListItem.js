import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Colors from "../Config/Colors";
import ListItemDeleteAction from "./ListItemDeleteAction";

function ListItem({ title, subTitle, image, onPress, onDelete }) {
  return (
    <Swipeable
      renderRightActions={() => <ListItemDeleteAction onPress={onDelete} />}
    >
      <TouchableHighlight underlayColor={Colors.Light} onPress={onPress}>
        <View style={styles.container}>
          {image && <Image style={styles.image} source={{ uri: image }} />}
          {!image && (
            <Image
              style={styles.image}
              source={require("../assets/profile_placeholder.png")}
            />
          )}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 15,
  },
  title: {
    marginBottom: 5,
  },
  subTitle: {
    color: "gray",
  },
});

export default ListItem;

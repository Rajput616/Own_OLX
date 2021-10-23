import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} from "react-native";
import { Swipeable } from "react-native-gesture-handler";
import Colors from "../config/Colors";
import ListItemDeleteAction from "./ListItemDeleteAction";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  hasDetail = false,
  onPress,
  onDelete,
}) {
  return (
    <Swipeable
      renderRightActions={() => <ListItemDeleteAction onPress={onDelete} />}
    >
      <TouchableHighlight underlayColor={Colors.Light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={{ uri: image }} />}
          {!image && !IconComponent && (
            <Image
              style={styles.image}
              source={require("../assets/profile_placeholder.png")}
            />
          )}
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
          {hasDetail && (
            <MaterialCommunityIcons
              name="chevron-right"
              size={24}
              color={Colors.Medium}
            />
          )}
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 10,
    alignItems: "center",
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  textContainer: {
    justifyContent: "center",
    marginLeft: 15,
    flex: 1,
  },
  title: {},
  subTitle: {
    color: "gray",
  },
});

export default ListItem;

import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import Screen from "../components/Screen";
import ListItem from "../components/ListItem";
import ListItemDeleteAction from "../components/ListItemDeleteAction";
import ListItemSeparator from "../components/ListItemSeparator";

const initialMessages = [
  {
    id: "1",
    title: "Mosh Hamedani",
    description: "Hey! Is this item still available?",
    image: "https://lorempixel.com/400/400/people/3/",
  },
  {
    id: "2",
    title: "Mosh Hamedani",
    description:
      "I'm interested in this item. When will you be able to post it?",
    image: "https://lorempixel.com/400/400/people/3/",
  },
];

function MessagesScreen(props) {
  const [messages, setMessages] = useState(initialMessages);
  const [refreshing, setRefreshing] = useState(false);

  const handleDelete = (message) => {
    // Delete the message from messages
    setMessages(messages.filter((m) => m.id !== message.id));
  };

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log("Message selected", item)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item)} />
            )}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: "2",
              title: "T2",
              description: "D2",
              image: require("../assets/couch.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;

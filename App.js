import React, { useState } from "react";
import { StyleSheet, View, FlatList, Alert } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import AddItem from "./components/AddItem";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (text) => {
    if (!text) {
      Alert.alert("Error", "Please enter some item!", { text: "ok" });
    } else {
      setItems((prevItem) => {
        return [{ id: Math.random().toString(), text }, ...prevItem];
      });
    }
  };

  const deleteItem = (id) => {
    setItems((prevItem) => {
      return prevItem.filter((item) => item.id != id);
    });
  };
  return (
    <View style={styles.container}>
      <Header title={"Shopping List"} />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({ item }) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "#fff",
  },
});

export default App;

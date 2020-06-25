import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

const AddItem = ({ addItem }) => {
  const [text, setText] = useState("");
  const onChange = (textValue) => setText(textValue);
  return (
    <View>
      <TextInput
        style={styles.textField}
        placeholder="add item"
        onChangeText={onChange}
      />
      <TouchableOpacity style={styles.btn} onPress={() => addItem(text)}>
        <Text style={styles.addBtn}>Add Item</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  textField: {
    height: 60,
    padding: 8,
    fontSize: 16,
  },
  btn: {
    backgroundColor: "skyblue",
    height: 40,
    padding: 5,
  },
  addBtn: {
    fontSize: 20,
    textAlign: "center",
    color: "white",
  },
});
export default AddItem;

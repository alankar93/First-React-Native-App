import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

Header.defaultProps = {
  title: "Shopping List",
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "skyblue",
    padding: 15,
  },
  text: {
    textAlign: "center",
    fontSize: 23,
    color: "white",
  },
});

export default Header;

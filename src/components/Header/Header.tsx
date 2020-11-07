import React from "react";
import { StyleSheet, View } from "react-native";
import Hamburger from "./Hamburger";

const Header = ({}): JSX.Element => (
  <View style={styles.header}>
    <Hamburger />
    <View style={styles.profile_icon} />
  </View>
);

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 19,
    paddingRight: 19,
    width: "100%",
    height: 65,
  },
  profile_icon: {
    width: 41,
    height: 41,
    borderRadius: 20,
    backgroundColor: "#C4C4C4",
  },
});

export default Header;

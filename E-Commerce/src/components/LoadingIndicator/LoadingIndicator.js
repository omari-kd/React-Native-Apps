import React from "react";
import { View, ActivityIndicator, StyleSheet } from "react-native";

const LoadingIndicator = ({ size = 60, color = "orange" }) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={size} color={color} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  }
});

export default LoadingIndicator;

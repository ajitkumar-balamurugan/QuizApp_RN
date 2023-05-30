import React from "react";
import { View, Text } from "react-native";

const ResultScreen = ({ route }) => {
  const { score } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Your Score: {score}</Text>
    </View>
  );
};

export default ResultScreen;

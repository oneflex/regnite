import React from "react";
import { View, ViewStyle } from "react-native";
import { spacing } from "../../theme";
import Todo from "../../components/todo/todo";
import Checkbox from "../../components/checkbox/checkbox";

const FULL: ViewStyle = { flex: 1 };

const CONTAINER: ViewStyle = {
  paddingHorizontal: spacing[4],
};

export function MainScreen() {
  return (
    <View style={FULL}>
      <View style={CONTAINER}>
        <Todo description="Hilda Powell" isCompleted={true} />
        <Todo description="William Banks" isCompleted={true} />
        <Todo description="Frank Schultz" isCompleted={false} />
        <Todo description="Eunice French" isCompleted={false} />
        <Todo description="Craig Newman" isCompleted={false} />
        <Todo description="Nettie Wolfe" isCompleted={true} />
        <Todo description="Julian Bennett" isCompleted={false} />
      </View>
    </View>
  );
}

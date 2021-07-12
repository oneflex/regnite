import React from "react";
import { View, ViewStyle } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { spacing } from "../../theme";
import Todo from "../../components/todo/todo";

const FULL: ViewStyle = { flex: 1 };

const CONTAINER: ViewStyle = {
  paddingHorizontal: spacing[4],
};

export function MainScreen() {
  const navigation = useNavigation();

  return (
    <View style={FULL}>
      <View style={CONTAINER}>
        <Todo description="Hilda Powell" isCompleted={true} />
        <Todo description="William Banks" isCompleted={true} />
        <Todo description="Celia Carr" isCompleted={false} />
        <Todo description="Nathaniel Collins" isCompleted={true} />
        <Todo description="Lulu Rhodes" isCompleted={true} />
        <Todo description="Frank Schultz" isCompleted={false} />
        <Todo description="Eunice French" isCompleted={false} />
        <Todo description="Craig Newman" isCompleted={false} />
        <Todo description="Nettie Wolfe" isCompleted={true} />
        <Todo description="Julian Bennett" isCompleted={false} />
      </View>
    </View>
  );
}

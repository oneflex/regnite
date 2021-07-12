import React from "react";
import { View, ViewStyle } from "react-native";
import { spacing } from "../../theme";
import Todo from "../../components/todo/todo";
import Heading from "../../components/heading/heading";
import SubHeading from "../../components/sub-heading/sub-heading";

const FULL: ViewStyle = { flex: 1 };

const CONTAINER: ViewStyle = {
  paddingHorizontal: spacing[6],
};

export function MainScreen() {
  return (
    <View style={FULL}>
      <View style={CONTAINER}>
        <Heading text="What's up, Joy!" />
        <SubHeading text="TODAY'S TASKS" />
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

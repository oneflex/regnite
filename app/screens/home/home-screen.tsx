import React from "react";
import {
  View,
  ViewStyle,
  TextStyle,
  TouchableOpacity,
  Text,
} from "react-native";
import TodoList from "../../components/todo-list/todo-list";
import Heading from "../../components/heading/heading";
import NewTodoForm from "../../components/new-todo-form/new-todo-form";
import FiltersForm from "../../components/filters-form/filters-form";
import Screen from "../../components/screen/screen";
import { signOut } from "../../actions/auth/auth";
import { connect } from "react-redux";
import { spacing } from "../../theme";

const CONTAINER: ViewStyle = { flex: 1 };

const LOGOUT_BUTTON: TextStyle = {
  paddingHorizontal: spacing[5],
};

const LOGOUT_BUTTON_TEXT: TextStyle = {
  fontSize: spacing[6],
};

function HomeScreen(props: any) {
  return (
    <Screen>
      <View style={CONTAINER}>
        <TouchableOpacity style={LOGOUT_BUTTON} onPress={() => props.signOut()}>
          <Text style={LOGOUT_BUTTON_TEXT}>{"👋🏻"}</Text>
        </TouchableOpacity>
        <Heading text="What's up, Joy!" />
        <FiltersForm />
        <NewTodoForm />
        <TodoList />
      </View>
    </Screen>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signOut: () => dispatch(signOut()),
});

export default connect(undefined, mapDispatchToProps)(HomeScreen);

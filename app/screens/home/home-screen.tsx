import React from "react";
import TodoList from "../../components/todo-list/todo-list";
import Heading from "../../components/heading/heading";
import NewTodoForm from "../../components/new-todo-form/new-todo-form";
import FiltersForm from "../../components/filters-form/filters-form";
import Screen from "../../components/screen/screen";
import { startSignOut } from "../../actions/auth/auth";
import { connect } from "react-redux";
import { spacing } from "../../theme";
import { translate } from "../../i18n";
import styled from "@emotion/native";
import Button from "../../components/button/button";
import { HomeProps } from "./home.props";

const Container = styled.View(() => ({
  flex: 1,
}));

const WelcomeTitle = styled(Heading)(() => ({
  paddingHorizontal: spacing[5],
  marginTop: spacing[5],
}));

const LogoutButton = styled(Button)(() => ({
  marginHorizontal: spacing[5],
  marginVertical: spacing[3],
}));

function HomeScreen(props: HomeProps) {
  return (
    <Screen>
      <Container>
        <LogoutButton kind="secondary" onPress={() => props.signOut()}>
          Log Out
        </LogoutButton>
        <WelcomeTitle>{`${translate("homeScreen.title")}, ${
          props.name
        }!`}</WelcomeTitle>
        <FiltersForm />
        <NewTodoForm />
        <TodoList />
      </Container>
    </Screen>
  );
}

const mapDispatchToProps = (dispatch: any) => ({
  signOut: () => dispatch(startSignOut()),
});

const mapStateToProps = (state: any) => {
  if (!state.auth.user) return {};

  return {
    name: state.auth.user.email
      ? state.auth.user.email.split("@")[0]
      : "anonymous user",
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

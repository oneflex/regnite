import * as React from "react";
import { CategoryButtonProps } from "./category-button.props";
import { Pressable } from "react-native";
import { spacing } from "../../theme";
import styled from "@emotion/native";
import { typography } from "../../theme/typography";
import { Category } from "../../types/filters";

interface ContainerProps {
  pressed: boolean;
  category: Category;
}
const Container = styled.View<ContainerProps>(props => {
  const backgroundColor = {
    all: props.theme.text[100],
    personal: props.theme.primary[100],
    work: props.theme.primary[400],
  };

  return {
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: backgroundColor[props.category],
    paddingVertical: spacing[2],
    paddingHorizontal: spacing[2],
    marginVertical: spacing[2],
    marginRight: spacing[3],
    width: 120,
    height: 90,
    opacity: props.pressed ? 0.2 : 1,
  };
});

const Text = styled.Text(props => ({
  color: props.theme.background[100],
  fontSize: 22,
  fontFamily: typography.primary.bold,
}));

const ProgressText = styled(Text)(() => ({
  fontSize: 20,
  fontFamily: typography.primary.regular,
}));

const CategoryButton: React.FC<CategoryButtonProps> = props => {
  const { style, handleClick, todosNumber, todosCompleted, text } = props;

  return (
    <Pressable onPress={handleClick}>
      {({ pressed }) => (
        <Container category={props.category} pressed={pressed} style={style}>
          <Text>{text}</Text>
          <ProgressText>{`${todosCompleted}/${todosNumber}`}</ProgressText>
        </Container>
      )}
    </Pressable>
  );
};

export default CategoryButton;

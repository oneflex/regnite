import * as React from "react";
import { FiltersFormProps } from "./filters-form.props";
import { View, ViewStyle } from "react-native";
import { spacing } from "../../theme";
import { Category, Sort } from "../../types/filters";
import CategoryButton from "../category-button/category-button";
import { connect } from "react-redux";
import { updateFilterBy, updateSortBy } from "../../actions/filters/filters";
import { calculateTodosCount } from "../../selectors/todos";
import { translate } from "../../i18n";
import styled from "@emotion/native";
import Button from "../button/button";

const TODO_TYPES_CONTAINER: ViewStyle = {
  paddingHorizontal: spacing[6],
};

const TodoTypes = styled.FlatList(() => ({
  paddingVertical: spacing[3],
}));

const SortOptions = styled.View(() => ({
  flexDirection: "row",
  paddingVertical: spacing[1],
  marginLeft: spacing[5],
}));

const SortButton = styled(Button)(() => ({}));

const FiltersForm: React.FC<FiltersFormProps> = props => {
  return (
    <View style={props.style}>
      <TodoTypes
        data={["all", "personal", "work"]}
        renderItem={(data: any) => {
          const category: Category = data.item;
          return (
            <CategoryButton
              key={category}
              text={translate(`todos.categories.${category}`)}
              todosCompleted={props.todosCount[category].completed}
              todosNumber={props.todosCount[category].total}
              handleClick={() => props.updateFilterBy(category)}
              category={category}
            />
          );
        }}
        keyExtractor={(category: Category) => category}
        horizontal={true}
        contentContainerStyle={TODO_TYPES_CONTAINER}
      />
      <SortOptions>
        <SortButton
          kind="tertiary"
          onPress={() => props.updateSortBy("nameAsc")}
        >
          {translate("sortBy.asc")}
        </SortButton>
        <SortButton
          kind="tertiary"
          onPress={() => props.updateSortBy("nameDes")}
        >
          {translate("sortBy.des")}
        </SortButton>
      </SortOptions>
    </View>
  );
};

const mapStateToProps = (state: any) => ({
  todosCount: calculateTodosCount(state.todos),
});

const mapDispatchToProps = (dispatch: any) => ({
  updateFilterBy: (type: Category) => dispatch(updateFilterBy(type)),
  updateSortBy: (type: Sort) => dispatch(updateSortBy(type)),
});

export default connect(mapStateToProps, mapDispatchToProps)(FiltersForm);

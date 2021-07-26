import * as React from "react";
import { FiltersFormProps } from "./filters-form.props";
import { View, ViewStyle, FlatList } from "react-native";
import { color, spacing } from "../../theme";
import { Category, Sort } from "../../types/filters";
import CategoryButton from "../category-button/category-button";
import SortButton from "../sort-button/sort-button";
import { connect } from "react-redux";
import { updateFilterBy, updateSortBy } from "../../actions/filters/filters";
import { Todo } from "../../types";
import { calculateTodosCount } from "../../selectors/todos";

const CONTAINER: ViewStyle = {};

const TODO_TYPES_CONTAINER: ViewStyle = {
  paddingRight: spacing[6],
};

const TODO_TYPES: ViewStyle = {
  paddingHorizontal: spacing[5],
};

const SORT_OPTIONS: ViewStyle = {
  flexDirection: "row",
  paddingVertical: spacing[3],
};

const FiltersForm: React.FC<FiltersFormProps> = props => {
  const { style } = props;

  return (
    <View style={[CONTAINER, style]}>
      <FlatList
        data={["personal", "all", "work"]}
        renderItem={(data: any) => {
          const category: Category = data.item;
          return (
            <CategoryButton
              key={category}
              text={category}
              todosCompleted={props.todosCount[category].completed}
              todosNumber={props.todosCount[category].total}
              color={color.category[category]}
              handleClick={() => props.updateFilterBy(category)}
            />
          );
        }}
        keyExtractor={(category: Category) => category}
        horizontal={true}
        style={TODO_TYPES}
        contentContainerStyle={TODO_TYPES_CONTAINER}
      />
      <View style={SORT_OPTIONS}>
        <SortButton
          text={"sort by a-z"}
          handleClick={() => props.updateSortBy("nameAsc")}
        />
        <SortButton
          text={"sort by z-a"}
          handleClick={() => props.updateSortBy("nameDes")}
        />
      </View>
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

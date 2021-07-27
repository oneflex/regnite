import { ViewStyle } from "react-native";
import { Category, Sort } from "../../types/filters";

export interface FiltersFormProps {
  /**
   * filtres todos
   */
  updateFilterBy: (type: Category) => void;
  /**
   * sort todos
   */
  updateSortBy: (type: Sort) => void;
  /**
   * contains the counters of every todo by category
   */
  todosCount: {
    [type in Category]: {
      total: number;
      completed: number;
    };
  };
  /**
   * Container style overrides
   */
  style?: ViewStyle;
}

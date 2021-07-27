export interface TodoData {
  description: string;
  isCompleted: boolean;
  type: "personal" | "work";
}

export interface Updates {
  description?: string;
  isCompleted?: boolean;
  type?: "personal" | "work";
}

export interface Action {
  type: "ADD_TODO" | "REMOVE_TODO" | "UPDATE_TODO" | "SET_TODOS";
  payload?: any;
}

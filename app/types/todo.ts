export interface Todo {
  id: string;
  description: string;
  isCompleted: boolean;
  type: "personal" | "work";
}

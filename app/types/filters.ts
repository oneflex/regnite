export type Category = "all" | "work" | "personal";
export type Sort = "nameDes" | "nameAsc";

export interface Filters {
  filterBy: Category;
  sortBy: Sort;
}

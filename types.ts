export interface Task {
  id: string;
  title: string;
  done: boolean;
}

export type TaskFilter = "All" | "Todo" | "Done";

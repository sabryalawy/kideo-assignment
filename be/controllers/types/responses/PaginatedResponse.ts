export type PageinatedResponse<T> = {
  data: T;
  count: number;
};
export type PageinatedResponses<T> = {
  data: T;
  rows:T
};

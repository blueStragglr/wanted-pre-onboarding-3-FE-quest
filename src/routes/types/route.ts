export enum ROUTE {
  PageA = "/page-a",
  PageB = "/page-b",
  PageC = "/page-c",
  Login = "/login",
}

export type HandleRouteFn = (route: ROUTE) => void;

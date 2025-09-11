export type Step =
  | "name"
  | "options"
  | "coffeeType"
  | "milkType"
  | "filterType"
  | "size"
  | "summary"
  | "recommendations";

export interface UserData {
  name: string;
  selectedOption: "choose" | "recommendations" | null;
  coffeeType: string;
  milkType: string;
  filterType: string;
  coffeeSize: string;
}

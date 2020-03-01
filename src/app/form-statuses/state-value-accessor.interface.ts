export interface StateValueAccessor {
  setTouchedState?(touched: boolean): void;
  setPristineState?(pristine: boolean): void;
}

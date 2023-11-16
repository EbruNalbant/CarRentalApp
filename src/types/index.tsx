import { MouseEventHandler } from "react";

// identification of the type of props contained in the button component
export type ButtonPropsType = {
  title: string;
  designs?: string;
  disabled?: boolean;
  btnType?: "button" | "submit";
  rIcon?: string;
  handleClick?: MouseEventHandler;
};

// informations of car
export type CarType = {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: "fwd" | "rwd" | "awd" | "4wd";
  fuel_type: "gas" | "diesel" | "electricity";
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
};

export type OptionType = {
  label: string;
  value: string;
};

export type FilterType = {
  make?: string;
  model?: string;
  limit?: string;
  fuel?: string;
  year?: string;
};

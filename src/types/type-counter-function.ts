import { typeActionCounter } from "./type-action-counter";

export type typeCounterFunction = (
  idCounter: number,
  type: typeActionCounter
) => void;

import { rootState } from "../store";

export class CountersSelector {
  static getCounters(state: rootState) {
    return state.counters.counters;
  }
}

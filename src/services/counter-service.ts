import { typeCounter } from "../types/type-counter";
import { ICounter } from "../types/models/counter";
import { SettingsCounter } from "../settings/settings-counter";

export class CounterService {
  static createCounter(
    counters: ICounter[],
    totalCountCounters: number
  ): ICounter {
    const typeCounter = this.determineCounterType(totalCountCounters);
    const countNewCounter = this.calculateTotalSumCounters(counters);
    return {
      id: Math.random(),
      type: typeCounter,
      count: countNewCounter,
    };
  }

  static incrementOrDecrementCountCounter(
    counters: ICounter[],
    idCounter: number,
    type: "increment" | "decrement"
  ) {
    const updateCounters = counters.map((counter) => {
      if (counter.id === idCounter) {
        return {
          ...counter,
          count:
            type === "increment" ? (counter.count += 1) : (counter.count -= 1),
        };
      }
      return counter;
    });
    return updateCounters;
  }

  static removeCounter(counters: ICounter[], idCounter: number) {
    const updateCounters = counters.filter((counter) => {
      return counter.id !== idCounter;
    });
    return updateCounters;
  }

  private static determineCounterType(totalCountCounters: number): typeCounter {
    const isIntervalCounter =
      totalCountCounters % SettingsCounter.NUMBER_INTERVAL_COUNTER === 0 &&
      totalCountCounters > 0;
    return isIntervalCounter ? "interval" : "default";
  }

  private static calculateTotalSumCounters(counters: ICounter[]): number {
    return counters.reduce((totalSum, counter) => {
      return totalSum + counter.count;
    }, 0);
  }
}

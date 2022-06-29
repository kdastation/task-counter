import { FC, memo, useEffect } from "react";
import { ICounter } from "../../../types/models/counter";
import { typeCounterFunction } from "../../../types/type-counter-function";
import { Button } from "../../../ui-components/button/button";
import { SettingsCounter } from "../../../settings/settings-counter";
import styles from "./interval-counter.module.scss";

interface IntervalCounterProps {
  counter: ICounter;
  emit: typeCounterFunction;
}

const IntervalCounter: FC<IntervalCounterProps> = (props) => {
  const { counter, emit } = props;
  useEffect(() => {
    const incrementOnInterval = setInterval(() => {
      emit(counter.id, "increment");
    }, SettingsCounter.INTERVAL_TIME);
    return () => {
      clearInterval(incrementOnInterval);
    };
  }, []);
  return (
    <div className={styles.interval_counter}>
      <span>{counter.count}</span>
      <Button onClick={() => emit(counter.id, "remove")}>Удалить</Button>
    </div>
  );
};

const MemoIntervalCounter = memo(IntervalCounter);

export { IntervalCounter, MemoIntervalCounter };

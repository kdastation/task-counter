import { FC, memo } from "react";
import { ICounter } from "../../../types/models/counter";
import { typeCounterFunction } from "../../../types/type-counter-function";
import { Button } from "../../../ui-components/button/button";
import styles from "./default-counter.module.scss";

interface DefaultCounterProps {
  counter: ICounter;
  emit: typeCounterFunction;
}

const DefaultCounter: FC<DefaultCounterProps> = (props) => {
  const { counter, emit } = props;
  const decrementOnClick = () => {
    emit(counter.id, "decrement");
  };
  const incrementOnClick = () => {
    emit(counter.id, "increment");
  };
  const removeOnClick = () => {
    emit(counter.id, "remove");
  };
  return (
    <div className={styles.default_counter}>
      <span>{counter.count}</span>
      <div>
        <Button onClick={incrementOnClick}>+</Button>
        <Button onClick={decrementOnClick}>-</Button>
        <Button onClick={removeOnClick}>Удалить</Button>
      </div>
    </div>
  );
};

const MemoDefaultCounter = memo(DefaultCounter);

export { DefaultCounter, MemoDefaultCounter };

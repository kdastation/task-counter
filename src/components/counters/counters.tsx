import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountersSelector } from "../../redux/selectors/counter-selector";
import {
  increment,
  decrement,
  removeCounter,
} from "../../redux/reducers/counters-reducer";
import { RenderServiceCounter } from "../../services/render-service/render-service-counter";
import { typeActionCounter } from "../../types/type-action-counter";

const Counters: FC = () => {
  const counters = useSelector(CountersSelector.getCounters);
  const dispatch = useDispatch();
  const emit = useCallback((idCounter: number, type: typeActionCounter) => {
    switch (type) {
      case "increment":
        dispatch(increment(idCounter));
        break;
      case "decrement":
        dispatch(decrement(idCounter));
        break;
      case "remove":
        dispatch(removeCounter(idCounter));
        break;
    }
  }, []);
  return (
    <div>
      {counters.map((counter) => {
        return RenderServiceCounter.renderCounter(counter, emit);
      })}
    </div>
  );
};

export { Counters };

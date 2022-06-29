import { FC, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CountersSelector } from "../../redux/selectors/counter-selector";
import { RenderServiceCounter } from "../../services/render-service/render-service-counter";
import { typeActionCounter } from "../../types/type-action-counter";
import { actionsCounterComponent } from "../../redux/reducers/counters-reducer";

const Counters: FC = () => {
  const counters = useSelector(CountersSelector.getCounters);
  const dispatch = useDispatch();
  const emit = useCallback((idCounter: number, type: typeActionCounter) => {
    const action = actionsCounterComponent[type];
    dispatch(action(idCounter));
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

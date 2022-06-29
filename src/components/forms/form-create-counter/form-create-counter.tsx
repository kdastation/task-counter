import { FC } from "react";
import { useDispatch } from "react-redux";
import { addCounter } from "../../../redux/reducers/counters-reducer";
import { Button } from "../../../ui-components/button/button";

const FormCreateCounter: FC = () => {
  const dispatch = useDispatch();
  const addCounterOnClick = () => {
    dispatch(addCounter());
  };
  return (
    <div>
      <Button onClick={addCounterOnClick}>Добавить новый счётчик</Button>
    </div>
  );
};

export { FormCreateCounter };

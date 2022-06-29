import { FC } from "react";
import { useDispatch } from "react-redux";
import { addCounter } from "../../../redux/reducers/counters-reducer";
import { Button } from "../../../ui-components/button/button";

const FormCreateCounter: FC = () => {
  const dispatch = useDispatch();
  const createCounter = () => {
    dispatch(addCounter());
  };
  return (
    <div>
      <Button onClick={createCounter}>Добавить новый счётчик</Button>
    </div>
  );
};

export { FormCreateCounter };

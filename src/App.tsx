import React from "react";
import { Counters } from "./components/counters/counters";
import { FormCreateCounter } from "./components/forms/form-create-counter/form-create-counter";
import styles from "./app.module.scss";

function App() {
  return (
    <div className={styles.container}>
      <FormCreateCounter />
      <Counters />
    </div>
  );
}

export default App;

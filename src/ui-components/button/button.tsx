import React, { DetailedHTMLProps, FC } from "react";
import styles from "./button.module.scss";

const Button: FC<
  DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> = (props) => {
  const { children } = props;
  return (
    <button className={styles.button} {...props}>
      {children}
    </button>
  );
};

export { Button };

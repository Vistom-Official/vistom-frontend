"use client";

import cx from "classnames";
import { TCommonTextFieldProps } from "../common/types";
import styles from "./ui.module.scss";

export const TextField = (props: TCommonTextFieldProps) => {
  return (
    <div className={styles.textFieldContainer}>
      <input
        min={props.min}
        max={props.max}
        name={props.name}
        value={props.value}
        required={props.required}
        disabled={props.disabled}
        minLength={props.minLength}
        maxLength={props.maxLength}
        type={props.type ?? "input"}
        aria-required={props.required}
        placeholder={props.placeholder}
        className={cx(styles.textField, props.capitalize && styles.capitalize)}
      />
    </div>
  );
};

"use client";

import React, { PropsWithChildren } from "react";
import styles from "./ui.module.scss";

type TFormWrapperProps = PropsWithChildren;

export const FormWrapper = ({ children }: TFormWrapperProps) => {
  return <div className={styles.container}>{children}</div>;
};

import React from "react";
import styles from "./ui.module.scss";

type TPorps = {
  children: React.ReactNode;
};

export const PageWrapper = (props: TPorps) => {
  return <div className={styles.pageWrapper}>{props.children}</div>;
};

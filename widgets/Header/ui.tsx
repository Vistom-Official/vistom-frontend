import React from "react";
import styles from "./ui.module.scss";
import { LoginForm } from "../LoginForm";
import { PricePage } from "@/pageView/Price";
import { Logo } from "@/shared/Logo";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.content}>
        <Logo />
        <div className={styles.rightSide}>
          <PricePage />
          <LoginForm />
        </div>
      </div>
    </header>
  );
};

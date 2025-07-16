import React from "react";
import styles from "./ui.module.scss";

import { PricePage } from "@/pageView/Price";

import Link from "next/link";
import { ROUTES } from "@/shared/common/routes";
import { Logo } from "@/shared/ui/Logo/ui";



export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.content}>
        <Logo />
        <div className={styles.rightSide}>
          <PricePage />
          <Link href={ROUTES.LOGIN} className={styles.loginText} >Login</Link>
        </div>
      </div>
    </header>
  );
};

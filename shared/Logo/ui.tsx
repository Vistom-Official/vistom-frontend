import Link from "next/link";
import React from "react";
import styles from "./ui.module.scss";
export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Link href="/" className={styles.logo}>
        Vistom
      </Link>
    </div>
  );
};

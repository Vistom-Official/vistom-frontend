import Link from "next/link";
import React from "react";
import styels from "./ui.module.scss"
export const Logo = () => {
  return (
    <div className={styels.logo}>
      <Link href="/" className={styels.logo}>
        Vistom
      </Link>
    </div>
  );
};

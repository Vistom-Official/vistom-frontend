import { Login } from "@/pageView/Login/ui";
import React from "react";
import Link from "next/link";

export const LoginForm = () => {
  return (
    <>
      <Link href={"/"}>
        <Login />
      </Link>
    </>
  );
};

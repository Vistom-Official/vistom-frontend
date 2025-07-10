"use client";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/shared/common/routes";
import { PageWrapper } from "@/shared/PageWrapper";
import { TextField } from "@/shared/TextField";
import styles from "./ui.module.scss";
import Link from "next/link";

export const LoginForm = () => {
  return (
    <PageWrapper>
      <form className={styles.loginForm}>
        <h2 className={styles.title}>Login</h2>
        <p>Welcome back! Please sign in to continue</p>
        <TextField
          required
          name="email"
          type="email"
          value=""
          placeholder="Enter your email"
        />

        <TextField
          required
          name="password"
          type="password"
          value=""
          placeholder="Enter your password"
        />
        <Link href={ROUTES.FORGOT_PASSWORD} className={styles.forgotBtn}>
          Forgot password?
        </Link>
        <Button className={styles.loginBtn}>Login</Button>
        <div className={styles.signUp}>
          Don’t have an account?
          <Link className={styles.link} href={"/"}>
            Sign up
          </Link>
        </div>
      </form>
    </PageWrapper>
  );
};

"use client";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/shared/common/routes";

import styles from "./ui.module.scss";
import Link from "next/link";
import { TextField } from "@/shared/ui/TextField";
import { FormWrapper } from "@/shared/ui/FormWrapper";

export const LoginForm = () => {
  return (
    <FormWrapper>
      <form className={styles.loginForm}>
        <h2 className={styles.title}>Please login</h2>
        <TextField
          required
          name="email"
          type="email"
          // value=""
          placeholder="Enter your email"
        />

        <TextField
          required
          name="password"
          type="password"
          value=""
          placeholder="Enter your password"
        />

        <Button className={styles.loginBtn}>Login</Button>
        <Link href={ROUTES.FORGOT_PASSWORD} className={styles.forgotBtn}>
          Forgot password?
        </Link>
        <div className={styles.signUp}>
          Don’t have an account?
          <Link className={styles.link} href={ROUTES.REGISTER}>
            Registration
          </Link>
        </div>
      </form>
    </FormWrapper>
  );
};

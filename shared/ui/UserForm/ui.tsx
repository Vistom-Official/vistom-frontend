import React from "react";
import { FormWrapper } from "../FormWrapper";
import { TextField } from "../TextField";
import { Button } from "@/components/ui/button";
import styles from "./ui.module.scss";

export const UserFrom = () => {
  return (
    <FormWrapper>
      <form action="">
        <h1>Registration</h1>
        <TextField required name="email" placeholder="Email" />
        <TextField required name="password" placeholder="Password" />
        <Button className={styles.registretionBtn}>Sign Up</Button>
      </form>
    </FormWrapper>
  );
};

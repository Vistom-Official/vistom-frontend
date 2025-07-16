"use client";

import React, { useState } from "react";
import { FormWrapper } from "../FormWrapper";
import { TextField } from "../TextField";
import { Button } from "@/components/ui/button";
import styles from "./ui.module.scss";
import { useUserFormStore } from "@/entities/userForm";
import { registerUser } from "@/entities/user/api";
import { useRouter } from "next/navigation";

export const UserFrom = () => {
  const router = useRouter();
  const email = useUserFormStore((state) => state.email);
  const password = useUserFormStore((state) => state.password);
  const setEmail = useUserFormStore((state) => state.setEmail);
  const setPassword = useUserFormStore((state) => state.setPassword);
  const reset = useUserFormStore((state) => state.reset);

  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      console.log("Password dont match!");
    }

    try {
      const res = await registerUser({
        email,
        password,
        // termsAccepted: true,
      });

      if (res?.success) {
        reset();
        router.push("/");
      }
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <h1>Registration</h1>
        <TextField
          required
          name="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          required
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          required
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <Button type="submit" className={styles.registretionBtn}>
          Sign Up
        </Button>
      </form>
    </FormWrapper>
  );
};

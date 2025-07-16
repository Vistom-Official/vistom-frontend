"use client";

import { Button } from "@/components/ui/button";
import { FormWrapper } from "@/shared/ui/FormWrapper";
import { TextField } from "@/shared/ui/TextField";
// import { useSendAgainTimer } from "@/shared/hooks";
import { useState } from "react";
import styles from "./ui.module.scss";

import { forgotPasswordValidation } from "@/utils";

export const ForgotPasswordForm = () => {
  // const { count, isActive, startTimer } = useSendAgainTimer();
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const validateAndProceed = () => {
    const validationResult = forgotPasswordValidation.safeParse({ email });

    if (!validationResult.success) {
      const emailError =
        validationResult.error.format().email?._errors[0] || "Invalid email";
      setError(emailError);
      return;
    }

    setError("");
    setStep(2);
  };

  const renderFirstStep = () => (
    <>
      <h3>Enter your email</h3>
      <TextField
        required
        name="email"
        type="email"
        placeholder="Email"
        value={email}
        // onChange={(value) => {
        //   setEmail(value);
        //   if (error) setError("");
        // }}
      />
      {error && <span className={styles.errorText}>{error}</span>}

      <Button
        type="button"
        onClick={validateAndProceed}
        className={styles.continueBtn}
      >
        Continue
      </Button>
    </>
  );

  const renderSecondStep = () => (
    <>
      <h3>Confirm your email</h3>
      <p>
        We sent a letter to <strong>{email}</strong>. Please follow the link in
        this email to reset your password.
      </p>

      {/* <p>
        Didn’t receive the letter?
        {isActive && count > 0 ? (
          <span>Send again in {count}s</span>
        ) : (
          <Button onClick={startTimer}>Send again</Button>
        )}
        and check if there is any error in the address.
      </p> */}
      <Button
        type="button"
        onClick={() => setStep(1)}
        className={styles.changeEmail}
      >
        Change e-mail →
      </Button>
    </>
  );

  const renderThirdStep = () => {
    <>
      <TextField
        required
        name="password"
        type="password"
        placeholder="Password"
      />
      <TextField
        required
        name={"password"}
        type="password"
        placeholder="Confirm password"
      />
      <Button className={styles.confirmBtn}>Confirm</Button>
    </>;
  };

  return (
    <FormWrapper>
      {step === 1 ? renderFirstStep() : renderSecondStep()}
    </FormWrapper>
  );
};

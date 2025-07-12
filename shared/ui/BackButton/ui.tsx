"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import styles from "./ui.module.scss";
import Image from "next/image";
import cx from "classnames";

type TProps = {
  handleBack?: () => void;
  className?: string;
  disable?: boolean;
};

export const BackButton = (props: TProps) => {
  const router = useRouter();

  const handleBack = () => {
    if (props.disable) {
      return;
    }
    if (props.handleBack) {
      props.handleBack();
      return;
    }
    router.back();
  };

  return (
    <Button
      onClick={handleBack}
      className={cx(
        styles.backBtn,
        { [styles.disabled]: props.disable },
        props.className
      )}
    >
      <Image
        alt="vistom-back-button"
        src="/icons/caretLeft.svg"
        height={24}
        width={24}
      />
    </Button>
  );
};

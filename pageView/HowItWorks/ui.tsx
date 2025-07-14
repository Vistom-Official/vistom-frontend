"use client";

import React from "react";
import styles from "./ui.module.scss";
import Image from "next/image";

type Step = {
  icon: string;
  title: string;
  description: string;
};

const steps: Step[] = [
  {
    icon: "/images/step-1.svg",
    title: "Describe Your Vision",
    description:
      "Type a phrase, sentence, or paragraph that describes the image you want to create.",
  },
  {
    icon: "/images/step-2.svg",
    title: "Watch the Magic",
    description:
      "Our AI-powered engine will transform your text into a high-quality, unique image in seconds.",
  },
  {
    icon: "/images/step-3.svg",
    title: "Download & Share",
    description:
      "Instantly download your creation or share it with the world directly from our platform.",
  },
];

export const HowItWork = () => {
  return (
    <section className={styles.howItWork}>
      <h2 className={styles.title}>How it works</h2>
      <p className={styles.text}>Transform Words Into Stunning Images</p>
      <div className={styles.stepsList}>
        {steps.map(({ icon, title, description }, id) => (
          <div key={id} className={styles.step}>
            <Image src={icon} alt={title} width={45} height={45} />
            <div className={styles.stepContent}>
              <h3 className={styles.stepTitle}>{title}</h3>
              <p className={styles.description}>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

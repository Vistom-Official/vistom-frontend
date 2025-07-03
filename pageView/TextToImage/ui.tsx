import React from "react";
import styles from "./ui.module.scss";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const TextToImage = () => {
  return (
    <section className={styles.content}>
      <span className={styles.subtitle}>
        Best text to image generator
        <Image src="/star_icon.svg" alt="Star icon" width={13} height={13} />
      </span>
      <h1 className={styles.title}>
        Turn text to <br /> <span>image</span>, in seconds.
      </h1>
      <div className={styles.description}>
        Unleash your creativity with AI. Turn your imagination into visual art{" "}
        <br />
        in seconds – just type, and watch the magic happen.
      </div>
      <Button className={styles.gnrBtn}>Generate Images ✨</Button>
      {/* Here we will have generated images */}
      {/* <section aria-label="Generated images from imagify">
        <h3>Generated images</h3>
      </section> */}
    </section>
  );
};

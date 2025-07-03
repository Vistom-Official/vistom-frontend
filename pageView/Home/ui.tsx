// import Image from "next/image";
// import styles from "./ui.module.scss";

import { PageWrapper } from "@/shared/PageWrapper";
import { TextToImage } from "../TextToImage/ui";
import { HowItWork } from "@/features/HowItWorks";

export const HomePage = () => {
  return (
    <>
      <PageWrapper>
        <TextToImage />
        <HowItWork />

        {/* <section className={styles.contianer}>
          <h2>How it works</h2>
          <p>Transform Words Into Stunning Images</p>
        </section>

        <section className={styles.contianer}>
          <h2>Create AI Images</h2>
          <p>Turn your imagination into visuals</p>
          <div className={styles.content}>
            <Image src={""} alt={""} />
            <div className={styles.info}>
              <h3>Introducing the AI-Powered Text to Image Generator</h3>
              <p>
                Easily bring your ideas to life with our free AI image
                generator. Whether you need stunning visuals or unique imagery,
                our tool transforms your text into eye-catching images with just
                a few clicks. Imagine it, describe it, and watch it come to life
                instantly.
              </p>
            </div>
          </div>
        </section> */}
      </PageWrapper>
    </>
  );
};

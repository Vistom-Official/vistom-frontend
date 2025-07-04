import styles from "./ui.module.scss";
import { HowItWork } from "@/features/HowItWorks";
import { Reviews } from "../Reviews";
import { TextToImage } from "../TextToImage";
import { PageWrapper } from "@/shared/PageWrapper";
import { Button } from "@/components/ui/button";

export const HomePage = () => {
  return (
    <>
      <PageWrapper>
        <TextToImage />
        <HowItWork />
        <Reviews />
        <section className={styles.magic}>
          <h3 className={styles.title}>See the magic. Try now</h3>
          <Button className={styles.gnrBtn}>Generate Images ✨</Button>
        </section>
      </PageWrapper>
    </>
  );
};

import styles from "./ui.module.scss";
import { HowItWork } from "@/features/HowItWorks";
import { ReviewsPage } from "../Reviews";
import { TextToImage } from "../TextToImage";
import { PageWrapper } from "@/shared/ui/PageWrapper";
import { Button } from "@/components/ui/button";
import { Footer } from "@/widgets/Footer";

export const HomePage = () => {
  return (
    <>
      <PageWrapper>
        <TextToImage />
        <HowItWork />
        <ReviewsPage />
        <section className={styles.magic}>
          <h3 className={styles.title}>See the magic. Try now</h3>
          <Button className={styles.gnrBtn}>Generate Images ✨</Button>
        </section>
        <Footer />
      </PageWrapper>
    </>
  );
};

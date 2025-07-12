import { PageWrapper } from "@/shared/ui/PageWrapper";
import { ROUTES } from "@/shared/common/routes";
import Link from "next/link";

import styles from "./ui.module.scss";
import { Button } from "@/components/ui/button";

export const NotFoundPage = () => {
  return (
    <PageWrapper>
      <div className={styles.container}>
        <h1>Page Not Found</h1>
        <Link href={ROUTES.HOME}>
          <Button className={styles.button}>Return Home</Button>
        </Link>
      </div>
    </PageWrapper>
  );
};

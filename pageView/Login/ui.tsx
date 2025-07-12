import { LoginForm } from "@/widgets/LoginForm";
import styles from "./ui.module.scss";
import { PageWrapper } from "@/shared/ui/PageWrapper";

export const LoginPage = () => {
  return (
    <PageWrapper>
      <LoginForm />
    </PageWrapper>
  );
};

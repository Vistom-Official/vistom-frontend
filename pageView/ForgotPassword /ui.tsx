import { TCommonPageProps } from "@/shared/common/types";
import { PageWrapper } from "@/shared/ui/PageWrapper";
import { ForgotPasswordForm } from "@/widgets/ForgotPasswordForm";

export const ForgotPasswordPage = (props: TCommonPageProps) => {
  return (
    <PageWrapper>
      <ForgotPasswordForm translations={props.translations} />
    </PageWrapper>
  );
};

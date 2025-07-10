export type TCommonPageProps = {
  translations: Record<string, string>;
};

export type TCommonTextFieldProps = {
  min?: string;
  max?: string;
  name: string;
  type?: string;
  value?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  capitalize?: boolean;
  onChange?: (value: string) => void;
};

export type TCommonPageProps = {
  translations: Record<string, string>;
};

export type TCommonTextFieldProps = {
  min?: string | number | undefined;
  max?: string | number | undefined;
  name: string;
  type?: string;
  value?: string;
  maxLength?: number;
  minLength?: number;
  disabled?: boolean;
  required?: boolean;
  placeholder?: string;
  capitalize?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  // onChange?:
    //  | ((e: React.ChangeEvent<HTMLInputElement>) => void)  // обробник події
      //| ((value: string) => void);
};

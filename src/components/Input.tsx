import { Control, Controller, FieldValues } from "react-hook-form";

export type FormRequestType = {
  name: string;
  lastName: string;
  phoneNumber: string;
  password: string;
};

type NameType = "name" | "lastName" | "phoneNumber" | "password";
interface InputProps {
  placeholder: string;
  name: NameType;
  type?: string;
  control: Control<FormRequestType>;
  errors: FieldValues["errors"];
  className?: string;
}

const getSchema = (name: NameType, placeholder: string) => {
  switch (name) {
    case "name":
    case "lastName":
      return {
        pattern: {
          value: /^[\u0600-\u06FF\s]+$/,
          message: `${placeholder} باید فارسی باشد`,
        },
      };
    case "phoneNumber":
      return {
        minLength: {
          value: 11,
          message: " شماره موبایل میبایست ۱۱ رقم باشد ",
        },
        maxLength: {
          value: 11,
          message: " شماره موبایل میبایست ۱۱ رقم باشد ",
        },
        pattern: {
          value: /^(۰۹|09)[۰-۹0-9]{9}$/g,
          message: "شماره  موبایل باید با  ۰۹ شروع بشود",
        },
      };
    case "password":
      return {
        minLength: {
          value: 4,
          message: "رمزعبور باید حداقل ۴ کاراکتر باشد.",
        },
        maxLength: {
          value: 10,
          message: "رمزعبور باید حداکثر ۱۰ کاراکتر باشد.",
        },
        pattern: {
          value: /^(?=.*[a-z])(?=.*[A-Z])/g,
          message:
            "رمز عبور باید شامل حداقل یک حرف لاتین کوچک و یک حرف لاتین بزرگ باشد. ",
        },
      };
    default:
      break;
  }
};
const Input: React.FC<InputProps> = ({
  placeholder,
  name,
  type = "text",
  control,
  errors,
  className,
}) => {
  const hasError = errors[name];
  return (
    <div className={className || ""}>
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <input
            {...field}
            placeholder={placeholder}
            id={name}
            type={type}
            className={`mt-1 h-10 md:h-12 border-inputBorder text-sm font-medium text-gray-950 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-1 ${
              hasError
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-mainGreen"
            } `}
          />
        )}
        rules={{
          required: `${placeholder} اجباری می باشد.`,
          ...getSchema(name, placeholder),
        }}
      />
      {hasError && (
        <span className="text-sm text-red-500 mt-1">{hasError.message}</span>
      )}
    </div>
  );
};

export default Input;

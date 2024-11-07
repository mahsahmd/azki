import Image from "next/image";

type Button = {
  type?: "submit" | "button";
  title: string;
  variant?: "outlined" | "contained";
  showIcon?: boolean;
  className?: string;
  isBackButton?: boolean;
  disabled?: boolean;
  onClick: () => void;
};
export const Button = ({
  type = "button",
  title,
  variant = "contained",
  showIcon = false,
  className,
  isBackButton = false,
  disabled = false,
  onClick,
}: Button) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={`${
        variant === "contained" ? "bg-mainGreen " : "border text-mainGreen"
      } min-w-28 py-2 px-4 rounded-full text-sm md:text-base ${
        disabled ? "border-gray-300" : "border-mainGreen"
      }  ${className || ""}`}
    >
      <p
        className={`flex  items-center justify-between  gap-2 ${
          disabled ? "opacity-40 cursor-not-allowed" : ""
        } ${isBackButton ? "flex-row-reverse" : ""} ${className || ""}`}
      >
        {title}
        {showIcon && (
          <Image
            className={isBackButton ? "rotate-180" : ""}
            src="/icons/arrow.svg"
            width={8}
            height={8}
            alt="arrow"
          />
        )}
      </p>
    </button>
  );
};

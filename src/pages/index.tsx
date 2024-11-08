import { Button, Input } from "@/components";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";

export type FormRequestType = {
  name: string;
  lastName: string;
  phoneNumber: string;
  password: string;
};
export default function SignUp() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormRequestType>({});
  const router = useRouter();
  const onSubmit = (data: FormRequestType) => {
    localStorage.setItem("userInfo", `${data.name} ${data.lastName}`);
    router.push("/select-insurance");
  };
  const hasAnyErrors = Object.keys(errors).length > 0;

  return (
    <div className="w-full">
      <p className="text-black md:font-bold font-medium text-xl text-center md:text-start w-full">
        ثبت نام
      </p>
      <form
        className="flex flex-col gap-8 md:gap-6 w-full md:max-w-[600px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className={`${
            hasAnyErrors ? "gap-0" : "gap-4 "
          } container grid md:grid-cols-2 md:gap-8 `}
        >
          <Input
            placeholder="نام"
            name="name"
            control={control}
            errors={errors}
          />
          <Input
            placeholder="نام خانوادگی"
            name="lastName"
            control={control}
            errors={errors}
          />
          <Input
            className="md:col-span-2"
            placeholder="شماره موبایل"
            name="phoneNumber"
            control={control}
            errors={errors}
          />
          <Input
            className="md:col-span-2"
            placeholder="رمز عبور"
            name="password"
            control={control}
            errors={errors}
          />
        </div>
        <Button
          type="submit"
          title="ثبت نام"
          variant="contained"
          className="md:self-end self-center z-20"
        />
      </form>
    </div>
  );
}

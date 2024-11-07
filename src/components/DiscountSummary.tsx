import { useInsuranceSummary } from "@/hooks/useInsuranceSummary";

export type DiscountType = {
  id: number | null;
  title: string;
};

export type DiscountState = {
  thirdParty: DiscountType;
  driver: DiscountType;
};
export const DiscountSummary = ({ discount }: { discount: DiscountState }) => {
  const { company, vehicleInfo, user } = useInsuranceSummary();

  return (
    <div className="text-black flex flex-col gap-4">
      <p>
        نام : <span>{user}</span>
      </p>
      <p>
        نوع خودرو : <span>{vehicleInfo?.vehicleName}</span>
      </p>
      <p>
        مدل خودرو : <span>{vehicleInfo?.modelName}</span>
      </p>
      <p>
        شرکت بیمه : <span>{company}</span>
      </p>
      <p>
        درصد تخفیف ثالث : <span>{discount.thirdParty.title}</span>
      </p>
      <p>
        درصد تخفیف حوادث راننده : <span>{discount.driver.title}</span>
      </p>
    </div>
  );
};

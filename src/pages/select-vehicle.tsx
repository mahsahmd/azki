import { Button } from "@/components/Button";
import Dropdown from "@/components/DropDown";
import { useGetVehicleTypes, VehicleModel } from "@/queries";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

type VehicleType = {
  id: null | number;
  title: string;
};
type VehicleInfo = {
  type: VehicleType;
  model: VehicleType;
};
export default function SelectVehicleTyp() {
  const { data } = useGetVehicleTypes();
  const router = useRouter();
  const [vehicleModel, setVehicleModel] = useState<VehicleModel[]>([]);
  const [vehicleInfo, setVehicleInfo] = useState<VehicleInfo>({
    type: {
      id: null,
      title: "",
    },
    model: {
      id: null,
      title: "",
    },
  });
  const handleVehicleTypeChange = useCallback(
    (selectedType: VehicleType) => {
      const type = selectedType?.title || "";
      const modelOptions =
        data?.find((item) => item.title === type)?.usages || [];

      setVehicleModel(modelOptions);
      setVehicleInfo((prev) => ({
        ...prev,
        type: selectedType,
        model: { id: null, title: "" },
      }));
    },
    [data]
  );

  const handleChange = useCallback(
    (key: string, value: VehicleType) => {
      setVehicleInfo((prev) => ({
        ...prev,
        [key]: value,
      }));

      if (key === "type") {
        handleVehicleTypeChange(value);
      }
    },
    [handleVehicleTypeChange]
  );
  const isNextButtonDisabled = !vehicleInfo.model?.id || !vehicleInfo.type?.id;

  const onGoToNextPage = useCallback(() => {
    const { type, model } = vehicleInfo;

    router.push(
      {
        pathname: "/select-company",
        query: {
          ...router.query,
          vehicleType: type.id,
          vehicleModel: model.id,
        },
      },
      undefined,
      { shallow: true, scroll: false }
    );
  }, [router, vehicleInfo]);

  return (
    <div className="w-full flex flex-col gap-8">
      <h3 className="text-black md:font-bold font-medium text-xl text-center md:text-start w-full">
        بیمه شخص ثالث
      </h3>
      <p className="text-gray-400  font-medium text-sm text-center md:text-start w-full">
        نوع و مدل خودروی خود را انتخاب کنید
      </p>
      <div className="w-full flex gap-4 flex-col max-w-xl">
        <div className="w-full flex gap-4 flex-col md:flex-row">
          <Dropdown
            options={data}
            placeholder="نوع خودرو"
            value={vehicleInfo.type?.title}
            name="type"
            onChange={handleChange}
          />
          <Dropdown
            options={vehicleModel}
            name="model"
            placeholder="مدل خودرو"
            value={vehicleInfo.model?.title}
            onChange={handleChange}
          />
        </div>

        <div className="flex flex-row items-center justify-between">
          <Button
            title="بازگشت"
            showIcon
            variant="outlined"
            isBackButton
            onClick={() => router.back()}
          />
          <Button
            onClick={onGoToNextPage}
            title="مرحله بعد"
            showIcon
            variant="outlined"
            disabled={isNextButtonDisabled}
          />
        </div>
      </div>
    </div>
  );
}

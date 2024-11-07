import { DiscountSummary, Button, Dropdown, Modal } from "@/components";
import { useGetDiscount } from "@/queries";
import { useCallback, useState } from "react";

type DiscountType = {
  id: null | number;
  title: string;
};
export default function SelectDiscount() {
  const { data } = useGetDiscount();
  const [openModal, setModalOpen] = useState(false);
  const [discount, setDiscount] = useState({
    thirdParty: {
      id: null,
      title: "",
    },
    driver: {
      id: null,
      title: "",
    },
  });

  const handleChange = useCallback((key: string, value: DiscountType) => {
    setDiscount((prev) => ({
      ...prev,
      [key]: value,
    }));
  }, []);

  const isNextButtonDisabled = !discount.thirdParty.id || !discount.driver.id;
  return (
    <div className="w-full flex flex-col gap-8">
      <h3 className="text-black md:font-bold font-medium text-xl text-center md:text-start w-full">
        بیمه شخص ثالث
      </h3>
      <p className="text-gray-400  font-medium text-sm text-center md:text-start w-full">
        درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید.
      </p>
      <div className="w-full flex gap-4 flex-col max-w-xl">
        <div className="w-full flex gap-4 flex-col">
          <Dropdown
            options={data}
            placeholder="درصد تخفیف ثالث"
            value={discount.thirdParty.title}
            name="thirdParty"
            onChange={handleChange}
          />
          <Dropdown
            options={data}
            name="driver"
            placeholder="درصد تخفیف حوادث راننده"
            value={discount.driver.title}
            onChange={handleChange}
          />
        </div>

        <Button
          onClick={() => setModalOpen(true)}
          title="استعلام قیمت"
          variant="contained"
          className="self-end"
          disabled={isNextButtonDisabled}
        />
        <Modal
          open={openModal}
          onClose={() => setModalOpen(false)}
          title="خلاصه اطلاعات"
        >
          <DiscountSummary discount={discount} />
        </Modal>
      </div>
    </div>
  );
}

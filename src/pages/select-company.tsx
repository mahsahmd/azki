import { Button } from "@/components/Button";
import Dropdown from "@/components/DropDown";
import { useGetCompanies } from "@/queries";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";

export default function SelectCompany() {
  const router = useRouter();
  const { data } = useGetCompanies();
  const [company, setCompany] = useState<{ id: number | null; title: string }>({
    id: null,
    title: "",
  });
  const handleCompanyChange = useCallback(
    (_: string, value: { id: number; title: string }) => {
      setCompany(value);
    },
    []
  );
  const isNextButtonDisabled = !company.id;

  const onGoToNextPage = useCallback(() => {
    router.push(
      {
        pathname: "/select-discount",
        query: {
          ...router.query,
          company: company.id,
        },
      },
      undefined,
      { shallow: true, scroll: false }
    );
  }, [router, company]);
  return (
    <div className="w-full flex flex-col gap-8">
      <h3 className="text-black md:font-bold font-medium text-xl text-center md:text-start w-full">
        بیمه شخص ثالث
      </h3>
      <p className="text-gray-400  font-medium text-sm text-center md:text-start w-full">
        شرکت بیمه گر قبلی خود را در این بخش وارد کنید.
      </p>
      <div className="w-full flex gap-4 flex-col max-w-xl">
        <div className="w-full flex gap-4 flex-col md:flex-row">
          <Dropdown
            options={data}
            placeholder="شرکت بیمه گر قبلی"
            value={company?.title}
            name="company"
            onChange={handleCompanyChange}
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

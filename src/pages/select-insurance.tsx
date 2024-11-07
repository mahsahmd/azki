import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback } from "react";

export default function SelectInsurance() {
  const router = useRouter();

  const insuranceTypes = [
    { key: "third_party", value: "شخص ثالث" },
    { key: "body", value: "بدنه" },
  ];
  const onGoToNextPage = useCallback(
    (type: string) => {
      router.push(
        {
          pathname: "/select-vehicle",
          query: {
            ...router.query,
            insurance: type,
          },
        },
        undefined,
        { shallow: true, scroll: false }
      );
    },
    [router]
  );
  return (
    <div className="w-full ">
      <h3 className="text-black md:font-bold font-medium text-xl text-center md:text-start w-full">
        انتخاب بیمه
      </h3>
      <div className="flex mt-8 gap-8">
        {insuranceTypes.map((item) => (
          <div
            key={item.key}
            className={`  border-inputBorder rounded-lg  w-24 h-24 border text-black font-semibold text-xs`}
          >
            <button
              className={`flex w-full h-full flex-col gap-4 items-center justify-center ${
                item.key === "body"
                  ? "bg-[#fafafa] opacity-30  cursor-not-allowed"
                  : ""
              }`}
              onClick={() => onGoToNextPage(item.value)}
              disabled={item.key === "body"}
            >
              <Image
                src="/icons/insurance.svg"
                width={32}
                height={32}
                alt="insurance"
              />
              {item.value}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

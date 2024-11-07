import { useGetCompanies, useGetVehicleTypes } from "@/queries";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

export const useInsuranceSummary = () => {
  const { data: vehicleData } = useGetVehicleTypes();
  const { data: companyData } = useGetCompanies();
  const [user, setUser] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUser(localStorage.getItem("userInfo") || "");
    }
  }, []);
  const router = useRouter();
  const getSelectedVehicleInfo = useMemo(() => {
    const vehicleType = router.query.vehicleType;
    const vehicleModel = router.query.vehicleModel;
    if (vehicleType && vehicleModel) {
      const vehicle = vehicleData?.find(
        (vehicle) => vehicle.id === Number(vehicleType)
      );
      const model = vehicle?.usages.find(
        (model) => model.id === Number(vehicleModel)
      );
      return {
        vehicleName: vehicle?.title,
        modelName: model?.title,
      };
    }
  }, [router.query.vehicleModel, router.query.vehicleType, vehicleData]);
  const getSelectedCompanyInfo = useMemo(() => {
    const selectedCompany = router.query.company;
    if (selectedCompany) {
      return companyData?.find(
        (company) => company.id === Number(selectedCompany)
      )?.title;
    }
  }, [companyData, router.query.company]);

  return {
    company: getSelectedCompanyInfo,
    user,
    vehicleInfo: getSelectedVehicleInfo,
  };
};

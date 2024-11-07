import { useQuery } from "@tanstack/react-query";

export type VehicleModel = {
  id: number;
  title: string;
};
type VehicleTypeResponse = {
  id: number;
  title: string;
  usages: VehicleModel[];
};

export const useGetVehicleTypes = () => {
  const { data } = useQuery<VehicleTypeResponse[]>({
    queryKey: ["vehicleTypes"],
    queryFn: async () => {
      const response = await fetch(
        "https://www.azki.com/api/product/vehicle/types"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    },
  });
  return {
    data,
  };
};

import { useQuery } from "@tanstack/react-query";
import { VehicleTypeResponse } from "./types";

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

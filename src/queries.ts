import { useQuery } from "@tanstack/react-query";

export const useGetVehicleTypes = () => {
  const { data, isFetching } = useQuery({
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
    isLoading: isFetching,
  };
};

import { useQuery } from "@tanstack/react-query";
import { Company } from "./types";

export const useGetCompanies = () => {
  const { data } = useQuery<Company[]>({
    queryKey: ["companies"],
    queryFn: async () => {
      const response = await fetch(
        "https://www.azki.com/api/product/third/companies"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data?.map((item: Company) => ({
        id: item.id,
        title: item.title,
      }));
    },
  });
  return {
    data,
  };
};

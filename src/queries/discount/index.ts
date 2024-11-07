import { useQuery } from "@tanstack/react-query";

type DiscountItem = {
  id: number;
  title: string;
};
export const useGetDiscount = () => {
  const { data } = useQuery<DiscountItem[]>({
    queryKey: ["discount"],
    queryFn: async () => {
      const response = await fetch(
        "https://www.azki.com/api/product/third/third-discounts"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data?.map((item: DiscountItem) => ({
        id: item.id,
        title: item.title,
      }));
    },
  });
  return {
    data,
  };
};

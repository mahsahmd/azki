import { useGetVehicleTypes } from "@/queries";

export default function SelectVehicleTyp() {
  const data = useGetVehicleTypes();
  console.log("🚀 ~ SelectVehicleTyp ~ data:", data);
  return <p></p>;
}

import { Button } from "@/components/Button";
import { useRouter } from "next/router";

export default function SelectCompany() {
  const router = useRouter();
  return (
    <div>
      <Button
        title="بازگشت"
        showIcon
        variant="outlined"
        isBackButton
        onClick={() => router.back()}
      />
    </div>
  );
}

import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const Navbar = () => {
  const router = useRouter();
  const [user, setUser] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setUser(localStorage.getItem("userInfo") || "");
    }
  }, []);
  return (
    <nav className="absolute top-0 w-full flex justify-between py-5 px-10">
      <Image width={24} height={24} src="./icons/logo.svg" alt="logo" />
      <h1 className="font-medium text-black hidden md:block">
        سامانه مقایسه و خرید آنلاین
      </h1>
      <p className="font-medium text-xs text-black flex items-center gap-2">
        {router.pathname !== "/" && (
          <Image width={18} height={18} src="/icons/user.svg" alt="user" />
        )}
        {router.pathname === "/" ? "ثبت نام" : user}
      </p>
    </nav>
  );
};

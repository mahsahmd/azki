import Image from "next/image";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <nav className="absolute top-0 w-full flex justify-between py-5 px-10">
      <Image width={24} height={24} src="./icons/logo.svg" alt="logo" />
      <p className="font-medium text-black hidden md:block">
        سامانه مقایسه و خرید آنلاین
      </p>
      <p className="font-medium text-black">
        {router.pathname === "/" ? "ثبت نام" : ""}
      </p>
    </nav>
  );
};

export default Navbar;

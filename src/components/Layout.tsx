import Image from "next/image";
import Navbar from "./Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col-reverse md:flex-row-reverse w-screen h-screen relative">
      <Navbar />
      <div className="absolute md:w-[600px] md:h-52 w-64 h-28 bottom-32 md:bottom-6 left-4">
        <Image
          src="/images/car-green.svg"
          alt="Green car illustration"
          layout="fill"
          priority
        />
      </div>

      <div className="bg-secondary h-full w-full  md:max-w-80 max-h-32 md:max-h-none"></div>
      <div className="w-full">{children}</div>
    </div>
  );
};

export default Layout;

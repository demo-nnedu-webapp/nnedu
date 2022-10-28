import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/dnedlogo.png";

export const Logo = ({ width, height }) => {
  return (
    <>
      <Link href="/">
        <Image
          src={logo}
          alt="dnedlogo"
          width={width}
          height={height}
          priority={100}
        />
      </Link>
    </>
  );
};

import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/dnedlogo.png";
import logoWhite from "../../assets/logowhite.png";

export const Logo = ({ width, height, white }) => {
  return (
    <>
      <Link href="/">
        {white ? (
          <Image
            src={logoWhite}
            alt="dnedlogo"
            width={width}
            height={height}
            priority={100}
          />
        ) : (
          <Image
            src={logo}
            alt="dnedlogo"
            width={width}
            height={height}
            priority={100}
          />
        )}
      </Link>
    </>
  );
};

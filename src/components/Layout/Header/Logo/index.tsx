import { getImagePrefix } from "@/utils/utils";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src="/images/Streamers1.png"
        alt="logo"
        width={220}
        height={50}
        style={{ marginTop:"-10"}}
        quality={100}
      />

      
    </Link>
  );
};

export default Logo;

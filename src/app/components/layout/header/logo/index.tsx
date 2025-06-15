import Image from 'next/image';
import Link from 'next/link';

const Logo: React.FC = () => {

  return (
    <Link href="/">
              <span style={{color:"blue", fontSize:"25px", fontFamily:"bold"}}>Urban </span>
    </Link>
  );
};

export default Logo;
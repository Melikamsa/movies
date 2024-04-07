import Link from "next/link";
import {
  SlSocialFacebook,
  SlSocialInstagram,
  SlSocialTwitter,
} from "react-icons/sl";

const Footer = () => {
  return (
    <footer className="bg-[#595958]  p-[10px] capitalize h-auto sm:flex sm:gap-[15px]">
      <div className="text-[#fbee9c] bg-[#2c2c2c] w-[100%] rounded-md p-[20px] mx-auto my-[20px] ">
        <h2 className="text-center mb-[70px]  min-[965px]:mb-[40px] text-[20px]">
          Follow us on social media
        </h2>
        <ul className="flex justify-center items-center text-[25px] gap-[25px] sm:p-[10px] ">
          <li className="hover:bg-[#595958] p-[10px] rounded-[50%]">
            <Link href={""}>
              <SlSocialInstagram />
            </Link>
          </li>
          <li className="hover:bg-[#595958] p-[10px] rounded-[50%]">
            <Link href={""}>
              <SlSocialFacebook />
            </Link>
          </li>
          <li className="hover:bg-[#595958] p-[10px] rounded-[50%]">
            <Link href={""}>
              <SlSocialTwitter />
            </Link>
          </li>
        </ul>
      </div>

      <div className="text-[#fbee9c] bg-[#2c2c2c] w-[100%] rounded-md p-[20px] mx-auto my-[20px]">
        <h2 className="text-center mb-[60px] text-[20px]">
          Share your comments and suggestions with us
        </h2>
        <div className="text-center p-[10px] rounded-md hover:bg-[#595958]">
          <Link href={""}>...@gmail.com</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

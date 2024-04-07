import Link from "next/link";
import { TbMovie, TbSearch } from "react-icons/tb";

const Header = () => {
  return (
    <header className="bg-[#595958] px-[10px] min-[1350px]:px-[30px] py-[15px] flex justify-between items-center">
      <div className="flex items-center justify-center">
        <div className="flex items-center justify-center text-[25px] min-[1350px]:text-[40px] sm:text-[30px] lg:text-[35px] mt-[3px] sm:mt-[3px] lg:mt-[5px] text-[#2c2c2c]">
          <TbMovie />
        </div>

        <h1 className=" text-[25px] sm:text-[30px] lg:text-[35px] min-[1350px]:text-[38px] uppercase text-[#fbee9c]">
          movie
        </h1>
      </div>

      <div className="capitalize">
        <div className="flex justify-between items-center min-[1350px]:gap-5">
          <div className="flex items-center ">
            <input
              className=" max-[450px]:w-[100px] py-[5px] px-[10px] lg:px-[15px] min-[1350px]:px-[20px] hover:border-yellow-200 bg-[#fbee9c] rounded-tl-md rounded-bl-md hover:text-[#fbee9c] hover:bg-[#373737] text-[15px] lg:text-[20px] sm:text-[18px] min-[1350px]:text-[22px] ml-[5px] hover:placeholder:text-[#fbee9c] placeholder:text-[#595958] outline-none "
              placeholder="Search ..."
            ></input>
            <button className="bg-[#fbee9c] h-[32px] sm:h-[37px] lg:h-[40px] min-[1350px]:h-[43px] w-5 sm:w-7 lg:w-8 flex items-center justify-center rounded-tr-md rounded-br-md text-[#373737]">
              <TbSearch />
            </button>
          </div>

          <p className="py-[5px] px-[10px] lg:px-[15px] min-[1350px]:px-[20px] hover:border-yellow-200 bg-[#fbee9c] text-[#595958] rounded-lg hover:text-[#fbee9c] hover:bg-[#373737] text-[15px] lg:text-[20px] sm:text-[18px] min-[1350px]:text-[22px] mx-[5px]">
            <Link href={"/"}>home</Link>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;

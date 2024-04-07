import NotFound from "@/app/not-found";
import Image from "next/image";

const getData = async (id) => {
  const data = await fetch(`https://moviesapi.ir/api/v1/movies/${id}`);
  return data.json();
};

const Single = async ({ params }) => {
  const data = await getData(params.id);

  if (!data.id) {
    return <NotFound />;
  }
  return (
    <main className="font-sans rounded-xl leading-9 my-[20px] mx-[10px] bg-[#595958] py-[30px] px-[10px] lg:flex lg:items-center lg:justify-between ">
      <Image
        className="rounded-2xl m-auto lg:order-1"
        width={320}
        height={320}
        alt={data.title}
        src={data.poster}
      />

      <div className="tracking-wider my-[20px] md:px-[20px] lg:w-[60%] xl:w-[70%]">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="uppercase text-[#fbee9c] text-[17px] xl:text-[22px] 2xl:text-[26px] font-bold">
            title :{" "}
          </h1>
          <span className="font-semibold xl:text-[18px] 2xl:text-[20px]">
            {data.title}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="uppercase text-[#fbee9c] text-[17px] xl:text-[22px] 2xl:text-[26px] font-bold">
            year :{" "}
          </p>
          <span className="font-semibold xl:text-[18px] 2xl:text-[20px]">
            {data.year}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="uppercase text-[#fbee9c] text-[17px] xl:text-[22px] 2xl:text-[26px] font-bold">
            rated :{" "}
          </p>
          <span className="font-semibold xl:text-[18px] 2xl:text-[20px]">
            {data.rated}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="uppercase text-[#fbee9c] text-[17px] xl:text-[22px] 2xl:text-[26px] font-bold">
            released :{" "}
          </p>
          <span className="font-semibold xl:text-[18px] 2xl:text-[20px]">
            {data.released}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="uppercase text-[#fbee9c] text-[17px] xl:text-[22px] 2xl:text-[26px] font-bold">
            runtime :{" "}
          </p>
          <span className="font-semibold xl:text-[18px] 2xl:text-[20px]">
            {data.runtime}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="uppercase text-[#fbee9c] text-[17px] xl:text-[22px] 2xl:text-[26px] font-bold">
            director :{" "}
          </p>
          <span className="font-semibold xl:text-[18px] 2xl:text-[20px]">
            {data.director}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="uppercase text-[#fbee9c] text-[17px] xl:text-[22px] 2xl:text-[26px] font-bold">
            country :{" "}
          </p>
          <span className="font-semibold xl:text-[18px] 2xl:text-[20px]">
            {data.country}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="uppercase text-[#fbee9c] text-[17px] xl:text-[22px] 2xl:text-[26px] font-bold">
            imdb_rating :{" "}
          </p>
          <span className="font-semibold xl:text-[18px] 2xl:text-[20px]">
            {data.imdb_rating}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="uppercase text-[#fbee9c] text-[17px] xl:text-[22px] 2xl:text-[26px] font-bold">
            imdb_votes :{" "}
          </p>
          <span className="font-semibold xl:text-[18px] 2xl:text-[20px]">
            {data.imdb_votes}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="uppercase text-[#fbee9c] text-[17px] xl:text-[22px] 2xl:text-[26px] font-bold">
            type :{" "}
          </p>
          <span className="font-semibold xl:text-[18px] 2xl:text-[20px]">
            {data.type}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="uppercase text-[#fbee9c] text-[17px] xl:text-[22px] 2xl:text-[26px] font-bold">
            genres :
          </p>
          <span className="flex flex-wrap items-center gap-2">
            {data.genres.map((genre, i) => (
              <div
                className="font-semibold xl:text-[18px] rounded-md bg-[#2c2c2c] px-[10px] 2xl:text-[20px]"
                key={i}
              >
                {genre}
              </div>
            ))}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="uppercase text-[#fbee9c] text-[17px] xl:text-[22px] 2xl:text-[26px] font-bold">
            actors :{" "}
          </p>
          <span className="font-semibold xl:text-[18px] 2xl:text-[20px]">
            {data.actors}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="uppercase text-[#fbee9c] text-[17px] xl:text-[22px] 2xl:text-[26px] font-bold">
            writer :{" "}
          </p>
          <span className="font-semibold xl:text-[18px] 2xl:text-[20px]">
            {data.writer}
          </span>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <p className="uppercase text-[#fbee9c] text-[17px] xl:text-[22px] 2xl:text-[26px] font-bold">
            plot :{" "}
          </p>
          <span className="font-semibold xl:text-[18px] 2xl:text-[20px]">
            {data.plot}
          </span>
        </div>
      </div>
    </main>
  );
};

export default Single;

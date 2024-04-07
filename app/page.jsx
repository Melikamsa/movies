import Image from "next/image";
import Link from "next/link";

const getData = async () => {
  const data = await fetch("https://moviesapi.ir/api/v1/movies?page={page}");
  return data.json();
};

const Home = async () => {
  const data = await getData();
  return (
    <main className="my-[50px] mx-[10px] capitalize flex flex-wrap items-center justify-between lg:text-[20px]">
      <>
        <title>Movie site</title>
        <meta name="description" content="movies" />
        <Link href="/images.png" />
      </>

      <div className=" flex flex-wrap items-center justify-between gap-5 ">
        {data.data.map((Movie, i) => {
          return (
            <Link
              href={`/movies/${Movie.id}`}
              key={i}
              className="border-2 bg-[#fbee9c] rounded-md  w-64 border-[#595958] h-[420px] lg:h-[450px] mx-auto"
            >
              <div className="px-[15px] pt-[15px]">
                <Image
                  className="rounded-md"
                  width={220}
                  height={230}
                  src={Movie.poster}
                  alt={Movie.title}
                />
              </div>
              <p className="m-[10px] lg:m-[12px] text-center text-[#2c2c2c]">
                {Movie.title}
              </p>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Home;

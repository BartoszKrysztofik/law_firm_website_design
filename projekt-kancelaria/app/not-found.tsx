import Link from "next/link";

const NotFound = () => {
  return (
    <div className="w-full h-full bg-Page404 flex-col flex justify-evenly items-center">
      <div>
        <h1 className="text-RedAllert text-LawName flex justify-center items-center">
          Uuuuuuuuppppssssss.....
        </h1>
        <h2 className="text-RedAllert text-LawName flex justify-center items-center">
          Coś poszło nie tak..
        </h2>
      </div>
      <Link href="/" passHref className="flex justify-center items-start">
        Wróć na stronę główną
      </Link>
    </div>
  );
};

export default NotFound;

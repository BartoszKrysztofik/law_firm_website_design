import Link from "next/link";

type BookmarksProps = {
  descriptions1?: string;
  descriptions2?: string;
  descriptions3?: string;
  descriptions4?: string;
  descriptions5?: string;
  descriptions6?: string;
  iconHome?: React.ReactElement;
  icon1?: React.ReactElement;
  icon2?: React.ReactElement;
  icon3?: React.ReactElement;
  icon4?: React.ReactElement;
  icon5?: React.ReactElement;
  icon6?: React.ReactElement;
  href2?: string;
  href3?: string;
  href4?: string;
  href5?: string;
  href6?: string;
};

const Bookmarks: React.FC<BookmarksProps> = ({
  descriptions1,
  descriptions2,
  descriptions3,
  descriptions4,
  descriptions5,
  descriptions6,
  iconHome,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  href2,
  href3,
  href4,
  href5,
  href6,
}) => {
  return (
    <div className="flex h-full min-h-40 max-h-50 bg-DarkGreen items-center justify-around shadow-inner-shadow px-10">
      {descriptions1 && (
        <Link className="text-White text-ButtonFont" href='/' passHref>
            {descriptions1}
            {icon1}
        </Link>
      )}
      {descriptions2 && (
        <Link className="text-White text-ButtonFont" href={`/${href2}`} passHref>
          {descriptions2}
          {icon2}
        </Link>
      )}
      {descriptions3 && (
        <Link className="text-White text-ButtonFont" href={`/${href3}`} passHref>
          {descriptions3}
          {icon3}
            </Link>
      )}
      {descriptions4 && (
        <Link className="text-White text-ButtonFont" href={`/${href4}`} passHref>
          {descriptions4}
          {icon4}
        </Link>
      )}
      {descriptions5 && (
        <Link className="text-White text-ButtonFont" href={`/${href5}`} passHref>
          {descriptions5}
          {icon5}
        </Link>
      )}
      {descriptions6 && (
        <Link className="text-White text-ButtonFont" href={`/${href6}`} passHref>
          {descriptions6}
          {icon6}
        </Link>
      )}
    </div>
  );
};

export default Bookmarks;
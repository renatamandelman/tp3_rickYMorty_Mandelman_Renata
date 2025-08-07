import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav
        className={`fixed top-0 left-0 h-screen  px-1 py-4  text-white  z-1
  
md:translate-x-0 flex flex-col items-center`}
      >
        <div>
          <Link href="/">
            <Image
              src="/assets/icon.png"
              alt="Rick icon"
              width={70}
              height={70}
            />
          </Link>
        </div>
        <div className="fixed top-1/2 left-4 text-[#88e23b] -translate-y-1/2 flex flex-col items-center gap-4 bg-white/10 backdrop-blur-md p-3 rounded-lg shadow-md z-50">
          <Link href={`/character`}>
            <Image
              src="/assets/icons8-rick-sanchez-50.png"
              alt="Rick icon"
              width={36}
              height={36}
            />
          </Link>
          <Link href={`/episode`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              viewBox="0 0 16 16"
            >
              <g fill="currentColor">
                <path d="M2 3a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11A.5.5 0 0 0 2 3m2-2a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 0-1h-7A.5.5 0 0 0 4 1m2.765 5.576A.5.5 0 0 0 6 7v5a.5.5 0 0 0 .765.424l4-2.5a.5.5 0 0 0 0-.848z"></path>
                <path d="M1.5 14.5A1.5 1.5 0 0 1 0 13V6a1.5 1.5 0 0 1 1.5-1.5h13A1.5 1.5 0 0 1 16 6v7a1.5 1.5 0 0 1-1.5 1.5zm13-1a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-.5-.5h-13A.5.5 0 0 0 1 6v7a.5.5 0 0 0 .5.5z"></path>
              </g>
            </svg>
          </Link>
          <Link href={`/location`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              viewBox="0 0 24 24"
            >
              <g fill="none" stroke="currentColor" strokeWidth={1.5}>
                <path d="M6 4.71c.78.711 2.388 2.653 2.575 4.737c.125 1.395.82 2.603 1.925 3.184c.439.23.942.363 1.5.369c.755.008 1.518-.537 1.516-1.292c0-.233-.039-.472-.099-.692A1.4 1.4 0 0 1 13.5 10c.61-1.257 1.81-1.595 2.76-2.278c.421-.303.806-.623.975-.88c.469-.71.937-2.131.703-2.842"></path>
                <path
                  strokeLinecap="round"
                  d="M22 13c-.33.931-.562 3.375-4.282 3.414c0 0-.793 0-1.718.22m-2.563 1.642c-.791 1.49-.33 3.103 0 3.724"
                ></path>
                <path
                  strokeLinecap="round"
                  d="M7 20.662A9.96 9.96 0 0 0 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.821.487 3.53 1.338 5"
                ></path>
              </g>
            </svg>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

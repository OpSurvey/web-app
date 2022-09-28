import Link from "next/link";
import Button from "./Button";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function NavbarLanding() {
  const width = useWindowDimensions();

  return (
    <>
      <nav className="bg-black flex justify-between w-full pt-0 pr-2 pl-4 h-16 xs:pl-6 xs:py-0 md:px-2 md:pl-20 md:h-20 lg:px-2 lg:pl-10 xl:px-2 2xl:pl-40 2xl:pr-40">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="/">
            <a className="flex items-center">
              <span className="text-lime-400 self-center font-sans text-2xl font-semibold whitespace-nowrap">
                OpSurvey
              </span>
            </a>
          </Link>

          <div className="flex">
            <ul className="bg-black flex flex-col pr-4 xs:pr-2 md:p-4 mt-0 md:mt-0 md:text-sm md:font-medium">
              <li>
                <Link href="./login">
                  <a
                    className="block py-0 pr-0 pl-3 xs:pr-0 sm:pr-0 md:pr-20 lg:px-0 text-white rounded hover:text-lime-400 md:bg-transparent md:text-white md:hover:text-lime-400"
                    aria-current="page"
                  >
                    Login
                  </a>
                </Link>
              </li>
            </ul>

            <Link href="./quoter">
              <a>
                {width > 768 ? (
                  <>
                    <Button
                      style="bg-lime-400 text-black"
                      text="Empieza ahora"
                    />
                  </>
                ) : (
                  <>
                    <Button
                      style="bg-lime-400 text-black hidden"
                      text="Empieza ahora"
                    />
                  </>
                )}
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

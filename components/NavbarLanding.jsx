import Link from "next/link";
import Button from "./Button";
import useWindowDimensions from "../hooks/useWindowDimensions";

export default function NavbarLanding() {
  const width = useWindowDimensions();

  return (
    <>
      <nav className="bg-black w-full flex top-0 left-0 xs:pl-6 xs:py-0 md:px-2 py-10 h-20 ">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <span className="text-lime-400 self-center font-sans text-2xl font-semibold whitespace-nowrap">
              OpSurvey
            </span>
          </a>
          <div className="flex md:order-2">
            <ul className="flex flex-col p-4 mt-0 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:bg-black">
              <li>
                <Link href="./login">
                  <a
                    className="block py-2 pr-4 pl-3 text-white rounded hover:text-lime-400 md:bg-transparent md:text-white md:hover:text-lime-400 md:p-0"
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

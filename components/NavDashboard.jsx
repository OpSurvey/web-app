import Link from "next/link";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useState } from "react"; // import state

export default function NavDashboard() {
  const width = useWindowDimensions();
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false

  return (
    <>
      <nav className="bg-black px-2 sm:px-4 py-2.5">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link href="../user/dashboard">
            <a className="flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap text-lime-400">
                OpSurvey
              </span>
            </a>
          </Link>

          {width > 768 ? (
            <>
              <div
                className="hidden w-full md:block md:w-auto"
                id="navbar-default"
              >
                <ul className="flex flex-col p-4 mt-4 border md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-black">
                  <li>
                    <Link href="../clients">
                      <a
                        className="block py-2 pr-4 pl-3 text-white rounded hover:text-lime-400 md:bg-transparent md:text-white md:hover:text-lime-400 md:p-0"
                        aria-current="page"
                      >
                        Clientes
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="../materials">
                      <a className="block py-2 pr-4 pl-3 text-white rounded hover:bg-lime-400 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0">
                        Materiales
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="../recipe">
                      <a className="block py-2 pr-4 pl-3 text-white rounded hover:bg-lime-400 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0">
                        Crear receta
                      </a>
                    </Link>
                  </li>

                  <li>
                    <Link href="../recipeList">
                      <a className="block py-2 pr-4 pl-3 text-white rounded hover:bg-lime-400 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0">
                        Lista de recetas
                      </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <nav>
                <section className="MOBILE-MENU flex lg:hidden bg-black">
                  <div
                    className="HAMBURGER-ICON space-y-2"
                    onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                  >
                    <span className="block h-0.5 w-8 bg-white"></span>
                    <span className="block h-0.5 w-8 bg-white"></span>
                    <span className="block h-0.5 w-8 bg-white"></span>
                  </div>

                  <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                    <div
                      className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                      onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                    >
                      <svg
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                      <li className="border-b border-gray-400 my-8">
                        <Link href="../client">
                          <a
                            className="block py-2 pr-4 pl-3 text-white rounded hover:text-lime-400 md:bg-transparent md:text-white md:hover:text-lime-400 md:p-0"
                            aria-current="page"
                          >
                            Agregar cliente
                          </a>
                        </Link>
                      </li>
                      <li className="border-b border-gray-400 my-8">
                        <Link href="#">
                          <a className="block py-2 pr-4 pl-3 text-white rounded hover:bg-lime-400 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0">
                            Agregar material
                          </a>
                        </Link>
                      </li>
                      <li className="border-b border-gray-400 my-8">
                        <Link href="../materials">
                          <a className="block py-2 pr-4 pl-3 text-white rounded hover:bg-lime-400 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0">
                            Lista de materiales
                          </a>
                        </Link>
                      </li>
                      <li className="border-b border-gray-400 my-8">
                        <Link href="../recipe">
                          <a className="block py-2 pr-4 pl-3 text-white rounded hover:bg-lime-400 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0">
                            Crear receta
                          </a>
                        </Link>
                      </li>
                      <li>
                        <Link href="../recipeList">
                          <a className="block py-2 pr-4 pl-3 text-white rounded hover:bg-lime-400 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0">
                            Lista de recetas
                          </a>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </section>

                <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                  <li>
                    <a href="/about">About</a>
                  </li>
                  <li>
                    <a href="/portfolio">Portfolio</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                </ul>
              </nav>
              <style>
                {`
                .hideMenuNav {
                  display: none;
                }
                .showMenuNav {
                  display: block;
                  position: absolute;
                  width: 100%;
                  height: 100vh;
                  top: 0;
                  left: 0;
                  background: #252525;
                  z-index: 10;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-evenly;
                  align-items: center;
                }
              `}
              </style>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

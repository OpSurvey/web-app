import Link from "next/link";
import Button from "./Button";

export default function NavbarLanding() {
  return (
    <>
      <nav className="bg-black px-2 sm:px-4 py-2.5 fixed w-full top-0 left-0 border-b border-black">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a href="/" className="flex items-center">
            <span className="text-lime-400 self-center font-sans text-2xl font-semibold whitespace-nowrap">
              OpSurvey
            </span>
          </a>
          <div className="flex md:order-2">
            <Link href="./quoter">
              <a >
                <Button style="bg-lime-400 text-black" text="Empieza ahora" />
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}

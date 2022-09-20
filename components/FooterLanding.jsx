import Link from "next/link";

export default function FooterLanding() {
  return (
    <footer className="bg-black md:flex md:items-center md:justify-between md:p-6">
      <span className="pl-36 text-base text-lime-400 sm:text-center">
        <img />
        <a href="https://www.linkedin.com/" className="hover:underline">
          Linkedin/OpSurvey
        </a>
      </span>
      <span className="pr-36 flex flex-wrap items-center mt-3 text-base text-lime-400 sm:mt-0">
        <Link href="/">
        <a className="mr-4 hover:underline md:mr-6 ">
          OpSurvey
        </a>
        </Link>

      </span>
    </footer>
  );
}

import Link from "next/link";

export default function FooterLanding() {
  return (
    <footer className="bg-black xs:p-3 md:flex flex-row md:items-center md:justify-between md:p-6">
      <span className="md:pl-36 text-base text-lime-400 sm:text-center">
        <img />
        <a href="https://www.linkedin.com/" className="hover:underline">
          Linkedin/OpSurvey
        </a>
      </span>
      <span className="xs:p-0 md:pr-36 flex flex-wrap items-center mt-3 text-base text-lime-400">
        <Link href="/">
        <a className="xs:invisible md:visible mr-4 hover:underline md:mr-6 ">
          OpSurvey
        </a>
        </Link>

      </span>
    </footer>
  );
}

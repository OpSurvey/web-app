import Link from "next/link";

export default function FooterLanding() {
  return (
    <>
      <footer className="bg-black h-[60px] xs:p-3 md:flex flex-row md:items-center md:justify-between md:p-6">
        <span className="xs:pl-6 md:pl-36 text-base text-lime-400 sm:text-center">
          <Link href="https://www.linkedin.com/">
            <a className="hover:underline">Linkedin/OpSurvey</a>
          </Link>
        </span>
        <span className="md:pr-36 flex flex-wrap items-center text-base text-lime-400">
          <Link href="/">
            <a className="xs:invisible md:visible mr-4 hover:underline md:mr-6">
              OpSurvey
            </a>
          </Link>
        </span>
      </footer>
    </>
  );
}

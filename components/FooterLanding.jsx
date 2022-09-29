import Link from "next/link";

export default function FooterLanding() {
  return (
    <>
      <footer className="container mx-auto bg-black h-[60px] flex flex-row items-center justify-between p-2 xs:p-3 md:flex md:flex-row md:items-center md:justify-between md:p-6">
        <span className="text-base invisible text-lime-400 text-center md:visible md:pl-10">
          <Link href="https://www.linkedin.com/">
            <a className="hover:underline">Linkedin/OpSurvey</a>
          </Link>
        </span>
        <span className="md:pr-12 flex flex-wrap items-center text-base text-lime-400">
          <Link href="/">
            <a className="md:visible mr-4 hover:underline md:mr-6">OpSurvey</a>
          </Link>
        </span>
      </footer>
    </>
  );
}

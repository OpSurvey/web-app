import ButtonLanding from "./ButtonLanding";

export default function NavbarLanding() {
  return (
    <>
      <nav className="bg-black px-2 sm:px-4 py-2.5 fixed w-full z-20 top-0 left-0 border-b border-black">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <a 
            href="#" 
            className="flex items-center">
            <span 
              class="text-lime-400 self-center text-2xl font-semibold whitespace-nowrap">
              OpSurvey
            </span>
          </a>
          <div 
          className="flex md:order-2">
          <ButtonLanding fontColor='bg-lime-400'/>
          </div>
        </div>
      </nav>
    </>
  );
}
